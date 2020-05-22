package com.ssafy.springboot.domain.post;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface PostsRepository extends JpaRepository<Posts, Long> {
    //인터페이스 생성 후 JpaRepository<Entity 클래스, PK 타입> 상속시
    //기본적인 CRUD 메소드가 자동으로 생성됩니다.

    //SpringDataJpa에서 제공하지 않는 메소드를 쿼리로 작성해서 사용
    @Query("SELECT p FROM Posts p ORDER BY p.post_id DESC")
    List<Posts> findAllDesc();
}
