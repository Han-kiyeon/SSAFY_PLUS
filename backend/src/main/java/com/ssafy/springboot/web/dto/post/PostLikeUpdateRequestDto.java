package com.ssafy.springboot.web.dto.post;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class PostLikeUpdateRequestDto {

    private String user_email;
    private Long post_id;

    @Builder
    public PostLikeUpdateRequestDto(String user_email, Long post_id) {
        this.user_email = user_email;
        this.post_id = post_id;
    }
}
