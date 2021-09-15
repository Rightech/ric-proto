export interface RicWeb {
  DispatchDefaultAction(request: DispatchDefaultActionRequest): Promise<DispatchDefaultActionResponse>;
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