package com.ssafy.springboot.service.jwt;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class CookieManage {

    public void CookieDelete(HttpServletRequest request, HttpServletResponse response){
        Cookie cookie = request.getCookies()[0];
        cookie.setValue(null);
        cookie.setPath("/"); // <- 여기 잘 모르겠음
        cookie.setMaxAge(0);//나이 0살 - 죽은거야
        response.addCookie(cookie);
        System.out.println("쿠키 값 :"+cookie);
        System.out.println("로그아웃 되었습니다.");
        System.out.println("현재 쿠키수 :" + request.getCookies().length);
        System.out.println("현재 쿠키 :" + request.getCookies()[0].getValue());
    }

    public void CookieMake(HttpServletRequest request, HttpServletResponse response,String token){
        Cookie cookie = new Cookie("userCookie", token);
        cookie.setPath("/"); // <- 여기 잘 모르겠음
        cookie.setMaxAge(Integer.MAX_VALUE);
        response.addCookie(cookie);
        System.out.println("발행된 토큰 : " + cookie.getValue());
//        System.out.println("지금 쿠키수 : "+request.getCookies().length);
    }
}
