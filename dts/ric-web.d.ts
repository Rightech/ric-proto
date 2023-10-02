export interface RicWeb {
  DispatchDefaultAction(request: DispatchDefaultActionRequest): Promise<DispatchDefaultActionResponse>;
  SendCommand(request: SendCommandRequest): Promise<SendCommandResponse>;
}

export interface DispatchDefaultActionRequest {
  service?: string;
  source?: string;
  objectId?: string;
  id?: string;
  name?: string;
  params?: string;
}

export interface DispatchDefaultActionResponse {

}

export interface SendCommandRequest {
  objectId?: string;
  params?: string;
}

export interface SendCommandResponse {

}