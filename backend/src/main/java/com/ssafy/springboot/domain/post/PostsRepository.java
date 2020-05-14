package com.ssafy.springboot.domain.post;

import org.springframework.data.jpa.repository.JpaRepository;

public interface PostsRepository extends JpaRepository<Posts, Long> {
    //인터페이스 생성 후 JpaRepository<Entity 클래스, PK 타입> 상속시
    //기본적인 CRUD 메소드가 자동으로 생성됩니다.

}
