package com.ssafy.springboot.web;

import com.ssafy.springboot.service.ErrorsService;
import com.ssafy.springboot.web.dto.BreakingError.ErrorsResponseDto;
import com.ssafy.springboot.web.dto.BreakingError.ErrorsSaveRequestDto;
import com.ssafy.springboot.web.dto.BreakingError.ErrorsUpdateRequestDto;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RequestMapping("/api/breakingError/errors")
@RequiredArgsConstructor
@RestController
public class ErrorsApiController {
    private final ErrorsService errorsService;

    @PostMapping("")
    public Long save(@RequestBody ErrorsSaveRequestDto requestDto){

        return errorsService.save(requestDto);
    }

    @PutMapping("/{id}")
    public Long update(@PathVariable Long id, @RequestBody ErrorsUpdateRequestDto requestDto) {
        return errorsService.update(id, requestDto);
    }


    @GetMapping("/{id}")
    public ErrorsResponseDto findById(@PathVariable Long id) {

        return errorsService.findById(id);
    }

}
