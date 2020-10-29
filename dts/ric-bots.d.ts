export interface Bots {
  Start(request: StartRequest): Promise<EmptyResponse>;
  Stop(request: StopRequest): Promise<EmptyResponse>;
  SetState(request: SetStateRequest): Promise<EmptyResponse>;
  SetGeoConfig(request: SetGeoConfigRequest): Promise<EmptyResponse>;
  PauseStopGeo(request: PauseStopGeoRequest): Promise<EmptyResponse>;
  StartGeo(request: StartGeoRequest): Promise<EmptyResponse>;
  AddToGenConfig(request: AddToGenConfigRequest): Promise<EmptyResponse>;
  RemoveFromGenConfig(request: RemoveFromGenConfigRequest): Promise<EmptyResponse>;
  SetBotConfig(request: SetBotConfigRequest): Promise<EmptyResponse>;
  Call(request: CallRequest): Promise<EmptyResponse>;
}

export interface EmptyResponse {

}

export interface StartRequest {
  objectId?: string;
}

export interface StopRequest {
  objectId?: string;
}

export interface SetStateRequest {
  objectId?: string;
  state?: State[];
}

export interface State {
  key?: string;
  value?: StateValue;
}

export interface StateValue {
  stringVal?: string;
  doubleVal?: number;
  boolVal?: boolean;
}

export interface SetGeoConfigRequest {
  objectId?: string;
  mode?: any;
  repeat?: boolean;
  map?: Map[];
  track?: Point[];
}

export interface Map {
  key?: string;
  value?: string;
}

export interface Point {
  lat?: number;
  lon?: number;
}

export interface AddToGenConfigRequest {
  objectId?: string;
  name?: string;
  random?: RandomType;
  linear?: LinearType;
}

export interface RandomType {
  min?: number;
  max?: number;
}

export interface LinearType {
  step?: number;
}

export interface RemoveFromGenConfigRequest {
  objectId?: string;
  name?: string;
}

export interface PauseStopGeoRequest {
  objectId?: string;
  stop?: boolean;
}

export interface StartGeoRequest {
  objectId?: string;
}

export interface SetBotConfigRequest {
  objectId?: string;
  sendInterval?: number;
}

export interface CallRequest {
  name?: string;
  params?: Params[];
}

export interface Params {
  key?: string;
  value?: string;
}