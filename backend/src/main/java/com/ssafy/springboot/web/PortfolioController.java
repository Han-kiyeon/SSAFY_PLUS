package com.ssafy.springboot.web;

import com.ssafy.springboot.service.ProtfolioService;
import com.ssafy.springboot.web.dto.portfolio.ProjectSaveRequestDto;
import io.swagger.annotations.Api;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@Api(tags = {"Portfolio"})
@RequestMapping("/api/portfolio")
@RequiredArgsConstructor
@RestController
public class PortfolioController {

    private final ProtfolioService protfolioService;

    @PostMapping("/project") // 게시글 업로드
    public ResponseEntity<?> save(@RequestBody ProjectSaveRequestDto requestDto) {
        return protfolioService.save(requestDto);
    }


//    @GetMapping("/project/list")
//    public List<BoardListResponseDto> list() {
//        return boardService.selectAll();
//    }
//
//    @PutMapping("/project/{project_id}") // 게시글 수정
//    public void update(@PathVariable Long project_id, @RequestBody BoardUpdateRequestDto requestDto) {
//        boardService.update(project_id, requestDto);
//    }
//
//    @DeleteMapping("/project/{project_id}")
//    public void delete(@PathVariable Long project_id) {
//        boardService.delete(project_id);
//    }

}