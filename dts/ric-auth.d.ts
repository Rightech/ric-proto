export interface RicAuth {
  AuthObject(request: AuthObjectRequest): Promise<AuthObjectResponse>;
  GetModelInfo(request: ModelInfoRequest): Promise<ModelInfoResponse>;
  SendOffline(request: ObjectGateRequest): Promise<ObjectGateResponse>;
  SendModelUpdate(request: ObjectGateRequest): Promise<ObjectGateResponse>;
}

export interface AuthObjectRequest {
  protocol?: string;
  object?: string;
  clientId?: string;
  username?: string;
  password?: string;
  cert?: AuthObjectCert;
  ipv4?: string;
  ipv6?: string;
}

export interface AuthObjectCert {
  cn?: string;
  fingerprint?: string;
}

export interface AuthObjectResponse {
  session?: string;
  modelId?: string;
  objectId?: string;
  groupId?: string;
  groupKey?: string;
  arguments?: AuthObjectArgument[];
  config?: string;
  issuedAt?: number;
  expiresAt?: number;
  acl?: string[];
  licenseId?: string;
  license?: License[];
  stats?: Stats[];
}

export interface License {
  key?: string;
  value?: number;
}

export interface Stats {
  key?: string;
  value?: StatRecord;
}

export interface AuthObjectArgument {
  id?: string;
  dataType?: string;
  reference?: string;
  parser?: string;
}

export interface StatRecord {
  value?: number;
  left?: number;
  from?: number;
  to?: number;
}

export interface ModelInfoRequest {
  modelId?: string;
}

export interface ModelInfoResponse {
  modelId?: string;
  arguments?: AuthObjectArgument[];
}

export interface ObjectGateRequest {
  objectId?: string;
}

export interface ObjectGateResponse {

}