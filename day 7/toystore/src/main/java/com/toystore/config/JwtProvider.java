package com.toystore.config;

import java.util.Date;

import javax.crypto.SecretKey;

import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;

@Service
public class JwtProvider {
  // The secret key used to sign the JWTs is initialized here.
  // It is derived from a constant value defined in JwtConstant.SECRET_KEY.
  SecretKey key = Keys.hmacShaKeyFor(JwtConstant.SECRET_KEY.getBytes());

  public String generateToken(Authentication auth) {
    // Create a JWT with the issued date, expiration date, and email as a claim.
    String jwt = Jwts.builder().setIssuedAt(new Date()).setExpiration(new Date(new Date().getTime() + 846000000))
        .claim("email", auth.getName()).signWith(key).compact();
    return jwt;
  }

  public String getEmailFromToken(String jwt) {
    jwt = jwt.substring(7);
    Claims claims = Jwts.parserBuilder().setSigningKey(key).build().parseClaimsJws(jwt).getBody();
    String email = String.valueOf(claims.get("email"));
    return email;
  }

}
