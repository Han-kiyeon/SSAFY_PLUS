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
}
