package com.ssafy.springboot.domain.post;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import com.ssafy.springboot.domain.BaseTimeEntity;
import com.ssafy.springboot.domain.board.Board;
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
public class Posts extends BaseTimeEntity {

    @Id //해당 테이블의 PK 필드
    @GeneratedValue(strategy = GenerationType.IDENTITY) //PK 생성규칙: auto_increment
    private Long id;

    @JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "email")
    @ManyToOne
    @OnDelete(action = OnDeleteAction.CASCADE)
    @JoinColumn(name = "user_id")
    private User user;

    @JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "board_id")
    @ManyToOne
    @OnDelete(action = OnDeleteAction.CASCADE)
    @JoinColumn(name = "board_id") // 게시글 번호
    private Board board;

    //테이블의 컬럼을 나타냄 기본값 이외의 추가로 변경이 필요한 옵션이 있을때 사용
    @Column(length = 500, nullable = false) //VARCHAR(255)가 기본 -> size를 500으로 늘림
    private String title;

    @Column(columnDefinition = "TEXT", nullable = false) // 타입을 "TEXT"로 변경
    private String content;

    private Long like_cnt;
    private Long comment_cnt;


    @Builder //해당 클래스의 빌더 패턴 클래스를 생성
    public Posts(User user, Board board, String title, String content) {
        this.user = user;
        this.board = board;
        this.title = title;
        this.content = content;
        this.like_cnt = Long.valueOf(0);
        this.comment_cnt = Long.valueOf(0);
    }

    public void update(String title, String content) {
        this.title = title;
        this.content = content;
    }
}
