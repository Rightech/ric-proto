export interface TaskService {
  Create(request: CreateTaskRequest): Promise<CreateTaskResponse>;
  Get(request: GetTaskRequest): Promise<GetTaskResponse>;
  Update(request: UpdateTaskRequest): Promise<UpdateTaskResponse>;
  Delete(request: DeleteTaskRequest): Promise<DeleteTaskResponse>;
  UpdateOrder(request: UpdateTaskOrderRequest): Promise<UpdateTaskOrderResponse>;
  ChangeStatus(request: ChangeTaskStatusRequest): Promise<ChangeTaskStatusResponse>;
}

export interface KindService {
  Create(request: CreateKindRequest): Promise<CreateKindResponse>;
  Get(request: GetKindRequest): Promise<GetKindResponse>;
  Update(request: UpdateKindRequest): Promise<UpdateKindResponse>;
  Delete(request: DeleteKindRequest): Promise<DeleteKindResponse>;
}

export interface ObjectId {
  id?: string;
}

export interface UserContext {
  groupId?: ObjectId;
  userId?: ObjectId;
  spanId?: string;
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
  oid?: ObjectId;
  owner?: ObjectId;
  group?: ObjectId;
  parent?: ObjectId;
  subtasks?: Task[];
  tags?: string[];
  constrain?: any;
  priority?: number;
  createdAt?: number;
  name?: string;
  description?: string;
  status?: any;
  object?: ObjectId;
  kind?: ObjectId;
  reportTemplates?: ReportTemplate[];
  reports?: Report[];
  begin?: Location;
  end?: Location;
  deadlines?: Deadline[];
  success?: boolean;
  assignee?: ObjectId;
  assigneeType?: string;
  review?: Review;
  json?: any;
}

export interface TaskEdit {
  owner?: ObjectId;
  group?: ObjectId;
  parent?: ObjectId;
  tags?: string[];
  constrain?: any;
  priority?: number;
  name?: string;
  description?: string;
  object?: ObjectId;
  kind?: ObjectId;
  reportTemplates?: ReportTemplate[];
  begin?: Location;
  end?: Location;
  deadlines?: Deadline[];
  assignee?: ObjectId;
  assigneeType?: string;
  review?: Review;
  json?: string;
}

export interface Review {
  reviewer?: ObjectId;
  rating?: number;
  comment?: string;
}

export interface Deadline {
  timestamp?: number;
  notifyUntil?: number;
  status?: any;
}

export interface ReportTemplate {
  name?: string;
  field?: any;
  required?: boolean;
}

export interface Report {
  name?: string;
  value?: any;
}

export interface Kind {
  oid?: ObjectId;
  name?: string;
  discription?: string;
  svg?: string;
  roles?: ObjectId[];
  reportTemplates?: ReportTemplate[];
}

export interface KindEdit {
  name?: string;
  discription?: string;
  svg?: string;
  roles?: ObjectId[];
  reportTemplates?: ReportTemplate[];
}

export interface CreateTaskRequest {
  ctx?: UserContext;
  task?: Task;
}

export interface CreateTaskResponse {
  task?: Task;
}

export interface GetTaskRequest {
  ctx?: UserContext;
  oid?: ObjectId;
}

export interface GetTaskResponse {
  task?: Task;
}

export interface DeleteTaskRequest {
  ctx?: UserContext;
  oid?: ObjectId;
}

export interface DeleteTaskResponse {

}

export interface UpdateTaskRequest {
  ctx?: UserContext;
  oid?: ObjectId;
  task?: TaskEdit;
}

export interface UpdateTaskResponse {
  task?: Task;
}

export interface UpdateTaskOrderRequest {
  ctx?: UserContext;
  oid?: ObjectId;
  positions?: { [key: string]: number };
}

export interface UpdateTaskOrderResponse {
  task?: Task;
}

export interface ChangeTaskStatusRequest {
  ctx?: UserContext;
  oid?: ObjectId;
  newStatus?: any;
  location?: Location;
  success?: boolean;
  comment?: string;
  reports?: Report[];
}

export interface ChangeTaskStatusResponse {
  task?: Task;
}

export interface CreateKindRequest {
  ctx?: UserContext;
  kind?: Kind;
}

export interface CreateKindResponse {
  kind?: Kind;
}

export interface GetKindRequest {
  ctx?: UserContext;
  oid?: ObjectId;
}

export interface GetKindResponse {
  kind?: Kind;
}

export interface UpdateKindRequest {
  ctx?: UserContext;
  oid?: ObjectId;
  kind?: KindEdit;
}

export interface UpdateKindResponse {
  kind?: Kind;
}

export interface DeleteKindRequest {
  ctx?: UserContext;
  oid?: ObjectId;
}

export interface DeleteKindResponse {

}