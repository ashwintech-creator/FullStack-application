package com.toystore.model;

public class PaymentDetails {
  private String paymentMethod;
  private String status;
  private String paymentId;
  //razorpay
  public PaymentDetails(){}
  
  public PaymentDetails(String paymentMethod, String status, String paymentId) {
    this.paymentMethod = paymentMethod;
    this.status = status;
    this.paymentId = paymentId;
  }
  public String getPaymentMethod() {
    return paymentMethod;
  }
  public void setPaymentMethod(String paymentMethod) {
    this.paymentMethod = paymentMethod;
  }
  public String getStatus() {
    return status;
  }
  public void setStatus(String status) {
    this.status = status;
  }
  public String getPaymentId() {
    return paymentId;
  }
  public void setPaymentId(String paymentId) {
    this.paymentId = paymentId;
  }

}
