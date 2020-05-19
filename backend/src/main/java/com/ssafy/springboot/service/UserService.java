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
    public String getUserInfo(String access_token) {
        String header = "Bearer " + access_token;
        try {
            String apiURL = "https://openapi.naver.com/v1/nid/me";
            URL url = new URL(apiURL);
            HttpURLConnection con = (HttpURLConnection) url.openConnection();
            con.setRequestMethod("GET");
            con.setRequestProperty("Authorization", header);
            int responseCode = con.getResponseCode();
            BufferedReader br;
            if (responseCode == 200) { // 정상 호출
                br = new BufferedReader(new InputStreamReader(con.getInputStream()));
            } else {
                br = new BufferedReader(new InputStreamReader(con.getErrorStream()));
            }
            String inputLine;
            StringBuffer res = new StringBuffer();
            while ((inputLine = br.readLine()) != null) {
                res.append(inputLine);
            }
            br.close();
            return res.toString();
        } catch (Exception e) {
            System.err.println(e);
            return "Err";
        }
    }


    @Transactional
    public List<User> selectAll() {
        return userRepository.findAll();
    }


    //이메일로 엔티티 가져오기
    @Transactional
    public User findByEmail(String email) {
        return userRepository.findByEmail(email).get(0);
    }


    // 회원 가입
    @Transactional
    public boolean signUp(UserSaveRequestDto userSaveRequestDto) {
        System.out.println(userSaveRequestDto);
        // insert 전에 테이블을 검색해서 중복된 이메일이 있는지 확인한다.

        //우리 회원가입 로직은 이메일로만 중복검사를 실행합니다.!!!
        if (checkEmail(userSaveRequestDto.getUemail())) //이미 이메일이 있으면
            return false;

        // 회원가입완료하면 이메일로 ghld 보내준다.
        // 2번일 경우 테이블에 승인 상태 추가해야 됨
        MailService mailService = new MailService();
        mailService.setJavaMailSender(javaMailSender);
        mailService.sendSimpleMessage(userSaveRequestDto.getUemail(), "[PlusSafy] 회원가입 완료", "ㅎㅇㅎㅇ");

        userRepository.save(userSaveRequestDto.toEntity()).getUid();
        return true;
    }


    // 회원가입시 이메일 중복 확인
    @Transactional
    public boolean checkEmail(String uemail) {
        List<User> user = userRepository.findByEmail(uemail);
        if (user.size() > 0) return true; //있으면 1
        else return false; //없으면 0
    }

    // 아이디 중복 확인 (있으면 true, 없으면 false)
    @Transactional
    public boolean checkId(String uid) {
        List<User> user = userRepository.checkByUid(uid);
        if (user.size() > 0) return true;
        else return false;
    }


    // 비밀번호 찾기
    @Transactional
    public String findPass(String uid, String uemail) {
        if (!checkId(uid)) return "존재하지 않는 ID 입니다.";
        User user = userRepository.findByuid(uid);
        if (user.getUemail().equals(uemail)) {
            // 비밀번호 생성
            String new_pass = generatePass(10);
            // 이메일로 비밀번호 쏴주고!!
            MailService mailService = new MailService();
            mailService.setJavaMailSender(javaMailSender);
            mailService.sendSimpleMessage(uemail, "[PlusSafy] 비밀번호 재설정", "비밀번호: " + new_pass);
            // 테이블에 있는 회원 비밀번호 그걸로 수정!!!!! -> 암호화
            userRepository.updatePass(uid, SHA256Util.getEncrypt(new_pass));
        } else {
            new IllegalArgumentException("존재하지 않는 이메일입니다.");
        }

        return user.getUemail();
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
    public User findByuid(String uid) {
        return userRepository.findByuid(uid);
    }


    // 회원 정보 수정
    @Transactional
    public String update(String uid, UserUpdateRequestDto userUpdateRequestDto) {
        User user = userRepository.findByuid(uid);
        if (user == null)
            new IllegalArgumentException("해당 사용자가 없습니다.");

        user.update(SHA256Util.getEncrypt(userUpdateRequestDto.getUpass()), userUpdateRequestDto.getUnickname(), userUpdateRequestDto.getUpic());
        return uid;
    }

    // 탈퇴(삭제)
    @Transactional
    public void delete(String uid) {
        User user = userRepository.findByuid(uid);
        if (user == null)
            new IllegalArgumentException("해당 사용자가 없습니다.");

        userRepository.delete(user);
    }

    // 로그인
    @Transactional
    public UserJwtResponsetDto signIn(String uid, String upass) {
        User user = userRepository.findByuid(uid);
        if (user == null) {
            System.out.println("해당 사용자가 없습니다.");
            new IllegalArgumentException("해당 사용자가 없습니다.");
        }


        if (user.getUpass().equals(upass)) {
            return new UserJwtResponsetDto(user);
        } else {
            System.out.println("아이디/비밀번호가 일치하지 않습니다.");
            new IllegalArgumentException("아이디/비밀번호가 일치하지 않습니다.");
            return null;
        }
    }
}