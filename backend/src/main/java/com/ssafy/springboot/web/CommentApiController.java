package com.ssafy.springboot.web;

import com.ssafy.springboot.service.CommentService;

import com.ssafy.springboot.web.dto.comment.CommentListResponseDto;
import com.ssafy.springboot.web.dto.comment.CommentSaveRequestDto;
import com.ssafy.springboot.web.dto.comment.CommentUpdateRequestDto;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@Api(tags = {"4. Comment"})
@RequestMapping("/api/comment")
@RequiredArgsConstructor
@RestController
public class CommentApiController {

    private final CommentService commentService;

    @ApiOperation(value = "해당 게시글의 모든 댓글 조회")
    @GetMapping("/list/{id}")
    public List<CommentListResponseDto> findAll(@PathVariable Long id) {
        return commentService.findAllDesc(id);
    }


    @ApiOperation(value = "댓글 작성")
    @PostMapping("")
    public ResponseEntity<?> save(@RequestBody CommentSaveRequestDto requestDto) {
        return commentService.save(requestDto);
    }

    @ApiOperation(value = "댓글 수정")
    @PutMapping("/{id}")
    public Long update(@PathVariable Long id, @RequestBody CommentUpdateRequestDto requestDto) {
        return commentService.update(id, requestDto);
    }

    @ApiOperation(value = "댓글 삭제")
    @DeleteMapping("/{id}")
    public Long delete(@PathVariable Long id) {
        commentService.delete(id);
        return id;

    }

}