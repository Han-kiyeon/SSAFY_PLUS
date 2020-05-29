package com.ssafy.springboot.web.dto.BreakingError;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class ErrorLikeUpdateRequestDto {

    private String userEmail;
    private Long errorId;

    @Builder
    public ErrorLikeUpdateRequestDto(String userEmail, Long errorId) {
        this.userEmail = userEmail;
        this.errorId = errorId;
    }
}
