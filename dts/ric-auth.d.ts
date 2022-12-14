export interface RicAuth {
  AuthObject(request: AuthObjectRequest): Promise<AuthObjectResponse>;
  GetModelInfo(request: ModelInfoRequest): Promise<ModelInfoResponse>;
  IssueCert(request: IssueCertRequest): Promise<IssueCertResponse>;
  SendOffline(request: ObjectGateRequest): Promise<ObjectGateResponse>;
  SendModelUpdate(request: ObjectGateRequest): Promise<ObjectGateResponse>;
  QueryRepeaters(request: QueryRepeatersRequest): Promise<RepeatersResponse>;
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
  bot?: boolean;
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
  fullPacketMode?: boolean;
  orgId?: string;
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

export interface QueryRepeatersRequest {
  withObjects?: boolean;
  protocols?: string[];
  repeaterIds?: string[];
  objectIds?: string[];
}

export interface RepeaterInfo {
  repeaterId?: string;
  protocol?: string;
  name?: string;
  host?: string;
  port?: number;
  config?: string;
  objects?: ObjectRepeaterInfo[];
}

export interface ObjectRepeaterInfo {
  objectId?: string;
  repeaterConfig?: string;
}

export interface RepeatersResponse {
  repeaters?: RepeaterInfo[];
}