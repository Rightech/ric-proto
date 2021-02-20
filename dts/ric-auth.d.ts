export interface RicAuth {
  AuthObject(request: AuthObjectRequest): Promise<AuthObjectResponse>;
  GetModelInfo(request: ModelInfoRequest): Promise<ModelInfoResponse>;
  IssueCert(request: IssueCertRequest): Promise<IssueCertResponse>;
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
  license?: { [key: string]: number };
  stats?: { [key: string]: StatRecord };
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

export interface IssueCertRequest {
  objectId?: string;
  ttl?: string;
}

export interface IssueCertResponse {
  certificate?: string;
  privateKey?: string;
  serial?: string;
  issuedAt?: number;
  expiresAt?: number;
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