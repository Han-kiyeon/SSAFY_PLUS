package com.ssafy.springboot.web.dto.BreakingError;

import com.ssafy.springboot.domain.BreakingError.Answers;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class AnswersSaveRequestDto {
    private String title;
    private String content;
    private String author;

    @Builder
    public AnswersSaveRequestDto(String title, String content, String author) {
        this.title = title;
        this.content = content;
        this.author = author;
    }

    public Answers toEntity() {
        return Answers.builder()
                .title(title)
                .content(content)
                .author(author)
                .build();
    }
}
