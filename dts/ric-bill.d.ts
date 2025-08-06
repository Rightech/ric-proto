export interface Billing {
  SetupAccount(request: SetupRequest): Promise<SetupResponse>;
  VerifyAccount(request: VerifyRequest): Promise<SuccessResponse>;
  CloseAccount(request: CloseRequest): Promise<SuccessResponse>;
  CreateSubscription(request: SubscriptionRequest): Promise<SubscriptionResponse>;
  UpdateSubscription(request: SubscriptionRequest): Promise<SubscriptionResponse>;
  CancelSubscription(request: SubscriptionRequest): Promise<SubscriptionResponse>;
  ResumeSubscription(request: SubscriptionRequest): Promise<SubscriptionResponse>;
  ActivateSubscription(request: SubscriptionRequest): Promise<SubscriptionResponse>;
  DeactivateSubscription(request: SubscriptionRequest): Promise<SubscriptionResponse>;
  SendReceipt(request: ReceiptRequest): Promise<ReceiptResponse>;
  ValidatePromocode(request: ValidatePromocodeRequest): Promise<ValidatePromocodeResponse>;
}

export interface UserContext {
  groupId?: string;
  userId?: string;
  spanId?: string;
}

export interface SuccessResponse {
  success?: boolean;
}

export interface SetupRequest {
  ctx?: UserContext;
}

export interface SetupResponse {
  bindingId?: string;
  widgetParams?: string;
  paymentAccountId?: string;
}

export interface VerifyRequest {
  ctx?: UserContext;
  paymentAccountId?: string;
}

export interface CloseRequest {
  ctx?: UserContext;
  paymentAccountId?: string;
}

export interface SubscriptionRequest {
  ctx?: UserContext;
  licenseId?: string;
  dryRun?: boolean;
  params?: string;
  groupId?: string;
  promocode?: string;
  tariffId?: string;
}

export interface SubscriptionResponse {
  paymentId?: string;
  jobId?: string;
  dryRun?: string;
  licenseId?: string;
}

export interface ReceiptRequest {
  paymentId?: string;
  paymentGate?: string;
  params?: string;
}

export interface ReceiptResponse {

}

export interface ValidatePromocodeRequest {
  ctx?: UserContext;
  code?: string;
}

export interface ValidatePromocodeResponse {
  name?: string;
  description?: string;
  type?: string;
  discountValue?: number;
  discountPercent?: number;
  maxDiscount?: number;
}