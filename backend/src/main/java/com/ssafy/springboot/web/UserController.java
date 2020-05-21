package com.ssafy.springboot.web;

import com.ssafy.springboot.domain.user.User;
import com.ssafy.springboot.service.UserService;
import com.ssafy.springboot.service.jwt.CookieManage;
import com.ssafy.springboot.service.jwt.JwtService;
import com.ssafy.springboot.service.jwt.UnauthorizedException;
import com.ssafy.springboot.web.dto.user.*;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import java.security.MessageDigest;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Api(tags = {"1. User"})

@CrossOrigin("*")
@RestController
@RequestMapping("/api/user")
@RequiredArgsConstructor
public class UserController {
    private final UserService userService;
    private final JwtService jwtService;


    private CookieManage cm = new CookieManage();

    //모든 유저의 정보를 드린다.
    @ApiOperation("모든 유저의 정보를 출력합니다.")
    @GetMapping("/all")
    public List<User> selectAll() {
        return userService.selectAll();
    }


    // 회원 가입
    @PostMapping("/signup")
    public ResponseEntity<?> signUp(@RequestBody UserSaveRequestDto userSaveRequestDto) {
        if (checkId(userSaveRequestDto.getEmail()))
            return ResponseEntity.status(HttpStatus.FORBIDDEN).body("이메일 중복!!");
        String secPass = encrypt(userSaveRequestDto.getPassword());
        userSaveRequestDto.setPassword(secPass);
        userService.signUp(userSaveRequestDto);
        return ResponseEntity.status(HttpStatus.OK).body("회원가입 완료!!");
    }

    // 아이디 중복 확인(회원가입시)
    @PostMapping("/checkid/{email:.+}")
    public boolean checkId(@PathVariable String email) {
        return userService.checkEmail(email);
    }


    // 비밀번호 찾기
    @PostMapping("/findpass/{email:.+}/{name}")
    public ResponseEntity<?> findPass(@PathVariable String email, @PathVariable String name) {
        System.out.println("비밀번호 찾기: " + email + " " + name);
        Map<String, String> map = new HashMap<>();
        if (userService.findPass(email, name).equals(email)) {
            map.put("email", email);
            return ResponseEntity.status(HttpStatus.OK).body(map);
        } else
            return ResponseEntity.status(HttpStatus.FORBIDDEN).body("불일치");
    }


    // 회원 정보 수정
    @PutMapping("/update")
    public ResponseEntity<?> update(HttpServletResponse response, HttpServletRequest request, @RequestBody UserUpdateRequestDto userUpdateRequestDto) {
        String jwt = request.getHeader("Authorization");
        System.out.println("jwt가 뭡니까? :" + jwt);

        jwtService.isUsable(jwt); //없으면 500Error

        UserJwtResponsetDto user = jwtService.getUser(jwt);
        System.out.println("현재 유저 : " + user.getEmail());
        userService.update(user.getEmail(), userUpdateRequestDto);
        // 기존 토큰 죽이기
        System.out.println("기존 토큰을 삭제합니다.");

        cm.CookieDelete(request, response);
        System.out.println("지금 쿠키수 : " + request.getCookies().length);
        //토큰 재발행
        System.out.println("토큰을 재발행합니다.");
        String token = jwtService.create(new UserJwtResponsetDto(userService.findByEmail(user.getEmail())));
        cm.CookieMake(request, response, token);
        return ResponseEntity.status(HttpStatus.OK).body("성공~!!");
    }

    // 삭제
    @DeleteMapping("/delete")
    public void delete(@RequestBody UserDeleteRequestDto userDeleteRequestDto, HttpServletResponse response, HttpServletRequest request) {
        String jwt = request.getHeader("Authorization");
        System.out.println("jwt가 뭡니까? : " + jwt);
        //유효성 검사
        if (!jwtService.isUsable(jwt)) throw new UnauthorizedException(); // 예외
        UserJwtResponsetDto user = jwtService.getUser(jwt);

        if (user.getEmail().equals(userDeleteRequestDto.getEmail())) {
            userService.delete(user.getEmail());
            Cookie cookie = request.getCookies()[0];
            cookie.setValue(null);
            cookie.setPath("/");
            cookie.setMaxAge(0);
            response.addCookie(cookie);
        } else throw new UnauthorizedException(); // 예외
    }

    // 로그인
    @ApiOperation("로그인하면서 토큰을 발행")
    @PostMapping("/login")
    public ResponseEntity<?> logIn(@RequestBody UserJwtRequestDto userJwtRequestDto, HttpServletResponse response, HttpServletRequest request) {
        System.out.println("로그인");

        System.out.println((userJwtRequestDto.getEmail() + " " + userJwtRequestDto.getPassword()));
        Map<String, String> map = new HashMap<>();
        String secPass = encrypt(userJwtRequestDto.getPassword());

        UserJwtResponsetDto userJwtResponsetDto = userService.signIn(userJwtRequestDto.getEmail(), secPass);

        if (userJwtResponsetDto == null)
            return ResponseEntity.status(HttpStatus.FORBIDDEN).body("불일치!");

        if (userJwtResponsetDto != null && request.getCookies() == null) {
            String token = jwtService.create(userJwtResponsetDto);
            cm.CookieMake(request, response, token);
            map.put("token", token);
            return ResponseEntity.status(HttpStatus.OK).body(map);
        }
        map.put("token", request.getCookies()[0].getValue());
        return ResponseEntity.status(HttpStatus.OK).body(map);
    }

    @GetMapping("/logout")
    public void logOut(HttpServletResponse response, HttpServletRequest request) {
        cm.CookieDelete(request, response);
    }


    public static String encrypt(String rawpass) {
        try {
            MessageDigest md = MessageDigest.getInstance("SHA-256");
            md.update(rawpass.getBytes());
            byte byteData[] = md.digest();
            StringBuffer sb = new StringBuffer();
            for (int i = 0; i < byteData.length; i++) {
                sb.append(Integer.toString((byteData[i] & 0xff) + 0x100, 16).substring(1));
            }
            StringBuffer hexString = new StringBuffer();
            for (int i = 0; i < byteData.length; i++) {
                String hex = Integer.toHexString(0xff & byteData[i]);
                if (hex.length() == 1) {
                    hexString.append('0');
                }
                hexString.append(hex);
            }
            return hexString.toString();
        } catch (Exception e) {
            e.printStackTrace();
            throw new RuntimeException();
        }
    }

}
