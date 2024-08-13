package com.toystore.service;

import com.toystore.exception.ProductException;
import com.toystore.model.Cart;
import com.toystore.model.CartItem;
import com.toystore.model.User;
import com.toystore.request.AddItemRequest;

public interface CartService {
  public Cart createcart(User user);
  public CartItem addCartItem(Long userId,AddItemRequest req) throws ProductException;
  public Cart findUserCart(Long userId);
  
}
