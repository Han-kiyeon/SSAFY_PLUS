package com.ssafy.springboot.domain.post;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface PostLikeRepository extends JpaRepository<PostLike, Long> {

    @Query("SELECT p FROM PostLike p WHERE p.postlike.post_id=:post_id AND p.userlike.user_id=:user_id")
    PostLike findByPostIDAndUserID(@Param("post_id") Long post_id, @Param("user_id") Long user_id);


}
