package com.ssafy.springboot.web;


import com.ssafy.springboot.domain.BreakingError.Answers;
import com.ssafy.springboot.domain.BreakingError.AnswersRepository;
import com.ssafy.springboot.web.dto.BreakingError.AnswersSaveRequestDto;
import com.ssafy.springboot.web.dto.BreakingError.AnswersUpdateRequestDto;
import org.junit.After;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.web.server.LocalServerPort;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;

@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class AnswerApiControllerTest {
    @LocalServerPort
    private int port;

    @Autowired
    private TestRestTemplate restTemplate;

    @Autowired
    private AnswersRepository answersRepository;

    @After
    public void tearDown() throws Exception {
        answersRepository.deleteAll();
    }

    @Test
    public void answers_등록된다() throws Exception {
        //given
        String title = "title";
        String content = "content";
        AnswersSaveRequestDto requestDto = AnswersSaveRequestDto.builder()
                .title(title)
                .content(content)
                .build();

        String url = "http://localhost:" + port + "/api/breakingError/answers";

        //when
        ResponseEntity<Long> responseEntity = restTemplate.postForEntity(url, requestDto, Long.class);

        //then
        assertThat(responseEntity.getStatusCode()).isEqualTo(HttpStatus.OK);
        assertThat(responseEntity.getBody()).isGreaterThan(0L);

        List<Answers> all = answersRepository.findAll();
        assertThat(all.get(0).getTitle()).isEqualTo(title);
        assertThat(all.get(0).getContent()).isEqualTo(content);
    }

    @Test
    public void Answers_수정된다() throws Exception {
        //given
        Answers savedAnswers = answersRepository.save(Answers.builder()
                .title("title")
                .content("content")
                .build());

        Long updateId = savedAnswers.getAnswerId();
        String expectedTitle = "title2";
        String expectedContent = "content2";

        AnswersUpdateRequestDto requestDto = AnswersUpdateRequestDto.builder()
                .title(expectedTitle)
                .content(expectedContent)
                .build();

        String url = "http://localhost:" + port + "/api/breakingError/answers/" + updateId;

        HttpEntity<AnswersUpdateRequestDto> requestEntity = new HttpEntity<>(requestDto);

        //when
        ResponseEntity<Long> responseEntity = restTemplate.exchange(url, HttpMethod.PUT, requestEntity, Long.class);

        //then
        assertThat(responseEntity.getStatusCode()).isEqualTo(HttpStatus.OK);
        assertThat(responseEntity.getBody()).isGreaterThan(0L);

        List<Answers> all = answersRepository.findAll();
        assertThat(all.get(0).getTitle()).isEqualTo(expectedTitle);
        assertThat(all.get(0).getContent()).isEqualTo(expectedContent);
    }
}
