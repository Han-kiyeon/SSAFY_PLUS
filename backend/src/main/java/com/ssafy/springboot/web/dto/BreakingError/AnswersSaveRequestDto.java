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
    private Long error_id;
    private Long parent;
    private String title;
    private String content;
    private String user_email;


    @Builder
    public AnswersSaveRequestDto(Long errorId, Long parent, String title, String content, String userEmail) {
        this.error_id = errorId;
        this.title = title;
        this.content = content;
        this.user_email = userEmail;
        this.parent = parent;
    }

    public Answers toEntity(User user, Errors error) {
        return Answers.builder()
                .error(error)
                .parent(parent)
                .title(title)
                .content(content)
                .user(user)
                .build();
    }
}
