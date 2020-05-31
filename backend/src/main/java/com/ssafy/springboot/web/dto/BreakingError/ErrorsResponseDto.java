package com.ssafy.springboot.web.dto.BreakingError;

import com.ssafy.springboot.domain.BreakingError.Errors;
import lombok.Getter;

@Getter
public class ErrorsResponseDto {
    private Long errorId;
    private String title;
    private String content;
    private String userEmail;
    private Long likeCnt;
    private Long answerCnt;

    public ErrorsResponseDto(Errors entity) {
        this.errorId = entity.getError_id();
        this.title = entity.getTitle();
        this.content = entity.getContent();
        this.userEmail = entity.getUser().getEmail();
        this.likeCnt = entity.getLike_cnt();
        this.answerCnt = entity.getAnswer_cnt();
    }
}
