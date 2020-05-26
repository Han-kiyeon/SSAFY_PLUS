package com.ssafy.springboot.domain.post;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface PostsRepository extends JpaRepository<Posts, Long> {
    //인터페이스 생성 후 JpaRepository<Entity 클래스, PK 타입> 상속시
    //기본적인 CRUD 메소드가 자동으로 생성됩니다.

    //SpringDataJpa에서 제공하지 않는 메소드를 쿼리로 작성해서 사용
    @Query("SELECT p FROM Posts p ORDER BY p.post_id DESC")
    List<Posts> findAllDesc();

    @Query("SELECT p FROM Posts p WHERE p.post_id = :post_id")
    Posts findByPost_id(@Param("post_id") Long post_id);

    @Modifying
    @Query("UPDATE Posts p SET p.comment_cnt = p.comment_cnt+1 WHERE p.post_id = :post_id")
    Integer commentCntUp(@Param("post_id") Long post_id);

    @Modifying
    @Query("UPDATE Posts p SET p.comment_cnt = p.comment_cnt-1 WHERE p.post_id = :post_id")
    Integer commentCntDown(@Param("post_id") Long post_id);

    @Modifying
    @Query("UPDATE Posts p SET p.like_cnt = p.like_cnt+1 WHERE p.post_id = :post_id")
    Integer likeCntUp(@Param("post_id") Long post_id);

    @Modifying
    @Query("UPDATE Posts p SET p.like_cnt = p.like_cnt-1 WHERE p.post_id = :post_id")
    Integer likeCntDown(@Param("post_id") Long post_id);
}
