package com.ssafy.springboot.service;

import com.ssafy.springboot.domain.user.LoginUser;

import io.jsonwebtoken.*;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.Map;

@Service
@Component
@Slf4j
public class JwtService {

    @Value("${jwt.salt}")
    private String salt;

    @Value("${jwt.expmin}")
    private Long expireMin;

    public String create(final LoginUser user) {
        log.trace("time : {}", expireMin);
        final JwtBuilder builder = Jwts.builder();
        builder.setHeaderParam("typ", "JWT");
        builder.setSubject("로그인토큰")
                .setExpiration(new Date(System.currentTimeMillis() + 1000 * 60 * expireMin))
                .claim("User", user).claim("second", "더 담고싶은거 있어?");
        builder.signWith(SignatureAlgorithm.HS256, salt.getBytes());
        final String jwt = builder.compact();
        log.debug("토큰 발행: {}", jwt);
        System.out.println(jwt);
        return jwt;
    }

    public void checkValid(final String jwt) {
        log.trace("토큰 점검 : {}", jwt);
        Jwts.parser().setSigningKey(salt.getBytes()).parseClaimsJws(jwt);
    }

    public Map<String, Object> get(final String jwt) {
        Jws<Claims> claims = null;
        try {
            claims = Jwts.parser().setSigningKey(salt.getBytes()).parseClaimsJws(jwt);
        } catch (final Exception e) {
            throw new RuntimeException();
        }
        log.trace("claims: {}", claims);
        return claims.getBody();
    }
}