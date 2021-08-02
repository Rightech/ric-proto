let nanoid = require('nanoid');
if (nanoid && typeof nanoid.nanoid === 'function') {
  nanoid = nanoid.nanoid;
}

const path = require('path');
const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');

const { callbackify } = require('util');
const { log } = require('@rightech/utils');

const PROTO_DIR = path.join(__dirname, '.');
const HOST_RESOLVE =
  !!process.env.RIC_GRPC_RESOLVE_HOST && process.env.RIC_GRPC_RESOLVE_HOST !== 'false';
const IN_KUBE = !!process.env.KUBERNETES_PORT;
const IS_DEV = process.env.NODE_ENV === 'development';

const DEFAULT_KUBE_PORT = 5071;
const CALL_DEBUG = Symbol('log');

const clientOpts = {
  'grpc.enable_retries': 1,
  'grpc.initial_reconnect_backoff_ms': 1000,
  'grpc.max_reconnect_backoff_ms': 10000,
  'grpc.min_reconnect_backoff_ms': 5000,
  'grpc.keepalive_time_ms': 360000,
  'grpc.keepalive_timeout_ms': 120000,
  'grpc.http2.min_time_between_pings_ms': 60000,
  'grpc.http2.min_ping_interval_without_data_ms': 60000,
  'grpc.keepalive_permit_without_calls': 0
};

const options = {
  keepCase: false,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true
};

class ServiceName {
  constructor(name) {
    this.full = name;
    this.parse();
  }

  parse() {
    const [name, path] = this.full.split('/');
    this.name = name;
    this.path = path;

    const [service, namespace] = this.name.split('.');
    this.service = service;
    this.namespace = namespace || '';
    this.fileName = `${service.replace(/-/gi, '')}.proto`;

    const parts = service.split('-');
    const [, subpackage] = parts;
    this.package = service.replace(/-/gi, '.');
    this.subpackage = subpackage;
    this.version = parts.find((part) => part.startsWith('v'));
  }

  getProtofilePath() {
    return path.join(PROTO_DIR, this.service, this.fileName);
  }
}

class GrpcServer {
  constructor(name, def, meta = {}) {
    this.meta = meta;
    this.name = new ServiceName(name);
    this.def = def;
    this.logEnabled = false;
    this.serviceDef = Object.values(this.def).find((x) => !!x.service).service;
  }

  setImpl(impl) {
    this.impl = impl;
  }

  getAsyncWrap(key, call) {
    const def = this.serviceDef[key];
    return () => {
      if (!this.impl[key]) {
        return Promise.reject({
          message: 'Not provided',
          code: grpc.status.UNIMPLEMENTED
        });
      }
      return this.impl[key](call.request, call);
    };
  }

  addCallDebugInfo(call, method) {
    call[CALL_DEBUG] = {
      id: nanoid(10),
      startedAt: Date.now(),
      method
    };
    return call[CALL_DEBUG];
  }

  getImpl() {
    return Object.keys(this.serviceDef).reduce((impl, key) => {
      const def = this.serviceDef[key];
      if (def.responseStream) {
        impl[key] = (call) => this.impl[key](call.request, call);
        return impl;
      }
      impl[key] = (call, callback) => {
        this.addCallDebugInfo(call, key);

        const callbackWithLogs = (err, res) => {
          if (err) {
            if (err.trySetMetadata) {
              err.trySetMetadata(call[CALL_DEBUG] || {});
            }
            this.logStep('err', call, err);
          } else {
            this.logStep('res', call, res);
          }
          return callback(err, res);
        };
        this.logStep('req', call);
        callbackify(this.getAsyncWrap(key, call))(callbackWithLogs);
      };
      return impl;
    }, {});
  }

  getPort() {
    const env = process.env.GRPC_PORT;
    if (env) {
      return env;
    }
    if (IN_KUBE || HOST_RESOLVE) {
      if (this.meta.port.k8s) {
        return this.meta.port.k8s;
      }
      return DEFAULT_KUBE_PORT;
    }
    if (this.meta.port.dev) {
      return this.meta.port.dev;
    }
    return DEFAULT_KUBE_PORT;
  }

  start(port = this.getPort(), host = '0.0.0.0') {
    const addr = `${host}:${port}`;
    this.ref = new grpc.Server();
    this.ref.addService(this.serviceDef, this.getImpl());
    this.ref.bindAsync(addr, grpc.ServerCredentials.createInsecure(), (err) => {
      if (err) {
        log.error(err);
        return;
      }
      this.ref.start();
      log.info(`${this.name.full} started at ${addr}`);
    });
  }

  logStep(step = 'req', call, res) {
    if (!this.logEnabled) {
      return;
    }
    const info = call[CALL_DEBUG];
    let json = JSON.stringify(res || call.request, (k, v) => {
      if (k === 'password') {
        return '[redacted]';
      }
      return v;
    });

    if (json.length > 130) {
      json = `${json.substring(0, 130)} ...`;
    }
    if (step === 'err') {
      json = `${res.name}: ${res.message}`;
      if (res.tags && res.tags.length) {
        json += ` with tags [${res.tags.join(', ')}]`;
      }
    }
    let stepSymbol = '?';
    if (step === 'req') stepSymbol = '>';
    if (step === 'res') stepSymbol = '<';
    if (step === 'err') stepSymbol = '!';

    log.debug(json, `${stepSymbol} ${info.method} ${info.id} [${this.name.service}]`);
    if (IS_DEV && step === 'err') {
      log.error(res);
    }
  }

  withLogEnabled() {
    this.logEnabled = true;
    return this;
  }
}

class GrpcClient {
  constructor(name, def, meta = {}) {
    this.meta = meta;
    this.name = new ServiceName(name);
    this.def = def;

    this.serviceCtor = Object.values(this.def).find((x) => !!x.service);
    if (this.name.path && this.def[this.name.path]) {
      this.serviceCtor = this.def[this.name.path];
    }
    this.serviceDef = this.serviceCtor.service;

    this.createRef();
  }

  createRef() {
    this.ref = new this.serviceCtor(this.getAddr(), this.getCredentials(), {
      ...clientOpts
    });

    log.info(`${this.name.full} will connect to ${this.getAddr()}`);
    this._export();
  }

  getCredentials() {
    return grpc.credentials.createInsecure();
  }

  getAddr() {
    return `${this.getHost()}:${this.getPort()}`;
  }

  getHost() {
    const devHost = process.env.RIC_GRPC_DEV_HOST;
    const isLocal = (process.env.RIC_GRPC_LOCAL_SVCS || '').includes(this.name.service);
    if (IN_KUBE || HOST_RESOLVE) {
      let hostname = this.name.service;
      if (this.meta.v) {
        hostname = `${hostname}-v${this.meta.v}`;
      }
      if (this.meta.stateful) {
        //const instanceName = this.instanceName || '0';
        //const hostname = `${this.name.full}-${instanceName}`;
        //return `${hostname}.${this.name.full}`
      }
      if (this.meta.ns && this.meta.ns.k8s) {
        hostname = `${hostname}.${this.meta.ns.k8s}`;
      }
      return hostname;
    }
    if (devHost && !isLocal) {
      return devHost;
    }
    return 'localhost';
  }

  getPort() {
    const devHost = process.env.RIC_GRPC_DEV_HOST || 'localhost';
    const devPort = this.meta.port.dev;

    if (!IN_KUBE && !HOST_RESOLVE && devPort && devHost) {
      return devPort;
    }
    if ((IN_KUBE || HOST_RESOLVE) && this.meta.port.k8s) {
      return this.meta.port.k8s;
    }
    return DEFAULT_KUBE_PORT;
  }

  _export() {
    Object.keys(this.serviceDef).forEach((key) => {
      this[key] = (req) => {
        return new Promise((resolve, reject) => {
          this.ref[key](req, (err, resp) => {
            err ? reject(err) : resolve(resp);
          });
        });
      };
    });
  }

  streamed() {
    const client = new GrpcClientStreamed(this.name.full, this.def, this.meta);
    client.ref = this.ref;
    client._export();
    return client;
  }
}

class GrpcClientStreamed extends GrpcClient {
  createRef() {
    /* nothing,
     getting this.ref through original client.streamed() call  */
  }

  _export() {
    Object.keys(this.serviceDef).forEach((key) => {
      this[key] = (req) => {
        return this.ref[key](req);
      };
    });
  }
}

class Registry {
  constructor() {
    this.meta = require(path.join(PROTO_DIR, 'services.json'));
    this.defs = {};
    this.servers = {};
    this.clients = {};
  }

  getMetaFor(name) {
    name = new ServiceName(name);
    return Object.assign(
      {},
      this.meta.default || {},
      this.meta.services[name.service] || {},
      this.meta.services[name.full] || {}
    );
  }

  loadDef(name) {
    if (this.defs[name]) {
      return this.defs[name];
    }
    name = new ServiceName(name);

    const file = protoLoader.loadSync(name.getProtofilePath(), options);
    const root = grpc.loadPackageDefinition(file);
    const def = name.package.split(".").reduce((o, k) => o && o[k], root)

    this.defs[name.full] = def;
    return def;
  }

  addServer(name, impl) {
    const def = this.loadDef(name);
    const meta = this.getMetaFor(name);
    const server = new GrpcServer(name, def, meta);
    server.setImpl(impl);
    server.start();
    this.servers[name] = server;
    return server;
  }

  getClient(name) {
    if (this.clients[name]) {
      return this.clients[name];
    }
    const def = this.loadDef(name);
    const meta = this.getMetaFor(name);
    const client = new GrpcClient(name, def, meta);
    this.clients[name] = client;
    return client;
  }
}

let registry = new Registry();
module.exports = {
  registry,

  /** ric modules compat */
  init: () => registry
};
