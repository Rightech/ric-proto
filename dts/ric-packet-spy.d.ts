
import { Stream } from 'stream';

interface GrpcStream<T> extends Stream {
  write(chunk: T): boolean;
  on(event: 'data', listener: (chunk: T) => void): this;
}

export interface RicPacketSpy {
  GetState(request: GetStateRequest): Promise<GetStateResponse>;
  StartWatch(request: StartWatchRequest): Promise<StartWatchResponse>;
  CancelWatch(request: CancelWatchRequest): Promise<CancelWatchResponse>;
  CommitModel(request: CommitModelRequest): Promise<CommitModelResponse>;
  WatchUpdate(request: WatchUpdateRequest, clientCall?: GrpcStream<ObjectUpdate>): any;

  streamed?(): {
    WatchUpdate(request: WatchUpdateRequest): GrpcStream<ObjectUpdate>;
  };
}

export interface GetStateRequest {
  objectId?: string;
}

export interface GetStateResponse {
  data?: any;
}

export interface StartWatchRequest {
  objectId?: string;
  timeout?: number;
}

export interface StartWatchResponse {
  timeout?: number;
}

export interface CancelWatchRequest {
  objectId?: string;
}

export interface CancelWatchResponse {

}

export interface CommitModelRequest {
  objectId?: string;
  fields?: string[];
}

export interface CommitModelResponse {

}

export interface WatchUpdateRequest {
  objectId?: string;
}

export interface ObjectUpdate {
  data?: any;
}