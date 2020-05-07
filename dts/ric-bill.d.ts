export interface Billing {
  CreatePayment(request: PaymentRequest): Promise<PaymentResponse>;
}

export interface PaymentRequest {

}

export interface PaymentResponse {

}