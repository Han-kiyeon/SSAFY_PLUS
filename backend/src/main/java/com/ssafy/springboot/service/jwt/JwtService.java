package com.ssafy.springboot.service.jwt;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.ssafy.springboot.web.dto.user.UserJwtResponsetDto;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jws;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.UnsupportedEncodingException;


@Slf4j
@Service
public class JwtService {

    @Autowired
    private ObjectMapper objectMapper;

    private static final String SALT = "LatteSecret";
    private static String key = "member";

    public UserJwtResponsetDto getUser(String jwt){
        ObjectMapper mapper=new ObjectMapper();

        Jws<Claims> claims=null;
        try{
            claims=Jwts.parser()
                    .setSigningKey(this.generateKey())
                    .parseClaimsJws(jwt);
        }catch (Exception e) {
            throw new UnauthorizedException();
        }

        //LinkedHashMap으로 변환되는 claims.getbody() <- 데이터 담긴곳
        //이걸 자바 코딩에서 이용하기위해 객체화 해야함
        //그게 바로 아래 코드
        UserJwtResponsetDto userJwtResponsetDto =
                mapper.convertValue(claims.getBody().get(key), UserJwtResponsetDto.class);

        return userJwtResponsetDto;
    }

    // 토큰 발행(JWT 만들기)
    // JWT의 헤더, 클레임, 암호 등의 필요한 정보를 넣고 직렬화
    // session처럼 활용하기 위해서는 claim에 데이터를 넣으면 된다.
    public <T> String create(T data) { // user
        String jwt =Jwts.builder()
                .setHeaderParam("type", "JWT")
                .setHeaderParam("regDate", System.currentTimeMillis())
                .claim(key, data)
                .signWith(SignatureAlgorithm.HS256, this.generateKey())
                .compact();
        return jwt;
    }

    private byte[] generateKey() {
        byte[] key = null;
        try {
            key = SALT.getBytes("UTF-8");
        } catch (UnsupportedEncodingException e) {
            if (log.isInfoEnabled()) {
                e.printStackTrace();
            } else {
                log.error("Making JWT Key Error ::: {}", e.getMessage());
            }
        }
        return key;
    }

    // claim으로 변환
    public boolean isUsable(String jwt) {
        try {
            Jws<Claims> claims = Jwts.parser()
                    .setSigningKey(this.generateKey())
                    .parseClaimsJws(jwt); // 변환중
            return true; // 변환 완료 -> 유효한 토큰, true 반환
        } catch (Exception e) {
            throw new UnauthorizedException(); // 예외
        }
    }

    // JWT에 넣어 놓은 데이터를 가져온다.
    public Object get(String jwt) {
        Jws<Claims> claims = null;
        try {
            claims = Jwts.parser()
                    .setSigningKey(SALT.getBytes("UTF-8"))
                    .parseClaimsJws(jwt);
        } catch (Exception e) {
            throw new UnauthorizedException();
        }
//        System.out.println("이건가요? "+claims.getBody().get(KEY));
        return claims.getBody();
    }

}
