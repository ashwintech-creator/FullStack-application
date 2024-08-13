package com.toystore.model;

import java.time.LocalDate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

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
    
  @ManyToOne()
  @JoinColumn(name = "category_id")
  private Category category;

  private LocalDate createdAt;
// getters and setters 

  public Product(){

  }

  public Product(long id, String title, String description, int price, int discountedPrice, int discountPersent,
      int quantity, String brand, String color, String size, String imageUrl, Category category, LocalDate createdAt) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.price = price;
    this.discountedPrice = discountedPrice;
    this.discountPersent = discountPersent;
    this.quantity = quantity;
    this.brand = brand;
    this.color = color;
    this.size = size;
    this.imageUrl = imageUrl;
    this.category = category;
    this.createdAt = createdAt;
  }

  public long getId() {
    return id;
  }

  public void setId(long id) {
    this.id = id;
  }

  public String getTitle() {
    return title;
  }

  public void setTitle(String title) {
    this.title = title;
  }

  public String getDescription() {
    return description;
  }

  public void setDescription(String description) {
    this.description = description;
  }

  public int getPrice() {
    return price;
  }

  public void setPrice(int price) {
    this.price = price;
  }

  public int getDiscountedPrice() {
    return discountedPrice;
  }

  public void setDiscountedPrice(int discountedPrice) {
    this.discountedPrice = discountedPrice;
  }

  public int getDiscountPersent() {
    return discountPersent;
  }

  public void setDiscountPersent(int discountPersent) {
    this.discountPersent = discountPersent;
  }

  public int getQuantity() {
    return quantity;
  }

  public void setQuantity(int quantity) {
    this.quantity = quantity;
  }

  public String getBrand() {
    return brand;
  }

  public void setBrand(String brand) {
    this.brand = brand;
  }

  public String getColor() {
    return color;
  }

  public void setColor(String color) {
    this.color = color;
  }

  public String getSize() {
    return size;
  }

  public void setSize(String size) {
    this.size = size;
  }

  public String getImageUrl() {
    return imageUrl;
  }

  public void setImageUrl(String imageUrl) {
    this.imageUrl = imageUrl;
  }

  public Category getCategory() {
    return category;
  }

  public void setCategory(Category category) {
    this.category = category;
  }

  public LocalDate getCreatedAt() {
    return createdAt;
  }

  public void setCreatedAt(LocalDate createdAt) {
    this.createdAt = createdAt;
  }

  
  

}
