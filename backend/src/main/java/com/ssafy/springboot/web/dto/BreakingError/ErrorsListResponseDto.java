package com.ssafy.springboot.web.dto.BreakingError;

import com.ssafy.springboot.domain.BreakingError.Errors;
import lombok.Getter;

@Getter
public class ErrorsListResponseDto {
    private Long errorId;
    private String userEmail;
    private String title;
    private String content;
    private Long likeCnt;
    private Long answerCnt;

    public ErrorsListResponseDto(Errors entity) {
        this.errorId = entity.getErrorId();
        this.userEmail = entity.getUser().getEmail();
        this.title = entity.getTitle();
        this.content = entity.getContent();
        this.likeCnt = entity.getLikeCnt();
        this.answerCnt = entity.getAnswerCnt();
    }
}