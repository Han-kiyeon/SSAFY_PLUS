package com.ssafy.springboot.domain.userInfo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;


public interface HighschoolRepository extends JpaRepository<Highschool, Long> {

    @Query("SELECT h FROM Highschool h WHERE h.userInfo.user_info_id = :user_info_id")
    Highschool findAllByUserInfoId(@Param("user_info_id") Long user_info_id);

}