package com.ssafy.springboot.domain.post;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
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
public class PostLike {

    @Id //해당 테이블의 PK 필드
    @GeneratedValue(strategy = GenerationType.IDENTITY) //PK 생성규칙: auto_increment
    private Long pl_id;

    @JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "user_id")
    @ManyToOne
    @OnDelete(action = OnDeleteAction.CASCADE)
    private User userlike;

    @JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "post_id")
    @ManyToOne
    @OnDelete(action = OnDeleteAction.CASCADE)
    private Posts postlike;

    @Builder
    public PostLike(User user,Posts post){
        this.userlike=user;
        this.postlike=post;
    }

}
