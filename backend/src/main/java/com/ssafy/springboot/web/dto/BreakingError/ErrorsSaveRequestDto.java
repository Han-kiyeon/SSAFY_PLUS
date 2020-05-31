package com.ssafy.springboot.web.dto.BreakingError;

import com.ssafy.springboot.domain.BreakingError.Errors;
import com.ssafy.springboot.domain.user.User;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class ErrorsSaveRequestDto {
    private String title;
    private String content;
    private String user_email;

    @Builder
    public ErrorsSaveRequestDto(String title, String content, String user_email) {
        this.title = title;
        this.content = content;
        this.user_email = user_email;
    }

    public Errors toEntity(User user) {
        return Errors.builder()
                .title(title)
                .content(content)
                .user(user)
                .build();
    }
}
