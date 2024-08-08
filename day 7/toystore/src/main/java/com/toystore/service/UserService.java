package com.toystore.service;

import com.toystore.exception.UserException;
import com.toystore.model.User;

public interface UserService {

  public User findUserById(Long userId) throws UserException;

  public User findUserProfileByJwt(String jwt)throws UserException;
  
}
