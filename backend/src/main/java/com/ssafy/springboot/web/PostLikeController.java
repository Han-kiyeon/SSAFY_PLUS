package com.ssafy.springboot.web;

import com.ssafy.springboot.service.PostLikeService;
import com.ssafy.springboot.web.dto.post.PostLikeUpdateRequestDto;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@Api(tags = {"5. PostLike"})
@RequestMapping("/api/postlike")
@RequiredArgsConstructor
@RestController
public class PostLikeController {

    private final PostLikeService postLikeService;


    @ApiOperation(value = "좋아요(on/off)", notes = "게시글의 좋아요 유무에 따라 다르게 동작할껄?")
    @PutMapping("")
    public ResponseEntity<?> update(@RequestBody PostLikeUpdateRequestDto requestDto) {
        System.out.println("UPDATE " + requestDto.getPost_id() + " " + requestDto.getUser_email());
        return postLikeService.update(requestDto);
    }
}
