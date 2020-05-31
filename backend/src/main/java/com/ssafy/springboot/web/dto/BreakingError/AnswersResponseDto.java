package com.ssafy.springboot.web.dto.BreakingError;

import com.ssafy.springboot.domain.BreakingError.Answers;
import lombok.Getter;

@Getter
public class AnswersResponseDto {

    private Long answerId;
    private String title;
    private String content;
    private String userEmail;
    private Long errorId;
    private Long parent;
    private Long likeCnt;
    private Long answerCnt;

    public AnswersResponseDto(Answers entity) {
        this.answerId = entity.getAnswer_id();
        this.title = entity.getTitle();
        this.content = entity.getContent();
        this.userEmail = entity.getUser().getEmail();
        this.errorId = entity.getError().getError_id();
        this.likeCnt = entity.getLike_cnt();
        this.answerCnt = entity.getAnswer_cnt();
        this.parent = entity.getParent();
    }
}
