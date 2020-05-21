package com.ssafy.springboot.web;

import com.ssafy.springboot.domain.BreakingError.Errors;
import com.ssafy.springboot.domain.BreakingError.ErrorsRepository;
import com.ssafy.springboot.web.dto.BreakingError.ErrorsSaveRequestDto;
import com.ssafy.springboot.web.dto.BreakingError.ErrorsUpdateRequestDto;
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
public class ErrorsApicontrollerTest {

    @LocalServerPort
    private int port;

    @Autowired
    private TestRestTemplate restTemplate;

    @Autowired
    private ErrorsRepository errorsRepository;


    @After
    public void tearDown() throws Exception {
        errorsRepository.deleteAll();
    }

    @Test
    public void Errors_등록된다() throws Exception {
        //given
        String title = "title";
        String content = "content";
        ErrorsSaveRequestDto requestDto = ErrorsSaveRequestDto.builder()
                .title(title)
                .content(content)
                .author("author")
                .build();

        String url = "http://localhost:" + port + "/breakingError/errors";

        //when
        ResponseEntity<Long> responseEntity = restTemplate.postForEntity(url, requestDto, Long.class);

        //then
        assertThat(responseEntity.getStatusCode()).isEqualTo(HttpStatus.OK);
        assertThat(responseEntity.getBody()).isGreaterThan(0L);

        List<Errors> all = errorsRepository.findAll();
        assertThat(all.get(0).getTitle()).isEqualTo(title);
        assertThat(all.get(0).getContent()).isEqualTo(content);
    }

    @Test
    public void Errors_수정된다() throws Exception {
        //given
        Errors savedErrors = errorsRepository.save(Errors.builder()
                .title("title")
                .content("content")
                .author("author")
                .build());

        Long updateId = savedErrors.getErrorId();
        String expectedTitle = "title2";
        String expectedContent = "content2";

        ErrorsUpdateRequestDto requestDto = ErrorsUpdateRequestDto.builder()
                .title(expectedTitle)
                .content(expectedContent)
                .build();

        String url = "http://localhost:" + port + "/breakingError/errors" + updateId;

        HttpEntity<ErrorsUpdateRequestDto> requestEntity = new HttpEntity<>(requestDto);

        //when
        ResponseEntity<Long> responseEntity = restTemplate.exchange(url, HttpMethod.PUT, requestEntity, Long.class);

        //then
        assertThat(responseEntity.getStatusCode()).isEqualTo(HttpStatus.OK);
        assertThat(responseEntity.getBody()).isGreaterThan(0L);

        List<Errors> all = errorsRepository.findAll();
        assertThat(all.get(0).getTitle()).isEqualTo(expectedTitle);
        assertThat(all.get(0).getContent()).isEqualTo(expectedContent);
    }
}
