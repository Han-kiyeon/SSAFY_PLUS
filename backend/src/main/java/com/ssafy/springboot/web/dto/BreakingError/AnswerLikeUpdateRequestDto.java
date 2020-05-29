package com.ssafy.springboot.web.dto.BreakingError;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class AnswerLikeUpdateRequestDto {

    private String userEmail;
    private Long answerId;

    @Builder
    public AnswerLikeUpdateRequestDto(String userEmail, Long answerId) {
        this.userEmail = userEmail;
        this.answerId = answerId;
    }
}
