package com.toystore.service;

import org.springframework.stereotype.Service;

import com.toystore.config.JwtProvider;
import com.toystore.exception.UserException;
import com.toystore.model.User;
import com.toystore.repository.UserRepository;

@Service
public class UserServiceImplementation implements UserService {

  private UserRepository userRepository;
  private JwtProvider jwtProvider;
  

  public UserServiceImplementation(UserRepository userRepository, JwtProvider jwtProvider) {
    this.userRepository = userRepository;
    this.jwtProvider = jwtProvider;
  }

  @Override
  public User findUserById(Long userId) throws UserException {
    
    User user = userRepository.findById(userId).orElseThrow(() -> new UserException("User not found with " +userId+"ID"));
    
    return user;    
  }

  @Override
  public User findUserProfileByJwt(String jwt) throws UserException {
    String email = jwtProvider.getEmailFromToken(jwt);
    // User user = userRepository.findByEmail(email).orElseThrow(() -> new UserException("User not with this email = "+ email));
    User user = userRepository.findByEmail(email);
    if(user==null){
      throw new UserException("User not found with this email = "+ email);
    }

    return user;
  }

}
