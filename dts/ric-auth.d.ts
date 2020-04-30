export interface RicAuth {
  AuthObject(request: AuthObjectRequest): Promise<AuthObjectResponse>;
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
}

export interface AuthObjectResponse {
  session?: string;
  modelId?: string;
  objectId?: string;
  groupId?: string;
  groupKey?: string;
  arguments?: AuthObjectArgument[];
  config?: string;
}

export interface AuthObjectArgument {
  id?: string;
  dataType?: string;
  reference?: string;
  parser?: string;
}