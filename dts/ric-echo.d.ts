export interface Echo {
  SayHello(request: EchoRequest): Promise<EchoReply>;
}

export interface EchoRequest {
  name?: string;
}

export interface EchoReply {
  message?: string;
}