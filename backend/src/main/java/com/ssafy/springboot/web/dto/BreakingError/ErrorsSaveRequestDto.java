package com.ssafy.springboot.web.dto.BreakingError;

import com.ssafy.springboot.domain.BreakingError.Errors;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class ErrorsSaveRequestDto {
    private String title;
    private String content;
    private String author;

    @Builder
    public ErrorsSaveRequestDto(String title, String content, String author) {
        this.title = title;
        this.content = content;
        this.author = author;
    }

    public Errors toEntity() {
        return Errors.builder()
                .title(title)
                .content(content)
                .author(author)
                .build();
    }
}
