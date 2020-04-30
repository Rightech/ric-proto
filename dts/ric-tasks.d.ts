export interface Tasks {
  Create(request: CreateRequest): Promise<CreateResponse>;
  Get(request: GetRequest): Promise<GetResponse>;
  Update(request: UpdateRequest): Promise<UpdateResponse>;
  Delete(request: DeleteRequest): Promise<DeleteResponse>;
  UpdateOrder(request: UpdateOrderRequest): Promise<UpdateOrderResponse>;
  ChangeStatus(request: ChangeStatusRequest): Promise<ChangeStatusResponse>;
}

export interface UserContext {
  groupId?: string;
  userId?: string;
  spanId?: string;
}

export interface ObjectId {
  id?: string;
}

export interface TaskId {
  id?: string;
}

export interface Location {
  lat?: number;
  lng?: number;
  radius?: number;
  address?: string;
  indoor?: IndoorLocation;
}

export interface IndoorLocation {
  x?: number;
  y?: number;
  z?: number;
  radius?: number;
}

export interface Task {
  id?: TaskId;
  name?: string;
  kind?: string;
  description?: string;
  status?: any;
  object?: ObjectId;
  begin?: Location;
  end?: Location;
  createdAt?: number;
  deadlines?: Deadline[];
  owner?: ObjectId;
  success?: boolean;
  comment?: string;
  files?: string[];
  assignee?: ObjectId;
}

export interface Deadline {
  timestamp?: number;
  notifyUntil?: number;
  status?: any;
}

export interface MasterTask {
  oid?: ObjectId;
  owner?: ObjectId;
  group?: ObjectId;
  subtasks?: Task[];
  constrain?: any;
  tags?: string[];
  priority?: any;
  time?: number;
  object?: ObjectId;
}

export interface CreateRequest {
  ctx?: UserContext;
  masterTask?: MasterTask;
}

export interface CreateResponse {
  oid?: ObjectId;
  subIds?: TaskId[];
}

export interface GetRequest {
  oid?: ObjectId;
  tid?: TaskId;
}

export interface GetResponse {
  masterTask?: MasterTask;
}

export interface DeleteRequest {
  ctx?: UserContext;
  oid?: ObjectId;
  tid?: TaskId;
}

export interface DeleteResponse {

}

export interface UpdateRequest {
  ctx?: UserContext;
  masterTask?: MasterTask;
}

export interface UpdateResponse {
  masterTask?: MasterTask;
}

export interface UpdateOrderRequest {
  ctx?: UserContext;
  id?: ObjectId;
  positions?: Positions[];
}

export interface Positions {
  key?: string;
  value?: number;
}

export interface UpdateOrderResponse {

}

export interface ChangeStatusRequest {
  ctx?: UserContext;
  id?: TaskId;
  newStatus?: any;
  location?: Location;
  success?: boolean;
  comment?: string;
  files?: string[];
}

export interface ChangeStatusResponse {

}