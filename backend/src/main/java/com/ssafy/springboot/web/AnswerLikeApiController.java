package com.ssafy.springboot.web;

import com.ssafy.springboot.service.AnswerLikeService;
import com.ssafy.springboot.service.ErrorLikeService;
import com.ssafy.springboot.web.dto.BreakingError.AnswerLikeCheckRequestDto;
import com.ssafy.springboot.web.dto.BreakingError.AnswerLikeUpdateRequestDto;
import com.ssafy.springboot.web.dto.BreakingError.ErrorLikeUpdateRequestDto;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@Api(tags = {"8. AnswerLike"})
@RequestMapping("/api/answerlike")
@RequiredArgsConstructor
@RestController
public class AnswerLikeApiController {

    private final AnswerLikeService answerLikeService;


    @ApiOperation(value = "좋아요(on/off)", notes = "질문의 좋아요 유무에 따라 다르게 동작")
    @PutMapping("")
    public ResponseEntity<?> update(@RequestBody AnswerLikeUpdateRequestDto requestDto) {
        System.out.println("UPDATE " + requestDto.getAnswer_id() + " " + requestDto.getUser_email());
        return answerLikeService.update(requestDto);
    }

    @ApiOperation(value = "좋아요 회원 확인", notes = "질문의 좋아요를 누른 유저인지 확인")
    @PostMapping("/likeCheck")
    public boolean likeCheck(@RequestBody AnswerLikeCheckRequestDto requestDto) {

        return answerLikeService.likeCheck(requestDto);
    }
}
