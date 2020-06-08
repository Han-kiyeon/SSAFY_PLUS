package com.ssafy.springboot.service;

import com.ssafy.springboot.domain.episode.Episode;
import com.ssafy.springboot.domain.episode.EpisodeRepository;
import com.ssafy.springboot.domain.user.User;
import com.ssafy.springboot.domain.user.UserRepository;
import com.ssafy.springboot.web.dto.episode.EpisodeResponseDto;
import com.ssafy.springboot.web.dto.episode.EpisodeSaveRequestDto;
import com.ssafy.springboot.web.dto.episode.EpisodeUpdateRequestDto;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class EpisodeService {

    private final EpisodeRepository episodeRepository;
    private final UserRepository userRepository;

    //save
    @Transactional
    public ResponseEntity<?> save(EpisodeSaveRequestDto requestDto) {
        User user = userRepository.findByEmail(requestDto.getUser_email());
        if (user == null) return ResponseEntity.status(HttpStatus.FORBIDDEN)
                .body("UserInfo does not exist... email=" + requestDto.getUser_email());
        episodeRepository.save(requestDto.toEntity(user));
        return ResponseEntity.status(HttpStatus.OK).body("Success");
    }

    //update
    @Transactional
    public ResponseEntity<?> update(Long episode_id, EpisodeUpdateRequestDto requestDto) {
        Episode episode = episodeRepository.findById(episode_id)
                .orElseThrow(() -> new IllegalArgumentException("Post does not exist...  id=" + episode_id));
        episode.update(requestDto.getTitle(), requestDto.getStrength(), requestDto.getContent());

        return ResponseEntity.status(HttpStatus.OK).body("update episode_id=" + episode_id);
    }
    //delete

    @Transactional
    public ResponseEntity<?> delete(Long episode_id) {
        Episode episode = episodeRepository.findById(episode_id)
                .orElseThrow(() -> new IllegalArgumentException("Post does not exist...  id=" + episode_id));
        episodeRepository.delete(episode);

        return ResponseEntity.status(HttpStatus.OK).body("delete episode_id=" + episode_id);
    }

    //findByUser
    @Transactional
    public List<EpisodeResponseDto> findByUser(String email) {
        User user = userRepository.findByEmail(email);
        return episodeRepository.findByUser(user.getUser_id())
                .stream()
                .map(EpisodeResponseDto::new)
                .collect(Collectors.toList());

    }

}
