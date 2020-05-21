package com.ssafy.springboot.web.dto.BreakingError;

import com.ssafy.springboot.domain.BreakingError.Answers;
import lombok.Getter;

@Getter
public class AnswersResponseDto {

    private Long id;
    private String title;
    private String content;
    private String author;

    public AnswersResponseDto(Answers entity) {
        this.id = entity.getAnswerId();
        this.title = entity.getTitle();
        this.content = entity.getContent();
        this.author = entity.getAuthor();
    }
}
