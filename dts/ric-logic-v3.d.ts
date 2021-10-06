
import { Stream } from 'stream';

interface GrpcStream<T> extends Stream {
  write(chunk: T): boolean;
  on(event: 'data', listener: (chunk: T) => void): this;
}

export interface RicLogicV3 {
  GetInstanceInfo(request: GetInstanceInfoRequest): Promise<GetInstanceInfoResponse>;
  GetAutomatons(request: GetAutomatonsRequest, clientCall?: GrpcStream<AutomatonInfo>): any;
  StartAutomaton(request: StartAutomatonRequest): Promise<StartAutomatonResponse>;
  StartAutomatonMulti(request: StartAutomatonMultiRequest): Promise<StartAutomatonResponse>;
  StopAutomaton(request: StopAutomatonRequest): Promise<StopAutomatonResponse>;
  RunAutomaton(request: RunAutomatonRequest, clientCall?: GrpcStream<AutomatonInfo>): any;
  EmitEvent(request: EmitEventRequest): Promise<EmitEventResponse>;
  WaitEvent(request: WaitEventRequest): Promise<WaitEventResponse>;
  UpdateAutomatonVars(request: UpdateAutomatonVarsRequest): Promise<UpdateAutomatonVarsResponse>;
  TouchEventSubscription(request: TouchEventSubscriptionRequest): Promise<TouchEventSubscriptionResponse>;

  streamed?(): {
    GetAutomatons(request: GetAutomatonsRequest): GrpcStream<AutomatonInfo>;
    RunAutomaton(request: RunAutomatonRequest): GrpcStream<AutomatonInfo>;
  };
}

export interface UserContext {
  groupId?: string;
  userId?: string;
  spanId?: string;
}

export interface StatsCounter {
  count?: number;
  mean?: any;
}

export interface AutomatonStats {
  startedAt?: number;
  stoppedAt?: number;
  transitionedAt?: number;
  transitions?: StatsCounter;
  actions?: StatsCounter;
  packets?: StatsCounter;
  events?: StatsCounter;
  halted?: string;
}

export interface AutomatonVarValue {
  stringVal?: string;
  doubleVal?: number;
  boolVal?: boolean;
}

export interface AutomatonInfo {
  objectId?: string;
  automatonId?: string;
  hashId?: string;
  revision?: string;
  status?: string;
  state?: string;
  prevState?: string;
  prevEvent?: string;
  stats?: AutomatonStats;
  logs?: LogEntry[];
  vars?: { [key: string]: AutomatonVarValue };
}

export interface AutomatonEvent {
  type?: string;
  payload?: string;
}

export interface ActionResult {
  status?: string;
  payload?: string;
  ms?: number;
}

export interface LogEntry {
  id?: string;
  ts?: number;
  objectId?: string;
  automatonId?: string;
  hashId?: string;
  revision?: string;
  instance?: string;
  category?: string;
  message?: string;
  event?: AutomatonEvent;
  state?: string;
  prevState?: string;
  ctx?: UserContext;
  result?: ActionResult;
}

export interface WaitCondition {
  timeout?: string;
  event?: string;
  state?: string;
  status?: string;
}

export interface GetInstanceInfoRequest {

}

export interface GetInstanceInfoResponse {
  hostname?: string;
  status?: string;
  startedAt?: number;
  objectsTotal?: number;
  containersTotal?: number;
  containersRunning?: number;
  objectIds?: string[];
}

export interface StartAutomatonRequest {
  ctx?: UserContext;
  objectId?: string;
  automatonId?: string;
  vars?: { [key: string]: AutomatonVarValue };
}

export interface StartAutomatonMultiRequest {
  ctx?: UserContext;
  objectIds?: string[];
  automatonId?: string;
}

export interface StartAutomatonResponse {
  automaton?: AutomatonInfo;
}

export interface StopAutomatonRequest {
  ctx?: UserContext;
  objectId?: string;
  automatonId?: string;
}

export interface RunAutomatonRequest {
  ctx?: UserContext;
  objectId?: string;
  automatonId?: string;
  wait?: WaitCondition;
  onRunning?: string;
  vars?: { [key: string]: AutomatonVarValue };
}

export interface StopAutomatonResponse {
  automaton?: AutomatonInfo;
}

export interface GetAutomatonsRequest {
  objectIds?: string[];
  automatonIds?: string[];
  withLogs?: boolean;
  watch?: boolean;
}

export interface GetAutomatonsResponse {
  automatons?: AutomatonInfo[];
}

export interface EmitEventRequest {
  ctx?: UserContext;
  objectId?: string;
  automatonId?: string;
  event?: string;
  payload?: string;
}

export interface EmitEventResponse {

}

export interface WaitEventRequest {
  ctx?: UserContext;
  objectId?: string;
  automatonId?: string;
  wait?: WaitCondition;
}

export interface WaitEventResponse {

}

export interface GetRuntimeInfoRequest {
  objectId?: string;
  automatonId?: string;
}

export interface UpdateAutomatonVarsRequest {
  ctx?: UserContext;
  objectId?: string;
  automatonId?: string;
  vars?: { [key: string]: AutomatonVarValue };
}

export interface UpdateAutomatonVarsResponse {
  vars?: { [key: string]: AutomatonVarValue };
}

export interface TouchEventSubscriptionRequest {
  ctx?: UserContext;
  objectId?: string;
  automatonId?: string;
  ttl?: number;
}

export interface TouchEventSubscriptionResponse {

}