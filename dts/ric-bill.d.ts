export interface Billing {
  SetupAccount(request: SetupRequest): Promise<SetupResponse>;
  VerifyAccount(request: SetupRequest): Promise<SetupResponse>;
  CloseAccount(request: SetupRequest): Promise<SetupResponse>;
  CreatePayment(request: PaymentRequest): Promise<PaymentResponse>;
}

export interface UserContext {
  groupId?: string;
  userId?: string;
  spanId?: string;
}

export interface SetupRequest {
  ctx?: UserContext;
}

export interface SetupResponse {
  bindingId?: string;
  widgetParams?: string;
}

export interface PaymentRequest {

}

export interface PaymentResponse {

}