export interface Command {
  Send(request: CommandSendRequest): Promise<CommandSendResponse>;
}

export interface UserContext {
  groupId?: string;
  userId?: string;
  objectId?: string;
}

export interface Reference {
  store?: string;
  id?: string;
  name?: string;
}

export interface CommandSendRequest {
  ctx?: UserContext;
  ref?: Reference;
  command?: string;
  params?: string;
  templateContext?: string;
  confirm?: boolean;
  options?: string;
}

export interface CommandSendResponse {
  success?: boolean;
  result?: string;
}