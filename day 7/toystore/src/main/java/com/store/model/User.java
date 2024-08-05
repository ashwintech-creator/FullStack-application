package com.store.model;

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

}
