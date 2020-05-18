package com.ssafy.springboot.web;

import com.ssafy.springboot.domain.user.LoginUser;
import com.ssafy.springboot.domain.user.User;
import com.ssafy.springboot.domain.user.UserRepository;
import com.ssafy.springboot.service.JwtService;
import com.ssafy.springboot.service.UserService;
import com.ssafy.springboot.web.dto.JwtResponseDto;
import com.ssafy.springboot.web.dto.user.UserSaveRequestDto;
import com.ssafy.springboot.web.dto.user.UserUpdateRequestDto;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import javax.servlet.http.HttpServletRequest;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

@Api(tags = {"2. User"})
@RequiredArgsConstructor
@RestController
@RequestMapping("/api/user")
public class UserController {
    private final UserService userService;
    private final UserRepository userRepository;
    private final JwtService jwtService;

    @ApiOperation(value="회원가입")
    @PostMapping("/signup") // 회원가입
    public Long save(@RequestBody UserSaveRequestDto requestDto) {
        User user = userRepository.findByName(requestDto.getName()).orElse(null);
        if (user != null) {
            return -1L;
        }
        return userService.save(requestDto);
    }

    @ApiOperation(value="로그인")
    @PostMapping("/signin") //로그인
    public ResponseEntity<?> signin(@RequestBody LoginUser user) {
        Map<String, Object> resultMap = new HashMap<>();
        HttpStatus status = null;
        String token = "";
        String email = "";
        String name = "";
        Optional<User> logincheckuser = userRepository.findByEmail(user.getEmail());
        if (logincheckuser == null) {
            token = "no user";
            return ResponseEntity.ok(new JwtResponseDto(token, email, name));
        } else if (logincheckuser != null && !(logincheckuser.get().getPassword().equals(user.getPassword()))) {
            token = "no password";
            return ResponseEntity.ok(new JwtResponseDto(token, email, name));
        } else {
            try {
                LoginUser loginUser = userService.signin(user.getEmail(), user.getPassword());
                token = jwtService.create(loginUser);
                email = loginUser.getEmail();
                name = loginUser.getName();
                System.out.println(token);
                status = HttpStatus.ACCEPTED;
                System.out.println(loginUser.getEmail() + " " + loginUser.getPassword());
            } catch (RuntimeException e) {
//              log.error("로그인 실패", e);
                resultMap.put("message", e.getMessage());
                status = HttpStatus.INTERNAL_SERVER_ERROR;
            }
            return ResponseEntity.ok(new JwtResponseDto(token, email, name));
        }

    }
    @ApiOperation(value="회원정보수정")
    @PutMapping("/update/{name}")
    public User update(@PathVariable String name, @RequestBody UserUpdateRequestDto userUpdateRequestDto) {
        return userService.update(name, userUpdateRequestDto);
    }

    @ApiOperation(value="회원탈퇴")
    @DeleteMapping("/delete/{name}")
    public Long delete(@PathVariable String name) {
        return userService.delete(name);
    }

    @ApiOperation(value="유저정보")
    @PostMapping("/auth/info") //유저정보
    public ResponseEntity<Map<String, Object>> getInfo(HttpServletRequest req, @RequestBody LoginUser user) {
        Map<String, Object> resultMap = new HashMap<>();
        HttpStatus status = null;
        try {
            String info = userService.getserverInfo();
            resultMap.putAll(jwtService.get(req.getHeader("jwt-auth-token")));
            resultMap.put("status", true);
            resultMap.put("info", info);
            resultMap.put("request_body", user);
            status = HttpStatus.ACCEPTED;
        } catch (RuntimeException e) {
//            log.error("정보조회 실패", e);
            resultMap.put("message", "유효한 토큰이 아닙니다");
            status = HttpStatus.INTERNAL_SERVER_ERROR;
        }
        return new ResponseEntity<Map<String, Object>>(resultMap, status);
    }


}