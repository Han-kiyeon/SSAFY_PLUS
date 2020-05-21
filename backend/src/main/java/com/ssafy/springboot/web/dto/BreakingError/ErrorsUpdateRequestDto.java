package com.ssafy.springboot.web.dto.BreakingError;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class ErrorsUpdateRequestDto {
    private String title;
    private String content;

    @Builder
    public ErrorsUpdateRequestDto(String title, String content) {
        this.title = title;
        this.content = content;
    }
}
