
import { Stream } from 'stream';

interface GrpcStream<T> extends Stream {
  write(chunk: T): boolean;
  on(event: 'data', listener: (chunk: T) => void): this;
}

export interface RicCode {
  TranspileEs6(request: TranspileRequest): Promise<TranspileResponse>;
  BundleEs(request: BundleEsRequest, clientCall?: GrpcStream<BundleEsProgress>): any;
  ParseCondition(request: ParseConditionRequest): Promise<ParseConditionResponse>;

  streamed?(): {
    BundleEs(request: BundleEsRequest): GrpcStream<BundleEsProgress>;
  };
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

export interface BundleEsRequest {
  id?: string;
  code?: string;
  main?: string;
}

export interface BundleEsProgress {
  message?: string;
  result?: string;
  error?: string;
  sourceMap?: string;
}

export interface ParseConditionRequest {
  id?: string;
  code?: string;
  aliases?: { [key: string]: string };
}

export interface ParseConditionResponse {
  compiled?: string;
}