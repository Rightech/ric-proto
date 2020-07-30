const fs = require('fs');
const { registry } = require('./index');

function fieldTyping(def) {
  let type = 'any';
  let name = def.name;

  if (def.type === 'TYPE_STRING') {
    type = 'string';
  }
  if (def.type === 'TYPE_BOOL') {
    type = 'boolean';
  }
  if (
    def.type === 'TYPE_INT32' ||
    def.type === 'TYPE_INT64' ||
    def.type === 'TYPE_DOUBLE'
  ) {
    type = 'number';
  }

  if (def.type === 'TYPE_MESSAGE') {
    type = def.typeName;

    if (type === 'google.protobuf.BoolValue') {
      type = 'boolean';
    }
    if (type === 'google.protobuf.Int64Value') {
      type = 'number';
    }

    // strip ns specification
    const [last] = type.split('.').reverse();
    type = last;
  }

  if (def.label === 'LABEL_REPEATED') {
    type += '[]';
    name += '?';
  }

  if (def.label === 'LABEL_OPTIONAL') {
    name += '?';
  }

  return `${name}: ${type}`;
}

function messageTyping(name, def) {
  if (!def.type.field) {
    console.log(def.type);
    return '';
  }
  const fields = def.type.field.map((def) => `  ${fieldTyping(def)};`);
  return `export interface ${name} {\n${fields.join('\n')}\n}`;
}

function serviceTyping(name, def) {
  let streamed = [];
  const requests = Object.keys(def.service).map((name) => {
    const call = def.service[name];
    const req = call.requestType.type.name;
    const res = call.responseType.type.name;

    if (call.responseStream) {
      streamed.push(`    ${name}(request: ${req}): GrpcStream<${res}>;`);
      return `  ${name}(request: ${req}, clientCall?: GrpcStream<${res}>): any;`;
    }
    return `  ${name}(request: ${req}): Promise<${res}>;`;
  }).filter(x=> !!x);

  if (streamed.length) {
    streamed = `\n\n  streamed?(): {\n${streamed.join('\n')}\n  };`;
  } else {
    streamed = '';
  }

  return `export interface ${name} {\n${requests.join('\n')}${streamed}\n}`;
}

let index = [];
const streamImport = `
import { Stream } from 'stream';

interface GrpcStream<T> extends Stream {
  write(chunk: T): boolean;
  on(event: 'data', listener: (chunk: T) => void): this;
}`;

const services = Object.keys(registry.meta.services).map((name) => {
  const [first] = name.split('/');
  return first;
});

for (const service of [...new Set(services)]) {
  const typings = [];
  const services = [];
  const def = registry.loadDef(service);

  for (const name of Object.keys(def)) {
    if (def[name].type) {
      typings.push(messageTyping(name, def[name]));
      const nested = def[name].type.nestedType || [];
      for (const nestedType of nested) {
        typings.push(messageTyping(nestedType.name, { type: nestedType }));
      }
      continue;
    }
    if (def[name].service) {
      const typing = serviceTyping(name, def[name]);
      services.push({ service, name, typing, main: services.length === 0 });
      typings.push(typing);
      continue;
    }
  }

  let content = typings.join('\n\n');
  if (content.includes('streamed?(): {')) {
    content = `${streamImport}\n\n${content}`;
  }
  fs.writeFileSync(`./dts/${service}.d.ts`, content);
  index.push({ service, services });
}

let imports = [];
let clients = [];
let servers = [];


for (const { service, services } of index) {
  let importsCode = `import { ${services
    .map(({ name }) => name)
    .join(', ')} } from './${service}';`;

  let clientsCode = [];
  let serversCode = [];

  for (const svc of services) {
    if (svc.main) {
      clientsCode.push(`  getClient(service: '${svc.service}'): ${svc.name};`);
      serversCode.push(`  addServer(service: '${svc.service}', impl: ${svc.name});`);
    }
    clientsCode.push(`  getClient(service: '${svc.service}.${svc.name}'): ${svc.name};`);
    serversCode.push(`  addServer(service: '${svc.service}.${svc.name}', impl: ${svc.name});`);
  }

  imports.push(importsCode);
  clients.push(clientsCode.join('\n'));
  servers.push(serversCode.join('\n'));
}

const indexDts = `
${imports.join('\n')}

interface GrpcRegistry {
  /* clients */  
${clients.join('\n\n')}
\n
  /* servers */ 
${servers.join('\n\n')}
}

declare const index: { registry: GrpcRegistry };
export default index;
export type { GrpcRegistry };
`;

fs.writeFileSync(`./dts/index.d.ts`, indexDts);

//console.log(indexDts);
