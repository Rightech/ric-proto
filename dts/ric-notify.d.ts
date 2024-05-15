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

export interface Push {
  Send(request: PushSendRequest): Promise<PushSendResponse>;
  SendData(request: SendDataPushRequest): Promise<SendDataPushResponse>;
}

export interface HTTP {
  Request(request: HTTPRequest): Promise<HTTPResponse>;
}

export interface Notifier {
  Init(request: NotifierInitRequest): Promise<NotifierInitResponse>;
  Send(request: NotifierSendRequest): Promise<NotifierSendResponse>;
}

export interface Context {
  groupId?: string;
  userId?: string;
  spanId?: string;
  objectId?: string;
}

export interface SMPPSendRequest {
  ctx?: Context;
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
  ctx?: Context;
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

export interface PushSendRequest {
  text?: string;
  level?: string;
  oid?: string;
  type?: string;
  data?: string;
}

export interface PushSendResponse {

}

export interface SendDataPushRequest {
  ctx?: Context;
  app?: string;
  users?: string[];
  data?: { [key: string]: string };
  notification?: { [key: string]: string };
}

export interface SendDataPushResponse {
  success?: string[];
  failure?: string[];
}

export interface HTTPRequest {
  ctx?: Context;
  method?: string;
  url?: string;
  headers?: { [key: string]: string };
  body?: any;
}

export interface HTTPResponse {
  ctx?: Context;
  statusCode?: number;
  headers?: { [key: string]: string };
  body?: any;
}

export interface NotifierInitRequest {
  ctx?: Context;
  notifierId?: string;
  data?: any;
}

export interface NotifierInitResponse {
  message?: string;
  data?: any;
}

export interface NotifierSendRequest {
  ctx?: Context;
  notifierId?: string;
  message?: string;
  data?: any;
  attachments?: Attachment[];
}

export interface NotifierSendResponse {
  message?: string;
  data?: any;
}