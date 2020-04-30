
import { Stream } from 'stream';

interface GrpcStream<T> extends Stream {
  on(event: 'data', listener: (chunk: T) => void): this;
}

export interface FunctionControl {
  Call(request: CallRequest): Promise<CallResponse>;
  Scale(request: ScaleRequest): Promise<EmptyResponse>;
  Delete(request: DeleteRequest): Promise<EmptyResponse>;
  UpdateOrDeploy(request: UpdateOrDeployRequest): Promise<UpdateOrDeployResponse>;
  Info(request: InfoRequest): Promise<InfoResponse>;

  streamed(): {
    Logs(request: LogsRequest): GrpcStream<LogsResponse>;
  };
}

export interface CallRequest {
  name?: string;
  data?: any;
  contentType?: string;
  ctx?: Context;
}

export interface Context {
  objectId?: string;
  groupId?: string;
  userId?: string;
}

export interface ScaleRequest {
  name?: string;
  replicas?: Uint64;
}

export interface Uint64 {
  value?: any;
}

export interface DeleteRequest {
  name?: string;
}

export interface UpdateOrDeployRequest {
  name?: string;
  func?: Function;
  opt?: Options;
}

export interface Function {
  handler?: string;
  body?: string;
  deps?: string;
  runtime?: string;
  runtimeImage?: string;
  mem?: string;
  cpu?: string;
  timeout?: string;
  imagePullPolicy?: string;
  schedule?: string;
  port?: number;
  servicePort?: number;
  headless?: boolean;
  envs?: string[];
  labels?: string[];
  secrets?: string[];
}

export interface Options {
  secrets?: string[];
}

export interface UpdateOrDeployResponse {
  generation?: number;
  resourceVersion?: string;
  checksum?: string;
}

export interface LogsRequest {
  name?: string;
  podName?: string;
  follow?: boolean;
  tailLines?: number;
  filterBy?: string;
}

export interface InfoRequest {
  name?: string;
}

export interface CallResponse {
  data?: any;
}

export interface EmptyResponse {

}

export interface LogsResponse {
  line?: string;
}

export interface InfoResponse {
  pods?: Pod[];
  runtime?: string;
  deps?: string;
}

export interface Pod {
  name?: string;
  creationTimestamp?: string;
  phase?: string;
  startTime?: string;
  containerStatuses?: ContainerStatus[];
}

export interface ContainerStatus {
  ready?: boolean;
  restartCount?: number;
  state?: string;
  lastState?: string;
}

export interface PublicAPI {
  SendEvent(request: EventRequest): Promise<EmptyResponse>;

  streamed(): {
    History(request: HistoryRequest): GrpcStream<HistoryResponse>;
  };
}

export interface HistoryRequest {
  oid?: string;
  db?: string;
  size?: number;
}

export interface HistoryResponse {
  data?: any;
}

export interface EventRequest {
  oid?: string;
  name?: string;
  data?: any;
}