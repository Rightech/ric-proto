export interface Command {
  Send(request: CommandSendRequest): Promise<CommandSendResponse>;
}

export interface Context {
  groupId?: string;
  userId?: string;
  objectId?: string;
}

export interface CommandSendRequest {
  ctx?: Context;
  command?: string;
  params?: string;
  confirm?: boolean;
}

export interface CommandSendResponse {
  success?: boolean;
  payload?: string;
}