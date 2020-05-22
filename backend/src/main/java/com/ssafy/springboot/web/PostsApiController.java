package com.ssafy.springboot.web;

import com.ssafy.springboot.service.PostsService;

import com.ssafy.springboot.web.dto.post.PostsListResponseDto;
import com.ssafy.springboot.web.dto.post.PostsResponseDto;
import com.ssafy.springboot.web.dto.post.PostsSaveRequestDto;
import com.ssafy.springboot.web.dto.post.PostsUpdateRequestDto;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@Api(tags = {"3. Post"})
@RequestMapping("/api/post")
@RequiredArgsConstructor
@RestController
public class PostsApiController {

    private final PostsService postsService;


    @ApiOperation(value = "게시글 작성", notes = "게시글을 작성한다.")
    @PostMapping("")
    public ResponseEntity<?> save(@RequestBody PostsSaveRequestDto requestDto) {
        return postsService.save(requestDto);
    }

    @ApiOperation(value = "게시글 조회", notes = "해당 id의 게시글을 조회한다.")
    @GetMapping("/{id}")
    public PostsResponseDto findById(@PathVariable Long id) {
        return postsService.findById(id);
    }

    @ApiOperation(value = "게시글 수정", notes = "해당 id의 게시글을 수정한다.")
    @PutMapping("/{id}")
    public Long update(@PathVariable Long id, @RequestBody PostsUpdateRequestDto requestDto) {
        return postsService.update(id, requestDto);
    }

    @ApiOperation(value = "게시글 삭제", notes = "해당 id의 게시글을 삭제한다.")
    @DeleteMapping("/{id}")
    public Long delete(@PathVariable Long id) {
        postsService.delete(id);
        return id;
    }


    @ApiOperation(value = "모든 게시글 조회", notes = "모든 게시글을 조회한다(id 역순)")
    @GetMapping("/list")
    public List<PostsListResponseDto> findAll() {
        return postsService.findAllDesc();
    }
}