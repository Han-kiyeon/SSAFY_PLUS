package com.ssafy.springboot.domain.comment;


import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import com.ssafy.springboot.domain.BaseTimeEntity;
import com.ssafy.springboot.domain.post.Posts;
import com.ssafy.springboot.domain.user.User;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import javax.persistence.*;

@Getter //클래스 내 모든 필드의 Getter 메소드를 자동생성
@NoArgsConstructor //기본 생성자 자동추가
@Entity //테이블과 링크될 클래스임을 나타냄(카멜케이스->언더스코어네이밍)
public class Comment extends BaseTimeEntity {

    @Id //해당 테이블의 PK 필드
    @GeneratedValue(strategy = GenerationType.IDENTITY) //PK 생성규칙: auto_increment
    private Long comment_id;

    @JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "email")
    @ManyToOne
    @OnDelete(action = OnDeleteAction.CASCADE)
    @JoinColumn(name = "user_id")
    private User user;

    @JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "post_id")
    @ManyToOne
    @OnDelete(action = OnDeleteAction.CASCADE)
    @JoinColumn(name = "post_id") // 게시글 번호
    private Posts post;

    @Column(columnDefinition = "TEXT", nullable = false) // 타입을 "TEXT"로 변경
    private String content;

    private Long like_cnt;


    @Builder //해당 클래스의 빌더 패턴 클래스를 생성
    public Comment(User user, Posts post, String content) {
        this.user = user;
        this.post = post;
        this.content = content;
        this.like_cnt = Long.valueOf(0);
    }

    public void update(String content) {
        this.content = content;
    }
}
