package com.toystore.service;

import com.toystore.exception.CartItemException;
import com.toystore.exception.UserException;
import com.toystore.model.Cart;
import com.toystore.model.CartItem;
import com.toystore.model.Product;

public interface CartItemService {

  public CartItem createCartItem(CartItem cartItem);
  public CartItem upadteCartItem(Long userId,Long id,CartItem cartItem) throws CartItemException,UserException;
  public CartItem isCartItemExist(Cart cart,Product product,String size,Long userId);
  public void removeCartItem(Long userId,Long cartItem) throws CartItemException, UserException;
  public CartItem findCartItemById(long cartitemId)throws CartItemException;

}
