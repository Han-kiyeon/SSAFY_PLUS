package com.ssafy.springboot.service;

import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;

// User 테이블 pass 칼럼 암호화를 위한 클래스
public class SHA256Util {
    public static String getEncrypt(String str) {
        String sha = "";
        try {
            MessageDigest sh = MessageDigest.getInstance("SHA-256");
            sh.update(str.getBytes());
            byte byteData[] = sh.digest();
            StringBuffer sb = new StringBuffer();
            for (int i = 0; i < byteData.length; i++)
                sb.append(Integer.toString((byteData[i] & 0xff) + 0x100, 16).substring(1));
            sha = sb.toString();
        } catch (NoSuchAlgorithmException e) {
            sha = null;
        }
        return sha;
    }
}