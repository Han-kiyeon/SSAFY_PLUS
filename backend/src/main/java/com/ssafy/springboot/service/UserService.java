package com.ssafy.springboot.service;

import com.ssafy.springboot.domain.user.LoginUser;
import com.ssafy.springboot.domain.user.Role;
import com.ssafy.springboot.domain.user.User;
import com.ssafy.springboot.domain.user.UserRepository;
import com.ssafy.springboot.web.dto.user.UserSaveRequestDto;
import com.ssafy.springboot.web.dto.user.UserUpdateRequestDto;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@RequiredArgsConstructor
@Service
public class UserService {

    private static final Role USER = Role.USER;
    private final UserRepository userRepository;

    @Transactional
    public Long save(UserSaveRequestDto requestDto) {
        return userRepository.save(requestDto.toEntity()).getUser_id();
    }

    @Transactional
    public LoginUser signin(String email, String password) {
        User user = userRepository.findByEmail(email).orElse(null);
        if (user != null && password.equals(user.getPassword())) {
            return new LoginUser(email, password, user.getName());
        } else if (user != null && !password.equals(user.getPassword())) {
            throw new RuntimeException("비밀번호가 틀립니다");
        } else {
            throw new RuntimeException("그런 사람은 없어요~");
        }
    }

    public String getserverInfo() {
        return "cat_dog";
    }

    @Transactional
    public User update(String name, UserUpdateRequestDto userUpdateRequestDto) {
        User user = userRepository.findByName(name).orElse(null);
        user.update(userUpdateRequestDto);
        return user;
    }

    @Transactional
    public Long delete(String name) {
        User user = userRepository.findByName(name).orElse(null);
        System.out.println(user.getName());
        userRepository.delete(user);
        return 1L;
    }
}