export interface RicCode {
  TranspileEs6(request: TranspileRequest): Promise<TranspileResponse>;
}

export interface TranspileRequest {
  id?: string;
  code?: string;
  main?: string;
  defs?: LibDefinition[];
}

export interface TranspileResponse {
  codeEs5?: string;
  libs?: LibRequest[];
  input?: VarDecl[];
  output?: VarDecl[];
  refs?: InputRef[];
}

export interface InputRef {
  name?: string;
  vars?: VarDecl[];
}

export interface VarDecl {
  name?: string;
  type?: string;
  default?: string;
}

export interface LibDefinition {
  name?: string;
  def?: string;
}

export interface LibRequest {
  name?: string;
  semver?: string;
  local?: boolean;
}