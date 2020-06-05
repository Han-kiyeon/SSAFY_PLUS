package com.ssafy.springboot.web;


import com.ssafy.springboot.service.EpisodeService;
import com.ssafy.springboot.web.dto.episode.EpisodeResponseDto;
import com.ssafy.springboot.web.dto.episode.EpisodeSaveRequestDto;
import com.ssafy.springboot.web.dto.episode.EpisodeUpdateRequestDto;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Api(tags = {"Episode"})
@RequestMapping("/api/episode")
@RequiredArgsConstructor
@RestController
public class EpisodeController {
    private final EpisodeService episodeService;

    @ApiOperation(value = "에피소드 생성")
    @PostMapping("")
    public ResponseEntity<?> save(@RequestBody EpisodeSaveRequestDto requestDto) {
        return episodeService.save(requestDto);
    }

    @ApiOperation(value = "에피소드 수정")
    @PutMapping("{episode_id}")
    public ResponseEntity<?> update(@PathVariable Long episode_id, @RequestBody EpisodeUpdateRequestDto requestDto) {
        return episodeService.update(episode_id, requestDto);
    }

    @ApiOperation(value = "에피소드 삭제")
    @DeleteMapping("{episode_id}")
    public void delete(@PathVariable Long episode_id) {
        episodeService.delete(episode_id);
    }


    @ApiOperation(value = "유저별 에피소드 목록")
    @GetMapping("/list/{email:.+}/")
    public List<EpisodeResponseDto> findByUser(@PathVariable String email) {
        return episodeService.findByUser(email);
    }

}
