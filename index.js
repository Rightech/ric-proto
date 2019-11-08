const path = require('path');
const grpc = require('grpc');
const protoLoader = require('@grpc/proto-loader');

const { callbackify } = require('util');
const { log } = require('@rightech/utils');

const PROTO_DIR = path.join(__dirname, '.');
const IN_KUBE = !!process.env.KUBERNETES_PORT;

const DEFAULT_KUBE_PORT = 5071;

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
    const [service, namespace] = this.full.split('.');
    this.service = service;
    this.namespace = namespace || '';
    this.fileName = `${service.replace(/-/gi, '')}.proto`;
    const parts = service.split('-');
    const [, subpackage] = parts;
    this.subpackage = subpackage;
    this.version = parts.find(part => part.startsWith('v'));
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
    this.serviceDef = Object.values(this.def)
      .find(x => !!x.service).service;
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

  getImpl() {
    return Object.keys(this.serviceDef).reduce((impl, key) => {
      const def = this.serviceDef[key];
      if (def.responseStream) {
        impl[key] = (call) => this.impl[key](call.request, call);
        return impl;
      }
      impl[key] = (call, callback) => callbackify(this.getAsyncWrap(key, call))(callback);
      return impl;
    }, {});
  }

  getPort() {
    if (IN_KUBE) {
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
}


class GrpcClient {

  constructor(name, def, meta = {}) {
    this.meta = meta;
    this.name = new ServiceName(name);
    this.def = def;

    this.serviceCtor = Object.values(this.def)
      .find(x => !!x.service);
    this.serviceDef = this.serviceCtor.service;

    this.createRef();
  }

  createRef() {
    this.ref = new this.serviceCtor(
      this.getAddr(),
      this.getCredentials());

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
      return this.name.full;
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
    return DEFAULT_KUBE_PORT;
  }

  _export() {
    Object.keys(this.serviceDef).forEach(key => {
      this[key] = req => {
        return new Promise((resolve, reject) => {
          this.ref[key](req, (err, resp) => {
            err ? reject(err) : resolve(resp);
          })
        })
      };
    })
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
    Object.keys(this.serviceDef).forEach(key => {
      this[key] = req => {
        return this.ref[key](req);
      };
    })
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
    return Object.assign({},
      this.meta.default || {},
      this.meta.services[name.service] || {})
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
