package com.ssafy.springboot.web.dto.BreakingError;

import com.ssafy.springboot.domain.BreakingError.AnswerLike;
import com.ssafy.springboot.domain.BreakingError.Answers;
import com.ssafy.springboot.domain.BreakingError.ErrorLike;
import com.ssafy.springboot.domain.BreakingError.Errors;
import com.ssafy.springboot.domain.user.User;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class AnswerLikeSaveRequestDto {

    private String userEmail;
    private Long answerId;

    @Builder
    public AnswerLikeSaveRequestDto(String userEmail, Long answerId) {
        this.userEmail = userEmail;
        this.answerId = answerId;
    }


    public AnswerLike toEntity(User user, Answers answer) {
        return AnswerLike.builder()
                .user(user)
                .answer(answer)
                .build();
    }
}
