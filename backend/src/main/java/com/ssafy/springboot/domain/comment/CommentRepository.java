package com.ssafy.springboot.domain.comment;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface CommentRepository extends JpaRepository<Comment, Long> {
    //인터페이스 생성 후 JpaRepository<Entity 클래스, PK 타입> 상속시
    //기본적인 CRUD 메소드가 자동으로 생성됩니다.

    //SpringDataJpa에서 제공하지 않는 메소드를 쿼리로 작성해서 사용
    @Query("SELECT c FROM Comment c WHERE c.post = :post_id ORDER BY c.comment_id DESC")
    List<Comment> findAllDesc(@Param("post_id") Long post_id);
}
