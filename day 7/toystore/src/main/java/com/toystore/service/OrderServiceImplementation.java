package com.toystore.service;

import java.util.List;

import com.toystore.exception.OrderException;
import com.toystore.model.Address;
import com.toystore.model.Order;
import com.toystore.model.User;
import com.toystore.repository.CartItemRepository;
import com.toystore.repository.CartRepository;

public class OrderServiceImplementation implements OrderService{

  private CartRepository cartRepository;
  private CartItemRepository cartItemRepository;
  private ProductService productService;

  

  public OrderServiceImplementation(CartRepository cartRepository, CartItemRepository cartItemRepository,
      ProductService productService) {
    this.cartRepository = cartRepository;
    this.cartItemRepository = cartItemRepository;
    this.productService = productService;
  }

  @Override
  public Order createOrder(User user, Address shippingAdress) {
    return null;
  }

  @Override
  public Order findOrderById(Long orderId) throws OrderException {
    return null;
  }

  @Override
  public List<Order> usersOrderHistory(Long userId) {
    return null;
  }

  @Override
  public Order placedOrder(Long orderId) throws OrderException {
    return null;
  }

  @Override
  public Order confirmedOrder(Long orderId) throws OrderException {
    return null;
  }

  @Override
  public Order shippedOrder(Long orderId) throws OrderException {
    return null;
  }

  @Override
  public Order deliveredOrder(Long orderId) throws OrderException {
    return null;
  }

  @Override
  public Order cancledOrder(Long orderId) throws OrderException {
    return null;
  }

  @Override
  public List<Order> getAllOrders() {
    return null;
  }

  @Override
  public void deleteOrder(Long orderId) throws OrderException {
    return;
  }

}
