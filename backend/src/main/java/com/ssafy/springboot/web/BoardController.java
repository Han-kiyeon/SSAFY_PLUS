package com.ssafy.springboot.web;

import com.ssafy.springboot.service.BoardService;
import com.ssafy.springboot.web.dto.board.BoardListResponseDto;
import com.ssafy.springboot.web.dto.board.BoardSaveRequestDto;
import com.ssafy.springboot.web.dto.board.BoardUpdateRequestDto;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Api(tags = {"2. Board"})
@RequestMapping("/api/board")
@RequiredArgsConstructor
@RestController
public class BoardController {

    private final BoardService boardService;

    @ApiOperation(value = "게시판 생성")
    @PostMapping("") // 게시글 업로드
    public ResponseEntity<?> save(@RequestBody BoardSaveRequestDto requestDto) {
        return boardService.save(requestDto);
    }


    @ApiOperation(value = "게시판 리스트", notes = "생성된 게시판의 리스트를 가져오기")
    @GetMapping("/list")
    public List<BoardListResponseDto> list() {
        return boardService.selectAll();
    }

    @ApiOperation(value = "게시판 수정")
    @PutMapping("{board_id}") // 게시글 수정
    public void update(@PathVariable Long bid, @RequestBody BoardUpdateRequestDto requestDto) {
        boardService.update(bid, requestDto);
    }

    @ApiOperation(value = "게시판 삭제")
    @DeleteMapping("{board_id}")
    public void delete(@PathVariable Long bid) {
        boardService.delete(bid);
    }

}