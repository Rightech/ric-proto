export interface Service {
  Exec(request: ExecRequest): Promise<ExecResponse>;
  GetObjectInfo(request: GetObjectInfoRequest): Promise<GetObjectInfoResponse>;
  ForceLinksUpdate(request: ForceLinksUpdateRequest): Promise<EmptyResponse>;
}

export interface ExecRequest {
  handlerId?: string;
  packet?: string;
}

export interface JsError {
  message?: string;
  location?: string;
  stackTrace?: string;
}

export interface ExecStats {
  time?: string;
  mem?: string;
}

export interface LogRecord {
  time?: number;
  record?: string;
}

export interface ExecResponse {
  result?: string;
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
  actions?: Action[];
  handlers?: Handler[];
}

export interface ForceLinksUpdateRequest {
  objectId?: string;
}

export interface EmptyResponse {

}