package com.ssafy.springboot.web.dto.BreakingError;

import com.ssafy.springboot.domain.BreakingError.Errors;
import lombok.Getter;

@Getter
public class ErrorsResponseDto {
    private Long id;
    private String title;
    private String content;
    private String author;

    public ErrorsResponseDto(Errors entity) {
        this.id = entity.getErrorId();
        this.title = entity.getTitle();
        this.content = entity.getContent();
        this.author = entity.getAuthor();
    }
}
