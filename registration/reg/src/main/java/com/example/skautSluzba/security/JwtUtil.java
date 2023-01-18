//package com.example.skautSluzba.security;
//
//import org.codehaus.plexus.component.annotations.Component;
//
//import java.util.Date;
//
//@Component
//public class JwtUtil {
//
//    private String secretKey = "secret";
//
//    public String generateToken(String username) {
//        return Jwts.builder()
//                .setSubject(username)
//                .setExpiration(new Date(System.currentTimeMillis() + 864000000))
//                .signWith(SignatureAlgorithm.HS256, secretKey)
//                .compact();
//    }
//
//    public String extractUsername(String token) {
//        return Jwts.parser().setSigningKey(secretKey).parseClaimsJws(token).getBody().getSubject();
//    }
//
//}