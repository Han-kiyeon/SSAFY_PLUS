package com.ssafy.springboot.web;

import com.ssafy.springboot.service.AnswersService;
import com.ssafy.springboot.web.dto.BreakingError.AnswersListResponseDto;
import com.ssafy.springboot.web.dto.BreakingError.AnswersResponseDto;
import com.ssafy.springboot.web.dto.BreakingError.AnswersSaveRequestDto;
import com.ssafy.springboot.web.dto.BreakingError.AnswersUpdateRequestDto;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Api(tags = {"5. Answer"})
@RequestMapping("/api/breakingError/answers")
@RequiredArgsConstructor
@RestController
public class AnswersApiController {
    private final AnswersService answersService;

    @ApiOperation(value="답변 작성", notes="답변을 작성한다.")
    @PostMapping("")
    public ResponseEntity<?> save(@RequestBody AnswersSaveRequestDto requestDto) {

        return answersService.save(requestDto);
    }


    @ApiOperation(value="답변 수정", notes="해당 id의 답변을 수정한다.")
    @PutMapping("/{id}")
    public Long update(@PathVariable Long id, @RequestBody AnswersUpdateRequestDto requestDto) {
        return answersService.update(id, requestDto);
    }

    @ApiOperation(value="답변 조회", notes="해당 id의 답변을 조회한다.")
    @GetMapping("/{id}")
    public AnswersResponseDto findById(@PathVariable Long id) {
        return answersService.findById(id);
    }


    @ApiOperation(value = "답변 삭제", notes = "해당 id의 답변을 삭제한다.")
    @DeleteMapping("/{id}")
    public Long delete(@PathVariable Long id) {
        answersService.delete(id);
        return id;
    }


    @ApiOperation(value = "모든 답변 조회", notes = "모든 답변을 조회한다(id 역순)")
    @GetMapping("/list")
    public List<AnswersListResponseDto> findAll(@PathVariable Long id) {
        return answersService.findAllDesc(id);
    }


}
