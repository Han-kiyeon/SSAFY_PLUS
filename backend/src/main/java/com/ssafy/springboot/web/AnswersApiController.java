package com.ssafy.springboot.web;

import com.ssafy.springboot.service.AnswersService;
import com.ssafy.springboot.web.dto.BreakingError.AnswersResponseDto;
import com.ssafy.springboot.web.dto.BreakingError.AnswersSaveRequestDto;
import com.ssafy.springboot.web.dto.BreakingError.AnswersUpdateRequestDto;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RequiredArgsConstructor
@RestController
public class AnswersApiController {
    private final AnswersService answersService;

    //@ApiOperation(value="게시글 작성", notes="게시글을 작성한다.")
    @PostMapping("/api/breakingError/answers")
    public Long save(@RequestBody AnswersSaveRequestDto requestDto) {

        return answersService.save(requestDto);
    }


    //@ApiOperation(value="게시글 수정", notes="해당 id의 게시글을 수정한다.")
    @PutMapping("/api/breakingError/answers/{id}")
    public Long update(@PathVariable Long id, @RequestBody AnswersUpdateRequestDto requestDto) {
        return answersService.update(id, requestDto);
    }

    //@ApiOperation(value="게시글 조회", notes="해당 id의 게시글을 조회한다.")
    @GetMapping("/api/breakingError/answers/{id}")
    public AnswersResponseDto findById(@PathVariable Long id) {
        return answersService.findById(id);
    }
}
