export interface Billing {
  SetupAccount(request: SetupRequest): Promise<SetupResponse>;
  VerifyAccount(request: SetupRequest): Promise<SetupResponse>;
  CloseAccount(request: SetupRequest): Promise<SetupResponse>;
  CreateSubscription(request: SubscriptionRequest): Promise<SubscriptionResponse>;
  UpdateSubscription(request: SubscriptionRequest): Promise<SubscriptionResponse>;
  CancelSubscription(request: SubscriptionRequest): Promise<SubscriptionResponse>;
  ResumeSubscription(request: SubscriptionRequest): Promise<SubscriptionResponse>;
  ActivateSubscription(request: SubscriptionRequest): Promise<SubscriptionResponse>;
  DeactivateSubscription(request: SubscriptionRequest): Promise<SubscriptionResponse>;
  SendReceipt(request: ReceiptRequest): Promise<ReceiptResponse>;
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

export interface DryRun {
  amount?: string;
  currency?: string;
  nextPay?: number;
  messages?: string[];
}

export interface SubscriptionRequest {
  ctx?: UserContext;
  licenseId?: string;
  dryRun?: boolean;
  params?: string;
}

export interface SubscriptionResponse {
  paymentId?: string;
  jobId?: string;
  dryRun?: DryRun;
}

export interface ReceiptRequest {
  paymentId?: string;
  paymentGate?: string;
  params?: string;
}

export interface ReceiptResponse {

}