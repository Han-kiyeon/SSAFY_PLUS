package com.ssafy.springboot.web.dto.BreakingError;

import com.ssafy.springboot.domain.BreakingError.Answers;
import com.ssafy.springboot.domain.BreakingError.Errors;
import com.ssafy.springboot.domain.user.User;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class AnswersSaveRequestDto {
    private Long errorId;
    private String title;
    private String content;
    private String userEmail;


    @Builder
    public AnswersSaveRequestDto(Long errorId,String title, String content, String userEmail) {
        this.errorId = errorId;
        this.title = title;
        this.content = content;
        this.userEmail = userEmail;
    }

    public Answers toEntity(User user, Errors error) {
        return Answers.builder()
                .error(error)
                .title(title)
                .content(content)
                .user(user)
                .build();
    }
}
