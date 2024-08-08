package com.toystore.model;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.CollectionTable;
import jakarta.persistence.ElementCollection;
import jakarta.persistence.Embedded;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;

@Entity
public class User {

  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  private long id;

  private String firstName;
  private String lasttName;
  private String email;
  private String password;
  private String role;
  private String mobile;

  @OneToMany(mappedBy = "user",cascade = CascadeType.ALL)
  private List<Address> address = new ArrayList<>();

  @Embedded
  @ElementCollection
  @CollectionTable(name="payment_information",joinColumns = @JoinColumn(name="user_id"))
  private List<PaymentInformation> paymentInformations  = new ArrayList<>();

  // @OneToMany
  // private List<Rating> rarings = new ArrayList<>();
  private LocalDateTime createdAt;

  public User(){
    
  }

  public User(long id, String firstName, String lasttName, String email, String password, String role, String mobile,
      List<Address> address, List<PaymentInformation> paymentInformations, LocalDateTime createdAt) {
    this.id = id;
    this.firstName = firstName;
    this.lasttName = lasttName;
    this.email = email;
    this.password = password;
    this.role = role;
    this.mobile = mobile;
    this.address = address;
    this.paymentInformations = paymentInformations;
    this.createdAt = createdAt;
  }

  public long getId() {
    return id;
  }

  public void setId(long id) {
    this.id = id;
  }

  public String getFirstName() {
    return firstName;
  }

  public void setFirstName(String firstName) {
    this.firstName = firstName;
  }

  public String getLasttName() {
    return lasttName;
  }

  public void setLasttName(String lasttName) {
    this.lasttName = lasttName;
  }

  public String getEmail() {
    return email;
  }

  public void setEmail(String email) {
    this.email = email;
  }

  public String getPassword() {
    return password;
  }

  public void setPassword(String password) {
    this.password = password;
  }

  public String getRole() {
    return role;
  }

  public void setRole(String role) {
    this.role = role;
  }

  public String getMobile() {
    return mobile;
  }

  public void setMobile(String mobile) {
    this.mobile = mobile;
  }

  public List<Address> getAddress() {
    return address;
  }

  public void setAddress(List<Address> address) {
    this.address = address;
  }

  public List<PaymentInformation> getPaymentInformations() {
    return paymentInformations;
  }

  public void setPaymentInformations(List<PaymentInformation> paymentInformations) {
    this.paymentInformations = paymentInformations;
  }

  public LocalDateTime getCreatedAt() {
    return createdAt;
  }

  public void setCreatedAt(LocalDateTime createdAt) {
    this.createdAt = createdAt;
  }

}
