package com.toystore.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.toystore.model.User;

public interface UserRepository extends JpaRepository<User,Long>{

  public User findByEmail(String email);
  
}
