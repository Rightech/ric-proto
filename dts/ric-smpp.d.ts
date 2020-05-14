export interface SMPP {
  Send(request: SendRequest): Promise<SendResponse>;
  Status(request: StatusRequest): Promise<StatusResponse>;
  GatewayInfo(request: GatewayInfoRequest): Promise<GatewayInfoResponse>;
}

export interface UserContext {
  groupId?: string;
  userId?: string;
  spanId?: string;
}

export interface SendRequest {
  ctx?: UserContext;
  gatewayId?: string;
  phone?: string;
  message?: string;
}

export interface SendResponse {
  messageId?: string;
}

export interface StatusRequest {
  gatewayId?: string;
  messageId?: string;
}

export interface StatusResponse {
  state?: any;
  description?: string;
  smppStatus?: SMPPStatus;
}

export interface SMPPStatus {
  msgId?: string;
  msgState?: string;
  finalDate?: string;
  errCode?: number;
}

export interface GatewayInfoRequest {
  gatewayId?: string;
}

export interface GatewayInfoResponse {
  online?: boolean;
  uptime?: number;
}