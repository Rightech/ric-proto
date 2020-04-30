
import { Stream } from 'stream';

interface GrpcStream<T> extends Stream {
  on(event: 'data', listener: (chunk: T) => void): this;
}

export interface RicStore {
  Insert(request: Packet): Promise<EmptyRespone>;
  Status(request: StatusRequest): Promise<StatusResponse>;
  CreateCollection(request: CreateCollectionRequest): Promise<EmptyRespone>;
  RemoveCollection(request: RemoveCollectionRequest): Promise<EmptyRespone>;
  CreateDatabase(request: CreateDatabaseRequest): Promise<EmptyRespone>;
  RemoveDatabase(request: RemoveDatabaseRequest): Promise<EmptyRespone>;

  streamed(): {
    Query(request: QueryRequest): GrpcStream<Packet>;
  };
}



export interface EmptyRespone {

}

export interface Packet {
  db?: string;
  col?: string;
  ts?: any;
  data?: any;
}

export interface QueryRequest {
  db?: string;
  col?: string;
  from?: any;
  to?: any;
  fields?: string[];
}

export interface CreateCollectionRequest {
  db?: string;
  col?: string;
  size?: any;
  mode?: any;
}

export interface RemoveCollectionRequest {
  db?: string;
  col?: string;
}

export interface CreateDatabaseRequest {
  db?: string;
}

export interface RemoveDatabaseRequest {
  db?: string;
}

export interface StatusRequest {
  db?: string;
  col?: string;
}

export interface StatusResponse {
  minTs?: any;
  maxTs?: any;
  count?: any;
  size?: any;
  maxSize?: any;
  mode?: any;
}