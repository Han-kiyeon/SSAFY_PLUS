package com.ssafy.springboot.web.dto.BreakingError;

import com.ssafy.springboot.domain.BreakingError.Answers;
import lombok.Getter;

@Getter
public class AnswersListResponseDto {
    private Long answerId;
    private String userEmail;
    private Long errorId;
    private String title;
    private String content;
    private Long likeCnt;
    private Long answerCnt;

    public AnswersListResponseDto(Answers entity) {
        this.answerId = entity.getAnswerId();
        this.userEmail = entity.getUser().getEmail();
        this.errorId = entity.getError().getErrorId();
        this.title = entity.getTitle();
        this.content = entity.getContent();
        this.likeCnt = entity.getLikeCnt();
        this.answerCnt = entity.getAnswerCnt();
    }
}