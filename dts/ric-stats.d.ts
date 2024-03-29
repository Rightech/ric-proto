export interface Stats {
  Increment(request: IncrementRequest): Promise<IncrementResponse>;
}

export interface IncrementRequest {
  oid?: string;
  gid?: string;
  size?: any;
}

export interface IncrementResponse {
  success?: boolean;
}