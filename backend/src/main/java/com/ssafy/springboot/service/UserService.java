package com.ssafy.springboot.service;

import com.ssafy.springboot.domain.user.User;
import com.ssafy.springboot.domain.user.UserRepository;
import com.ssafy.springboot.web.dto.user.UserJwtResponsetDto;
import com.ssafy.springboot.web.dto.user.UserSaveRequestDto;
import com.ssafy.springboot.web.dto.user.UserUpdateRequestDto;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.List;

@Service
@RequiredArgsConstructor
public class UserService {


    private final UserRepository userRepository;

    @Autowired
    JavaMailSender javaMailSender;

    @Transactional
    public List<User> selectAll() {
        return userRepository.findAll();
    }


    //이메일로 엔티티 가져오기
    @Transactional
    public User findByEmail(String email) {
        return userRepository.findByEmail(email);
    }


    // 회원 가입
    @Transactional
    public boolean signUp(UserSaveRequestDto userSaveRequestDto) {
        System.out.println(userSaveRequestDto);
        // insert 전에 테이블을 검색해서 중복된 이메일이 있는지 확인한다.

        //우리 회원가입 로직은 이메일로만 중복검사를 실행합니다.!!!
        if (checkEmail(userSaveRequestDto.getEmail())) //이미 이메일이 있으면
            return false;

        // 회원가입완료 메일 전송
        MailService mailService = new MailService();
        mailService.setJavaMailSender(javaMailSender);
        mailService.sendSimpleMessage(userSaveRequestDto.getEmail(), "[PlusSafy] 회원가입 완료", "ㅎㅇㅎㅇ");

        userRepository.save(userSaveRequestDto.toEntity()).getUser_id();
        return true;
    }


    // 회원가입시 이메일 중복 확인
    @Transactional
    public boolean checkEmail(String emil) {
        User user = userRepository.findByEmail(emil);
        if (user != null) return true; //있으면 1
        else return false; //없으면 0
    }


    // 비밀번호 찾기
    @Transactional
    public String findPass(String email, String name) {
        if (!checkEmail(email)) return "회원 정보가 없습니다.";

        User user = userRepository.findByEmail(email);
        if (user.getName().equals(name)) {
            // 비밀번호 생성
            String new_pass = generatePass(10);
            // 이메일로 비밀번호 쏴주고!!
            MailService mailService = new MailService();
            mailService.setJavaMailSender(javaMailSender);
            mailService.sendSimpleMessage(email, "[PlusSafy] 비밀번호 재설정", "비밀번호: " + new_pass);
            // 테이블에 있는 회원 비밀번호 그걸로 수정!!!!! -> 암호화
            userRepository.updatePass(email, SHA256Util.getEncrypt(new_pass));
        } else {
            return "입력한 이메일과 이름이 일치하지 않습니다.";
        }

        return user.getEmail();
    }

    // 비밀번호 생성 메소드
    public String generatePass(int length) {
        StringBuffer sb = new StringBuffer();
        char[] charSet = new char[]{
                '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'
                , 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M'
                , 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
                , 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm'
                , 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
        };
        for (int i = 0; i < length; i++) {
            int index = (int) (charSet.length * Math.random());
            sb.append(charSet[index]);
        }

        return sb.toString();
    }

    //바뀐 유저 데이터에 대해서 토큰을 재발행 할 때
    //JwtUserRequest를 만들기 위한 작업으로 필요함.
    //DB까지 가지않고 서비스를 이용하여 끌고옴
    @Transactional
    public User findByID(String email) {
        return userRepository.findByEmail(email);
    }


    // 회원 정보 수정
    @Transactional
    public String update(String email, UserUpdateRequestDto userUpdateRequestDto) {
        User user = userRepository.findByEmail(email);
        if (user == null)
            new IllegalArgumentException("해당 사용자가 없습니다.");

        user.update(SHA256Util.getEncrypt(userUpdateRequestDto.getPassword()),
                userUpdateRequestDto.getPosition(), userUpdateRequestDto.getSeason(),
                userUpdateRequestDto.getSection(), userUpdateRequestDto.getProfile_img());
        return email;
    }

    // 탈퇴(삭제)
    @Transactional
    public void delete(String email) {
        User user = userRepository.findByEmail(email);
        if (user == null)
            new IllegalArgumentException("해당 사용자가 없습니다.");

        userRepository.delete(user);
    }

    // 로그인
    @Transactional
    public UserJwtResponsetDto signIn(String email, String password) {
        User user = userRepository.findByEmail(email);
        if (user != null && user.getPassword().equals(password)) {
            return new UserJwtResponsetDto(user);
        } else {
            System.out.println("해당 사용자가 없거나,아이디/비밀번호가 일치하지 않습니다.");
            return null;
        }
    }
}