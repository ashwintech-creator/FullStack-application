package com.toystore.model;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Embedded;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;

@Entity
public class Order {
  
  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  private Long id;

  @Column(name="order_id")
  private String orderId;
  
  @ManyToOne
  private User user;

  @OneToMany(mappedBy = "order",cascade = CascadeType.ALL)
  private List<OrderItem> orderItems = new ArrayList<>();

  private LocalDateTime ordrDate;
  private LocalDateTime deliveryDate;
  
  @OneToOne
  private Address shippingAddress;

  @Embedded
  private PaymentDetails paymentDetails = new PaymentDetails();

  private double totalPrice;
  private  Integer totalDiscountedPrice;
  private Integer discounte;
  private String orderstatus;
  private int totalItem;
  private LocalDateTime createAt;

  public Order(Long id, String orderId, User user, List<OrderItem> orderItems, LocalDateTime ordrDate,
      LocalDateTime deliveryDate, Address shippingAddress, PaymentDetails paymentDetails, double totalPrice,
      Integer totalDiscountedPrice, Integer discounte, String orderstatus, int totalItem, LocalDateTime createAt) {
    this.id = id;
    this.orderId = orderId;
    this.user = user;
    this.orderItems = orderItems;
    this.ordrDate = ordrDate;
    this.deliveryDate = deliveryDate;
    this.shippingAddress = shippingAddress;
    this.paymentDetails = paymentDetails;
    this.totalPrice = totalPrice;
    this.totalDiscountedPrice = totalDiscountedPrice;
    this.discounte = discounte;
    this.orderstatus = orderstatus;
    this.totalItem = totalItem;
    this.createAt = createAt;
  }
  public Long getId() {
    return id;
  }
  public void setId(Long id) {
    this.id = id;
  }
  public String getOrderId() {
    return orderId;
  }
  public void setOrderId(String orderId) {
    this.orderId = orderId;
  }
  public User getUser() {
    return user;
  }
  public void setUser(User user) {
    this.user = user;
  }
  public List<OrderItem> getOrderItems() {
    return orderItems;
  }
  public void setOrderItems(List<OrderItem> orderItems) {
    this.orderItems = orderItems;
  }
  public LocalDateTime getOrdrDate() {
    return ordrDate;
  }
  public void setOrdrDate(LocalDateTime ordrDate) {
    this.ordrDate = ordrDate;
  }
  public LocalDateTime getDeliveryDate() {
    return deliveryDate;
  }
  public void setDeliveryDate(LocalDateTime deliveryDate) {
    this.deliveryDate = deliveryDate;
  }
  public Address getShippingAddress() {
    return shippingAddress;
  }
  public void setShippingAddress(Address shippingAddress) {
    this.shippingAddress = shippingAddress;
  }
  public PaymentDetails getPaymentDetails() {
    return paymentDetails;
  }
  public void setPaymentDetails(PaymentDetails paymentDetails) {
    this.paymentDetails = paymentDetails;
  }
  public double getTotalPrice() {
    return totalPrice;
  }
  public void setTotalPrice(double totalPrice) {
    this.totalPrice = totalPrice;
  }
  public Integer getTotalDiscountedPrice() {
    return totalDiscountedPrice;
  }
  public void setTotalDiscountedPrice(Integer totalDiscountedPrice) {
    this.totalDiscountedPrice = totalDiscountedPrice;
  }
  public Integer getDiscounte() {
    return discounte;
  }
  public void setDiscounte(Integer discounte) {
    this.discounte = discounte;
  }
  public String getOrderstatus() {
    return orderstatus;
  }
  public void setOrderstatus(String orderstatus) {
    this.orderstatus = orderstatus;
  }
  public int getTotalItem() {
    return totalItem;
  }
  public void setTotalItem(int totalItem) {
    this.totalItem = totalItem;
  }
  public LocalDateTime getCreateAt() {
    return createAt;
  }
  public void setCreateAt(LocalDateTime createAt) {
    this.createAt = createAt;
  }
  

}
