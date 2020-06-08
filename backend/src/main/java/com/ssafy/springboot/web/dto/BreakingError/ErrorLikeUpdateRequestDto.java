package com.ssafy.springboot.web.dto.BreakingError;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class ErrorLikeUpdateRequestDto {

    private String user_email;
    private Long error_id;

    @Builder
    public ErrorLikeUpdateRequestDto(String userEmail, Long errorId) {
        this.user_email = userEmail;
        this.error_id = errorId;
    }
}
