export interface SMPP {
  Send(request: SMPPSendRequest): Promise<SMPPSendResponse>;
  Status(request: SMPPStatusRequest): Promise<SMPPStatusResponse>;
  GatewayInfo(request: SMPPGatewayInfoRequest): Promise<SMPPGatewayInfoResponse>;
  CheckGateway(request: SMPPCheckGatewayRequest): Promise<SMPPCheckGatewayResponse>;
}

export interface SMTP {
  Send(request: SMTPSendRequest): Promise<SMTPSendResponse>;
  GatewayInfo(request: SMTPGatewayInfoRequest): Promise<SMTPGatewayInfoResponse>;
  CheckGateway(request: SMTPCheckGatewayRequest): Promise<SMTPCheckGatewayResponse>;
}

export interface UserContext {
  groupId?: string;
  userId?: string;
  spanId?: string;
}

export interface SMPPSendRequest {
  ctx?: UserContext;
  gatewayId?: string;
  phone?: string;
  message?: string;
}

export interface SMPPSendResponse {
  messageId?: string;
}

export interface SMPPStatusRequest {
  gatewayId?: string;
  messageId?: string;
}

export interface SMPPStatusResponse {
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

export interface SMPPGatewayInfoRequest {
  gatewayId?: string;
}

export interface SMPPGatewayInfoResponse {
  online?: boolean;
  uptime?: number;
}

export interface SMPPCheckGatewayRequest {
  host?: string;
  port?: number;
  username?: string;
  password?: string;
  systemType?: string;
}

export interface SMPPCheckGatewayResponse {
  success?: boolean;
}

export interface Attachment {
  filename?: string;
  contentType?: string;
  content?: any;
}

export interface SMTPSendRequest {
  ctx?: UserContext;
  gatewayId?: string;
  to?: string[];
  sender?: string;
  subject?: string;
  textBody?: string;
  htmlBody?: string;
  host?: string;
  port?: number;
  username?: string;
  password?: string;
  useStarttls?: boolean;
  useSsl?: boolean;
  attachments?: Attachment[];
}

export interface SMTPSendResponse {

}

export interface SMTPGatewayInfoRequest {
  gatewayId?: string;
}

export interface SMTPGatewayInfoResponse {
  gatewayId?: string;
  sender?: string;
  host?: string;
  port?: number;
  username?: string;
  password?: string;
  useStarttls?: boolean;
  useSsl?: boolean;
  system?: boolean;
}

export interface SMTPCheckGatewayRequest {
  host?: string;
  port?: number;
  username?: string;
  password?: string;
  useStarttls?: boolean;
  useSsl?: boolean;
}

export interface SMTPCheckGatewayResponse {
  success?: boolean;
}