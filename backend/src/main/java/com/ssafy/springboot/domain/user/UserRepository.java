package com.ssafy.springboot.domain.user;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface UserRepository extends JpaRepository<User, Long> {

    //회원가입 시 ID(Email)중복 확인
    @Query("select u from User u where u.email=:email")
    User findByEmail(@Param("email") String email);

    @Modifying
    @Query("UPDATE User u set u.password = :password where u.email = :email")
    void updatePass(@Param("email") String email, @Param("password") String password);

    @Modifying
    @Query("UPDATE User u SET u.answer_like = u.answer_like+1 WHERE u.user_id = :user_id")
    Integer answerLikeUp(@Param("user_id") Long user_id);

    @Modifying
    @Query("UPDATE User u SET u.answer_like = u.answer_like-1 WHERE u.user_id = :user_id")
    Integer answerLikeDown(@Param("user_id") Long user_id);

    @Query("SELECT u FROM User u WHERE u.answer_like >0 ORDER BY u.answer_like")
    List<User> showLikeRank();
}
