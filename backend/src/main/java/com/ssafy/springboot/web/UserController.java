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
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.PropertySource;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.security.MessageDigest;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Api(tags = {"2. User"})

@CrossOrigin("*")
@RestController
@RequestMapping("/api/user")
@RequiredArgsConstructor
public class UserController {
    private final UserService userService;
    private final JwtService jwtService;

    @Value("${client_secret}")
    private String client_secret;


    private CookieManage cm = new CookieManage();

    //모든 유저의 정보를 드린다.
    @ApiOperation("모든 유저의 정보를 출력합니다.")
    @GetMapping("/all")
    public List<User> selectAll() {
        return userService.selectAll();
    }


    // 회원 가입
    @PostMapping("/signup")
    public void signUp(@RequestBody UserSaveRequestDto userSaveRequestDto) {
        String secPass = encrypt(userSaveRequestDto.getUpass());
        userSaveRequestDto.setUpass(secPass);
        userService.signUp(userSaveRequestDto);
    }

    // 아이디 중복 확인(회원가입시)
    @PostMapping("/checkid/{uid}")
    public boolean checkId(@PathVariable String uid) {
        return userService.checkId(uid);
    }


    // 비밀번호 찾기
    @PostMapping("/findpass/{uid}/{uemail:.+}")
    public Map findPass(@PathVariable String uid, @PathVariable String uemail) {
        System.out.println("비밀번호 찾기: " + uid + " " + uemail);
        Map<String, String> map = new HashMap<>();
        map.put("email", userService.findPass(uid, uemail));
        return map;
    }


    // 회원 정보 수정
    @PutMapping("/update")
    public void update(HttpServletResponse response, HttpServletRequest request, @RequestBody UserUpdateRequestDto userUpdateRequestDto) {
        String jwt = request.getHeader("Authorization");
        System.out.println("jwt가 뭡니까? :" + jwt);
        if (!jwtService.isUsable(jwt)) return;
        UserJwtResponsetDto user = jwtService.getUser(jwt);
        System.out.println("현재 유저 : " + user.getUid());
        userService.update(user.getUid(), userUpdateRequestDto);
        // 기존 토큰 죽이기
        System.out.println("기존 토큰을 삭제합니다.");

        cm.CookieDelete(request, response);
        System.out.println("지금 쿠키수 : " + request.getCookies().length);
        //토큰 재발행
        System.out.println("토큰을 재발행합니다.");
        String token = jwtService.create(new UserJwtResponsetDto(userService.findByuid(user.getUid())));
        cm.CookieMake(request, response, token);
    }

    // 삭제
    @DeleteMapping("/delete")
    public void delete(@RequestBody UserDeleteRequestDto userDeleteRequestDto, HttpServletResponse response, HttpServletRequest request) {
        String jwt = request.getHeader("Authorization");
        System.out.println("jwt가 뭡니까? : " + jwt);
        //유효성 검사
        if (!jwtService.isUsable(jwt)) throw new UnauthorizedException(); // 예외
        UserJwtResponsetDto user = jwtService.getUser(jwt);

        if (user.getUid().equals(userDeleteRequestDto.getUid())) {
            userService.delete(user.getUid());
            Cookie cookie = request.getCookies()[0];
            cookie.setValue(null);
            cookie.setPath("/"); // <- 여기 잘 모르겠음
            cookie.setMaxAge(0);//나이 0살 - 죽은거야
            response.addCookie(cookie);
        } else throw new UnauthorizedException(); // 예외
    }

    // 로그인
    @ApiOperation("로그인하면서 토큰을 발행")
    @PostMapping("/signin")
    public Map signIn(@RequestBody UserJwtRequestDto userJwtRequestDto, HttpServletResponse response, HttpServletRequest request) {
        System.out.println("로그인");
        System.out.println((userJwtRequestDto.getUid() + " " + userJwtRequestDto.getUpass()));
        Map<String, String> map = new HashMap<>();
        String secPass = encrypt(userJwtRequestDto.getUpass());
        UserJwtResponsetDto userJwtResponsetDto = userService.signIn(userJwtRequestDto.getUid(), secPass);
        if (userJwtResponsetDto != null && request.getCookies() == null) {
            String token = jwtService.create(userJwtResponsetDto);
            cm.CookieMake(request, response, token);
            map.put("token", token);
            return map;
        }
        map.put("token", request.getCookies()[0].getValue());
        return map;
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
