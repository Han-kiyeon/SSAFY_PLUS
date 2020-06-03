package com.ssafy.springboot.service;

import java.io.StringWriter;
import java.util.StringTokenizer;

public class SearchService {
    //검색기능 담당 class
    public String translate(String s){
        StringTokenizer st = new StringTokenizer(s);
        StringWriter sw = new StringWriter();
        sw.append("%");
        while(st.hasMoreTokens()){
            sw.append(st.nextToken()).append("%");
        }
        return sw.toString();
    }

}
