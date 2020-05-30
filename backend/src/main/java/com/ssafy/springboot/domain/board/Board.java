package com.ssafy.springboot.domain.board;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import com.ssafy.springboot.domain.BaseTimeEntity;
import com.ssafy.springboot.domain.user.User;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import javax.persistence.*;

@Getter
@NoArgsConstructor
@Entity
public class Board extends BaseTimeEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long board_id;

    @JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "email")
    @ManyToOne
    @OnDelete(action = OnDeleteAction.CASCADE)
    @JoinColumn(name = "user_id")
    private User user;

    private String title;
    @Column(length = 500, nullable = false) //VARCHAR(255)가 기본 -> size를 500으로 늘림
    private String contents;
    private String topic;
    private String type;
    private String password;


    @Builder
    public Board(User user, String title, String contents, String topic, String type, String password) {
        this.user = user;
        this.title = title;
        this.contents = contents;
        this.topic = topic;
        this.type = type;
        this.password = password;
    }


    public void update(User user, String title, String contents, String topic, String type, String password) {
        this.user = user;
        this.title = title;
        this.contents = contents;
        this.topic = topic;
        this.type = type;
        this.password = password;
    }

    @Override
    public String toString() {
        return "Board{" +
                "board_id=" + board_id +
                ", user=" + user +
                ", title='" + title + '\'' +
                ", contents='" + contents + '\'' +
                ", topic='" + topic + '\'' +
                ", type='" + type + '\'' +
                ", password='" + password + '\'' +
                '}';
    }
}