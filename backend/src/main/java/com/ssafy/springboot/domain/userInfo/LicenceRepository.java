package com.ssafy.springboot.domain.userInfo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface LicenceRepository extends JpaRepository<Licence, Long> {

    @Query("SELECT l FROM Licence l WHERE l.userInfo.user_info_id = :user_info_id")
    List<Licence> findAllByUserInfoId(@Param("user_info_id") Long user_info_id);

}
