package com.ssafy.springboot.web.dto.episode;

import com.ssafy.springboot.domain.episode.Episode;
import com.ssafy.springboot.domain.portfolio.project.Project;
import lombok.Getter;

import java.time.LocalDateTime;
import java.util.List;


@Getter
public class EpisodeResponseDto {

    private Long episode_id;
    private String title;
    private List<String> strength;
    private String content;

    private LocalDateTime created_date;
    private LocalDateTime modified_date;

    public EpisodeResponseDto(Episode entity) {
        this.episode_id = entity.getEpisode_id();
        this.title = entity.getTitle();
        this.strength = entity.getStrength();
        this.content = entity.getContent();
        this.created_date = entity.getCreatedDate();
        this.modified_date = entity.getModifiedDate();
    }
}