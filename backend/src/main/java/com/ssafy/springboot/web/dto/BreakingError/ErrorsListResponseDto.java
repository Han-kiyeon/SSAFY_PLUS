package com.ssafy.springboot.web.dto.BreakingError;

import com.ssafy.springboot.domain.BreakingError.Errors;
import lombok.Getter;

import java.time.LocalDateTime;

@Getter
public class ErrorsListResponseDto {
    private Long errorId;
    private String userEmail;
    private String title;
    private String content;
    private Long likeCnt;
    private Long answerCnt;
    private LocalDateTime created_date;
    private LocalDateTime modified_date;

    public ErrorsListResponseDto(Errors entity) {
        this.errorId = entity.getError_id();
        this.userEmail = entity.getUser().getEmail();
        this.title = entity.getTitle();
        this.content = entity.getContent();
        this.likeCnt = entity.getLike_cnt();
        this.answerCnt = entity.getAnswer_cnt();
        this.created_date = entity.getCreatedDate();
        this.modified_date = entity.getModifiedDate();
    }
}