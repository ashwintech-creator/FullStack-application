package com.toystore.service;

import org.springframework.stereotype.Service;

import com.toystore.exception.CartItemException;
import com.toystore.exception.UserException;
import com.toystore.model.Cart;
import com.toystore.model.CartItem;
import com.toystore.model.Product;
import com.toystore.model.User;
import com.toystore.repository.CartItemRepository;
import com.toystore.repository.CartRepository;

@Service
public class CartItemServiceImplementation implements CartItemService{

  private CartItemRepository cartItemRepository;
  private UserService userService;
  private CartRepository cartRepository;

  

  public CartItemServiceImplementation(CartItemRepository cartItemRepository, UserService userService,
      CartRepository cartRepository) {
    this.cartItemRepository = cartItemRepository;
    this.userService = userService;
    this.cartRepository = cartRepository;
  }

  @Override
  public CartItem createCartItem(CartItem cartItem) {
    cartItem.setQuantity(1);
    cartItem.setPrice(cartItem.getProduct().getPrice()*cartItem.getQuantity());
    cartItem.setDiscountedPrice(cartItem.getProduct().getDiscountedPrice()*cartItem.getQuantity());
    CartItem created = cartItemRepository.save(cartItem);

    return created;
  }

  @Override
  public CartItem upadteCartItem(Long userId, Long id, CartItem cartItem) throws CartItemException, UserException {
    
    CartItem item =findCartItemById(id);
    User user = userService.findUserById(item.getUserId());
    if (user.getId()==userId) {
      item.setQuantity(cartItem.getQuantity());
      item.setPrice(item.getQuantity()*item.getProduct().getPrice());
      item.setDiscountedPrice(item.getProduct().getDiscountedPrice()*item.getQuantity());
    }
    return cartItemRepository.save(item);
  }

  @Override
  public CartItem isCartItemExist(Cart cart, Product product, String size, Long userId) {
    CartItem cartItem = cartItemRepository.isCartItemExist(cart, product, size, userId);

    return cartItem;
  }

  @Override
  public void removeCartItem(Long userId, Long cartItemId) throws CartItemException, UserException {
    CartItem cartItem = findCartItemById(cartItemId);
    User user = userService.findUserById(cartItem.getUserId());
    User reqUser = userService.findUserById(userId);
    if(user.getId()==reqUser.getId()){
      cartItemRepository.delete(cartItem);
    }
    else{
      throw new UserException("You are not authorized to delete this item");
    }
  }

  @Override
  public CartItem findCartItemById(long cartitemId) throws CartItemException {
    CartItem cartItem = cartItemRepository.findById(cartitemId).orElseThrow(() -> new CartItemException("Not found dude..."));
    return cartItem;
  }

}
