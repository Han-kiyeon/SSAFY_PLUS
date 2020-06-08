package com.ssafy.springboot.domain.userInfo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface UniversityRepository extends JpaRepository<University, Long> {

    @Query("SELECT u FROM University u WHERE u.userInfo.user_info_id = :user_info_id")
    University findAllByUserInfoId(@Param("user_info_id") Long user_info_id);

}