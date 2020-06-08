package com.ssafy.springboot.web.dto.BreakingError;

import com.ssafy.springboot.domain.BreakingError.ErrorLike;
import com.ssafy.springboot.domain.BreakingError.Errors;
import com.ssafy.springboot.domain.user.User;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class ErrorLikeSaveRequestDto {

    private String user_email;
    private Long error_id;

    @Builder
    public ErrorLikeSaveRequestDto(String userEmail, Long errorId) {
        this.user_email = userEmail;
        this.error_id = errorId;
    }


    public ErrorLike toEntity(User user, Errors error) {
        return ErrorLike.builder()
                .user(user)
                .error(error)
                .build();
    }
}
