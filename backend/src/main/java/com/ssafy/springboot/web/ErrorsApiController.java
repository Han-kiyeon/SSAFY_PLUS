package com.ssafy.springboot.web;

import com.ssafy.springboot.service.ErrorsService;
import com.ssafy.springboot.web.dto.BreakingError.ErrorsListResponseDto;
import com.ssafy.springboot.web.dto.BreakingError.ErrorsResponseDto;
import com.ssafy.springboot.web.dto.BreakingError.ErrorsSaveRequestDto;
import com.ssafy.springboot.web.dto.BreakingError.ErrorsUpdateRequestDto;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Api(tags = {"4. Error"})
@RequestMapping("/api/breakingError/errors")
@RequiredArgsConstructor
@RestController
public class ErrorsApiController {
    private final ErrorsService errorsService;

    @ApiOperation(value = "질문 작성", notes = "질문을 작성한다.")
    @PostMapping("")
    public ResponseEntity<?> save(@RequestBody ErrorsSaveRequestDto requestDto){

        return errorsService.save(requestDto);
    }

    @ApiOperation(value = "질문 수정", notes = "해당 id의 질문을 수정한다.")
    @PutMapping("/{id}")
    public Long update(@PathVariable Long id, @RequestBody ErrorsUpdateRequestDto requestDto) {
        return errorsService.update(id, requestDto);
    }


    @ApiOperation(value = "질문 조회", notes = "해당 id의 질문을 조회한다.")
    @GetMapping("/{id}")
    public ErrorsResponseDto findById(@PathVariable Long id) {

        return errorsService.findById(id);
    }

    @ApiOperation(value = "질문 삭제", notes = "해당 id의 질문을 삭제한다.")
    @DeleteMapping("/{id}")
    public Long delete(@PathVariable Long id) {
        errorsService.delete(id);
        return id;
    }

    @ApiOperation(value = "모든 질문 조회", notes = "모든 질문을 조회한다(id 역순)")
    @GetMapping("/list")
    public List<ErrorsListResponseDto> findAll() {
        return errorsService.findAllDesc();
    }

}
