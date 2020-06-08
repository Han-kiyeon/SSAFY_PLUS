package com.ssafy.springboot.web.dto.BreakingError;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class AnswerLikeCheckRequestDto {

    private String user_email;
    private Long answer_id;

    @Builder
    public AnswerLikeCheckRequestDto(String userEmail, Long answerId) {
        this.user_email = userEmail;
        this.answer_id = answerId;
    }

}
