package com.ssafy.springboot.service;

import com.ssafy.springboot.domain.post.PostLike;
import com.ssafy.springboot.domain.post.PostLikeRepository;
import com.ssafy.springboot.domain.post.Posts;
import com.ssafy.springboot.domain.post.PostsRepository;
import com.ssafy.springboot.domain.user.User;
import com.ssafy.springboot.domain.user.UserRepository;
import com.ssafy.springboot.web.dto.post.PostLikeSaveRequestDto;
import com.ssafy.springboot.web.dto.post.PostLikeUpdateRequestDto;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


@RequiredArgsConstructor
@Service
public class PostLikeService {

    private final PostLikeRepository postLikeRepository;
    private final UserRepository userRepository;
    private final PostsRepository postsRepository;

    //야 내가 니 서비스 로직 전체를 모르니까 감 안잡혀 ㅋ
    //그냥 게시글 좋아요 기능 만든다고 생각하면 될꺼같은데
    //입력으로 게시글 번호랑, 사용자이메일을 받은거야
    @Transactional
    public ResponseEntity<?> update(PostLikeUpdateRequestDto requestDto) {

        //게시글 있나 확인
        Posts post = postsRepository.findById(requestDto.getPost_id())
                .orElseThrow(() -> new IllegalArgumentException("해당 게시글이 없습니다. id=" + requestDto.getPost_id()));
        //유저 있나 확인
        User user = userRepository.findByEmail(requestDto.getUser_email());
        System.out.println(post.getPost_id() + " " + user.getUser_id());

        if (user == null) return ResponseEntity.status(HttpStatus.FORBIDDEN).body("아이디 없음?!");

        PostLike postLike = postLikeRepository.findByPostIDAndUserID(post.getPost_id(), user.getUser_id());
        if (postLike == null) {
            System.out.println("없어 색꺙");
            //안눌렀으면 디비에 저장....
            PostLikeSaveRequestDto dto = new PostLikeSaveRequestDto(user.getEmail(), post.getPost_id());
            postLikeRepository.save(dto.toEntity(user, post));
            postsRepository.likeCntUp(post.getPost_id());
            return ResponseEntity.status(HttpStatus.OK).body("like");
        } else {
            System.out.println("있어용 ㅋ");
            //눌럿으면 디비에서 삭제...
            postLikeRepository.delete(postLike);
            postsRepository.likeCntDown(post.getPost_id());
            return ResponseEntity.status(HttpStatus.OK).body("unlike");
        }
    }
}
