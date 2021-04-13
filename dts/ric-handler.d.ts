export interface Service {
  Exec(request: ExecRequest): Promise<ExecResponse>;
  GetObjectInfo(request: GetObjectInfoRequest): Promise<GetObjectInfoResponse>;
  GetHandlerStore(request: GetHandlerStoreRequest): Promise<GetHandlerStoreResponse>;
  ForceLinksUpdate(request: ForceLinksUpdateRequest): Promise<EmptyResponse>;
}

export interface ExecRequest {
  handlerId?: string;
  packet?: any;
}

export interface JsStackFrame {
  functionName?: string;
  lineNumber?: number;
  column?: number;
}

export interface JsError {
  message?: string;
  lineNumber?: number;
  column?: number;
  stack?: JsStackFrame[];
}

export interface ExecStats {
  totalHeapSize?: any;
  totalHeapSizeExecutable?: any;
  totalPhysicalSize?: any;
  totalAvailableSize?: any;
  usedHeapSize?: any;
  heapSizeLimit?: any;
  mallocedMemory?: any;
  externalMemory?: any;
  peakMallocedMemory?: any;
  numberOfNativeContexts?: any;
  numberOfDetachedContexts?: any;
  execDuration?: string;
}

export interface LogRecord {
  time?: number;
  record?: string;
}

export interface ExecResponse {
  result?: any;
  error?: JsError;
  stats?: ExecStats;
  logs?: LogRecord[];
}

export interface GetObjectInfoRequest {
  objectId?: string;
}

export interface Action {
  id?: string;
  params?: any;
}

export interface Handler {
  id?: string;
  userCode?: string;
  bindings?: any;
  parameters?: any;
}

export interface GetObjectInfoResponse {
  id?: string;
  config?: any;
  store?: any;
  lastPacketTime?: number;
  actions?: Action[];
  handlers?: Handler[];
}

export interface GetHandlerStoreRequest {
  handlerId?: string;
}

export interface GetHandlerStoreResponse {
  store?: any;
}

export interface ForceLinksUpdateRequest {
  objectId?: string;
}

export interface EmptyResponse {

}