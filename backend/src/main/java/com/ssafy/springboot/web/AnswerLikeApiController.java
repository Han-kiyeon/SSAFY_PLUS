package com.ssafy.springboot.web;

import com.ssafy.springboot.service.AnswerLikeService;
import com.ssafy.springboot.service.ErrorLikeService;
import com.ssafy.springboot.web.dto.BreakingError.AnswerLikeUpdateRequestDto;
import com.ssafy.springboot.web.dto.BreakingError.ErrorLikeUpdateRequestDto;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Api(tags = {"8. AnswerLike"})
@RequestMapping("/api/answerlike")
@RequiredArgsConstructor
@RestController
public class AnswerLikeApiController {

    private final AnswerLikeService answerLikeService;


    @ApiOperation(value = "좋아요(on/off)", notes = "질문의 좋아요 유무에 따라 다르게 동작")
    @PutMapping("")
    public ResponseEntity<?> update(@RequestBody AnswerLikeUpdateRequestDto requestDto) {
        System.out.println("UPDATE " + requestDto.getAnswerId() + " " + requestDto.getUserEmail());
        return answerLikeService.update(requestDto);
    }
}
