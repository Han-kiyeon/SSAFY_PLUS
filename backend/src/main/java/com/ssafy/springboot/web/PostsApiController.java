package com.ssafy.springboot.web;

import com.ssafy.springboot.service.PostsService;

import com.ssafy.springboot.web.dto.PostsListResponseDto;
import com.ssafy.springboot.web.dto.PostsResponseDto;
import com.ssafy.springboot.web.dto.PostsSaveRequestDto;
import com.ssafy.springboot.web.dto.PostsUpdateRequestDto;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;

import org.springframework.web.bind.annotation.*;

import java.util.List;


@Api(tags = {"1. Post"})
@RequiredArgsConstructor
@RestController
public class PostsApiController {

    private final PostsService postsService;

    @ApiOperation(value="게시글 작성", notes="게시글을 작성한다.")
    @PostMapping("/api/v1/posts")
    public Long save(@RequestBody PostsSaveRequestDto requestDto) {
        return postsService.save(requestDto);
    }

    @ApiOperation(value="게시글 수정", notes="해당 id의 게시글을 수정한다.")
    @PutMapping("/api/v1/posts/{id}")
    public Long update(@PathVariable Long id, @RequestBody PostsUpdateRequestDto requestDto) {
        return postsService.update(id, requestDto);
    }

    @ApiOperation(value="게시글 삭제", notes="해당 id의 게시글을 삭제한다.")
    @DeleteMapping("/api/v1/posts/{id}")
    public Long delete(@PathVariable Long id) {
        postsService.delete(id);
        return id;
    }

    @ApiOperation(value="게시글 조회", notes="해당 id의 게시글을 조회한다.")
    @GetMapping("/api/v1/posts/{id}")
    public PostsResponseDto findById(@PathVariable Long id) {
        return postsService.findById(id);
    }

    @ApiOperation(value="모든 게시글 조회", notes="모든 게시글을 조회한다(id 역순)")
    @GetMapping("/api/v1/posts/list")
    public List<PostsListResponseDto> findAll() {
        return postsService.findAllDesc();
    }
}