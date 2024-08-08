package com.toystore.controller;

// import org.springframework.data.repository.config.CustomRepositoryImplementationDetector;

// import java.net.Authenticator;

import org.springframework.http.HttpStatus;
// import org.springframework.boot.autoconfigure.neo4j.Neo4jProperties.Authentication;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.toystore.config.JwtProvider;
import com.toystore.exception.UserException;
import com.toystore.model.User;
import com.toystore.repository.UserRepository;
import com.toystore.request.LoginRequest;
import com.toystore.response.AuthResponse;
import org.springframework.web.bind.annotation.PostMapping;
import com.toystore.service.CustomeUserServiceImplementation;


@RestController
@RequestMapping("/auth")
public class AuthController {

  private UserRepository userRepository;
  private JwtProvider jwtProvider;
  private PasswordEncoder passwordEncoder;
  private CustomeUserServiceImplementation customUserService;

  

  public AuthController(UserRepository userRepository, JwtProvider jwtProvider, PasswordEncoder passwordEncoder,
      CustomeUserServiceImplementation customUserService) {
    this.userRepository = userRepository;
    this.jwtProvider = jwtProvider;
    this.passwordEncoder = passwordEncoder;
    this.customUserService = customUserService;
  }

  

  //User registration ku Endpoint
  @PostMapping("/signup")
  public ResponseEntity<AuthResponse> createUserHandler(@RequestBody User user)throws UserException{

    //user details request body kita irudhu
    String email = user.getEmail();
    String password = user.getPassword();
    String firstName =user.getFirstName();
    String num = user.getMobile();
    String lastName = user.getLasttName();

    //kudutha email ku user irukana?
    User isEmailExist = userRepository.findByEmail(email);
    if(isEmailExist!=null){
      throw new UserException("Email is already used with Another account!!!!!!!!!!");
    }

    //pudhu user
    User createdUser =new User();
    createdUser.setEmail(email);
    createdUser.setPassword(passwordEncoder.encode(password));
    createdUser.setFirstName(firstName);
    createdUser.setLasttName(lastName);
    createdUser.setMobile(num);

    //database la saving 
    User savedUser =userRepository.save(createdUser);

    //authentication token for the new user
    Authentication authentication = new UsernamePasswordAuthenticationToken(savedUser.getEmail(), savedUser.getPassword());
    SecurityContextHolder.getContext().setAuthentication(authentication);

    String token =jwtProvider.generateToken(authentication);
    AuthResponse authResponse=new AuthResponse(token,"Signup Succes");

    return new ResponseEntity<AuthResponse>(authResponse,HttpStatus.CREATED);
  }


  @PostMapping("/signin")
  public ResponseEntity<AuthResponse> loginUserHandler(@RequestBody LoginRequest loginRequest){
    String username = loginRequest.getEmail();
    String password = loginRequest.getPassword();

    Authentication authentication = authenticate(username,password);
    SecurityContextHolder.getContext().setAuthentication(authentication);

    String token =jwtProvider.generateToken(authentication);
    AuthResponse authResponse=new AuthResponse(token,"Signin Sucess");

    return new ResponseEntity<AuthResponse>(authResponse,HttpStatus.CREATED);
  }

  private Authentication authenticate(String username, String password) {
    // TODO Auto-generated method stub
    // UserDetails userDetails = customUserService.loadUserByUsername(username);
    // if(userDetails==null) throw new BadCredentialsException("Invalid.... username");

    // if(passwordEncoder.matches(password, userDetails.getPassword())){
    //   throw new BadCredentialsException("password is incorrect");
    // }
    // // throw new UnsupportedOperationException("Unimplemented method 'authenticate'");
    // // Return a valid Authentication object
    // return new UsernamePasswordAuthenticationToken(userDetails, null, userDetails.getAuthorities());
    UserDetails userDetails = customUserService.loadUserByUsername(username);
        
        System.out.println("sign in userDetails - "+userDetails);
        
        if (userDetails == null) {
        	System.out.println("sign in userDetails - null " + userDetails);
            throw new BadCredentialsException("Invalid username or password");
        }
        if (!passwordEncoder.matches(password, userDetails.getPassword())) {
        	System.out.println("sign in userDetails - password not match " + userDetails);
            throw new BadCredentialsException("Invalid username or password");
        }
        return new UsernamePasswordAuthenticationToken(userDetails, null, userDetails.getAuthorities());
  }

}
