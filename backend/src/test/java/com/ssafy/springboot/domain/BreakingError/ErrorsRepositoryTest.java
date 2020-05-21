package com.ssafy.springboot.domain.BreakingError;

import org.junit.After;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.time.LocalDateTime;
import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;

@RunWith(SpringRunner.class)
@SpringBootTest
public class ErrorsRepositoryTest {

    @Autowired
    ErrorsRepository errorsRepository;

    @After
    public void cleanup() {
        errorsRepository.deleteAll();
    }

    @Test
    public void 질문저장_불러오기() {

        String title = "테스트 게시글";
        String content = "테스트 본문";


        errorsRepository.save(
                Errors.builder()
                        .title(title)
                        .content(content)
                        .author("test@test.com")
                        .build()
        );

        List<Errors> errorsList = errorsRepository.findAll();// 모든 데이터를 조회

        Errors errors = errorsList.get(0);
        assertThat(errors.getTitle()).isEqualTo(title);
        assertThat(errors.getContent()).isEqualTo(content);
    }

    @Test
    public void BaseTimeEntity_등록() {
        //given
        LocalDateTime now = LocalDateTime.of(2020, 5, 15, 0, 0, 0);
        errorsRepository.save(Errors.builder()
                .title("title")
                .content("content")
                .author("author")
                .build()
        );

        //when
        List<Errors> errorsList = errorsRepository.findAll();

        //then
        Errors posts = errorsList.get(0);

        System.out.println(">>>>>>>>>>>>>>>>> createDate=" + posts.getCreatedDate() + ", modifiedDate=" + posts.getModifiedDate());

        assertThat(posts.getCreatedDate()).isAfter(now);
        assertThat(posts.getModifiedDate()).isAfter(now);
    }
}
