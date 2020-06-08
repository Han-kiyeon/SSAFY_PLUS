package com.ssafy.springboot.web.dto.episode;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.List;

@Getter
@NoArgsConstructor
public class EpisodeUpdateRequestDto {

    private String title;
    private List<String> strength;
    private String content;

    @Builder
    public EpisodeUpdateRequestDto(String title, List<String> strength, String content) {
        this.title = title;
        this.strength = strength;
        this.content = content;
    }

}
