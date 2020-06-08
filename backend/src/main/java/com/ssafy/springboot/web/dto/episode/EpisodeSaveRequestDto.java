package com.ssafy.springboot.web.dto.episode;

import com.ssafy.springboot.domain.episode.Episode;
import com.ssafy.springboot.domain.user.User;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.List;

@Getter
@NoArgsConstructor
public class EpisodeSaveRequestDto {

    private String user_email;
    private String title;
    private List<String> strength;
    private String content;

    @Builder
    public EpisodeSaveRequestDto(String user_email, String title, List<String> strength, String content) {
        this.user_email = user_email;
        this.title = title;
        this.strength = strength;
        this.content = content;
    }

    public Episode toEntity(User user) {
        return Episode.builder()
                .user(user)
                .title(title)
                .strength(strength)
                .content(content)
                .build();
    }

}
