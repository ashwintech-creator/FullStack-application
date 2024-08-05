package com.store.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Product {

  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  private long id;

  private String title;

  private String description;

  @Column(name="price")
  private int price;

  @Column(name="discount_price")
  private int discountedPrice;

  @Column(name="discount_persent")
  private int discountPersent;

  @Column(name="quantity")
  private int quantity;

  @Column(name="brand")
  private String brand;

  @Column(name ="color")
  private String color;

  @Column(name="size")
  private String size;

  @Column(name = "image_url")
  private String imageUrl;


}
