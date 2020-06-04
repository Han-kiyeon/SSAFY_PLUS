package com.ssafy.springboot.web;

import com.ssafy.springboot.service.UserInfoService;
import com.ssafy.springboot.web.dto.userInfo.UserInfoResponseDto;
import com.ssafy.springboot.web.dto.userInfo.UserInfoSaveRequestDto;
import com.ssafy.springboot.web.dto.userInfo.UserInfoUpdateRequestDto;
import io.swagger.annotations.Api;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Api(tags = {"UserInfo"})

@CrossOrigin("*")
@RestController
@RequestMapping("/api/userInfo")
@RequiredArgsConstructor
public class UserInfoController {

    private final UserInfoService userInfoService;

    @GetMapping("/list")
    public List<UserInfoResponseDto> findAll() {
        return userInfoService.findAll();
    }

    @GetMapping("/get/{email:.+}/")
    public UserInfoResponseDto findByEmail(@PathVariable String email) {
        System.out.println(email);

        return userInfoService.findByEmail(email);
    }

    @GetMapping("/{id}")
    public UserInfoResponseDto findById(@PathVariable Long id) {
        return userInfoService.findById(id);
    }

    @PostMapping("")
    public ResponseEntity<?> save(@RequestBody UserInfoSaveRequestDto requestDto) {
        return userInfoService.save(requestDto);
    }

    @PutMapping("/{id}")
    public Long update(@PathVariable Long id, @RequestBody UserInfoUpdateRequestDto requestDto) {
        return userInfoService.update(id, requestDto);
    }

    @DeleteMapping("/{id}")
    public Long delete(@PathVariable Long id) {
        userInfoService.delete(id);
        return id;
    }
}
