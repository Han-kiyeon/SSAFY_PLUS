package com.ssafy.springboot.service;

public class SearchService {
    //검색기능 담당 class
    static int[] makeTable(char[] p) {
        int psize = p.length;
        int[] table = new int[psize];
        int j = 0;
        for (int i = 1; i < psize; i++) {
            while (j > 0 && p[i] != p[j]) {
                j = table[j - 1];
            }
            if (p[i] == p[j]) {
                table[i] = ++j;
            }
        }
        return table;
    }

    static void kmp(char[] parent, char[] pattern) {
        int[] table = makeTable(pattern);
        int parentSize = parent.length;
        int patternSize = pattern.length;
        int j = 0;
        for (int i = 0; i < parentSize; i++) {
            while (j > 0 && parent[i] != pattern[j]) {
                j = table[j - 1];
            }
            if (parent[i] == pattern[j]) {
                if (j == patternSize - 1) {
                    System.out.printf("%d. \n", i - patternSize + 1);
                    j = table[j];
                } else {
                    j++;
                }
            }
        }
    }

//    static long search(String target, String pattern){
//
//
//        return  (long)(kmp(target.trim().toCharArray(), pattern.trim().toCharArray()));
//    }

}
