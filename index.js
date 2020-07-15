const nanoid = require('nanoid');

const path = require('path');
const grpc = require('grpc');
const protoLoader = require('@grpc/proto-loader');

const { callbackify } = require('util');
const { log } = require('@rightech/utils');

const PROTO_DIR = path.join(__dirname, '.');
const IN_KUBE = !!process.env.KUBERNETES_PORT;
const IS_DEV = process.env.NODE_ENV === 'development';

const DEFAULT_KUBE_PORT = 5071;
const CALL_DEBUG = Symbol('log');

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
    const [path, name] = this.full.split('/');
    this.path = path;
    this.name = name;

    const [service, namespace] = this.path.split('.');
    this.service = service;
    this.namespace = namespace || '';
    this.fileName = `${service.replace(/-/gi, '')}.proto`;
    const parts = service.split('-');
    const [, subpackage] = parts;
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
    if (IN_KUBE) {
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
    this.ref.bind(addr, grpc.ServerCredentials.createInsecure());
    this.ref.start();

    log.info(`${this.name.full} started at ${addr}`);
  }

  logStep(step = 'req', call, res) {
    if (!this.logEnabled) {
      return;
    }
    const info = call[CALL_DEBUG];
    let json = JSON.stringify(res || call.request);
    if (json.length > 130) {
      json = `${json.substring(0, 130)} ...`;
    }
    if (step === 'err') {
      json = `${res.name}: ${res.message}`;
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
    if (this.name.name && this.def[this.name.name]) {
      this.serviceCtor = this.def[this.name.name];
    }
    this.serviceDef = this.serviceCtor.service;

    this.createRef();
  }

  createRef() {
    this.ref = new this.serviceCtor(this.getAddr(), this.getCredentials());

    log.info(`${this.name.full} connect to ${this.getAddr()}`);
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
    if (IN_KUBE) {
      let hostname = this.name.service;
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
    const devHost = process.env.RIC_GRPC_DEV_HOST;
    const devPort = this.meta.port.dev;
    if (!IN_KUBE && devPort && devHost) {
      return devPort;
    }
    if (IN_KUBE && this.meta.port.k8s) {
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
    const def = protoLoader.loadSync(name.getProtofilePath(), options);
    let ric = grpc.loadPackageDefinition(def).ric;
    if (name.subpackage && ric[name.subpackage]) {
      ric = ric[name.subpackage];
    }
    if (name.version && ric[name.version]) {
      ric = ric[name.version];
    }
    this.defs[name.full] = ric;
    return ric;
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
