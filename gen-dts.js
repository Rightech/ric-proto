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
      streamed.push({ req, res, name });
    }
    return `  ${name}(request: ${req}): Promise<${res}>;`;
  });

  if (streamed.length) {
    streamed = streamed.map(
      ({ req, res, name }) => `    ${name}(request: ${req}): GrpcStream<${res}>;`
    );
    streamed = `\n\n  streamed(): {\n${streamed.join('\n')}\n  };`;
  } else {
    streamed = '';
  }

  return `export interface ${name} {\n${requests.join('\n')}${streamed}\n}`;
}

let index = [];
const streamImport = `
import { Stream } from 'stream';

interface GrpcStream<T> extends Stream {
  on(event: 'data', listener: (chunk: T) => void): this;
}`;

for (const service of Object.keys(registry.meta.services)) {
  if (service.includes('.')) {
    continue;
  }
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
  if (content.includes('streamed(): {')) {
    content = `${streamImport}\n\n${content}`;
  }
  fs.writeFileSync(`./ts/${service}.d.ts`, content);
  index.push({ service, services });
}

let imports = [];
let clients = [];

for (const { service, services } of index) {
  let importsCode = `import { ${services
    .map(({ name }) => name)
    .join(', ')} } from './ts/${service}';`;

  let clientsCode = [];
  for (const svc of services) {
    if (svc.main) {
      clientsCode.push(`  getClient(service: '${svc.service}'): ${svc.name};`);
    }
    clientsCode.push(`  getClient(service: '${svc.service}.${svc.name}'): ${svc.name};`);
  }

  imports.push(importsCode);
  clients.push(clientsCode.join('\n'));
}

const indexDts = `
${imports.join('\n')}

export interface GrpcRegistry {
${clients.join('\n\n')}
}
`;

fs.writeFileSync(`./index.d.ts`, indexDts);

console.log(indexDts);
