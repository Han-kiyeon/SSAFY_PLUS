package com.ssafy.springboot.web;

import com.ssafy.springboot.service.PortfolioService;
import com.ssafy.springboot.web.dto.portfolio.PortfolioListResponseDto;
import com.ssafy.springboot.web.dto.portfolio.PortfolioSaveRequestDto;
import com.ssafy.springboot.web.dto.portfolio.PortfolioUpdateRequestDto;
import com.ssafy.springboot.web.dto.project.ProjectListResponseDto;
import io.swagger.annotations.Api;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@Api(tags = {"Portfolio"})
@RequestMapping("/api/portfolio")
@RequiredArgsConstructor
@RestController
public class PortfolioController {

    private final PortfolioService portfolioService;


    @GetMapping("/list")
    public List<PortfolioListResponseDto> findAll() {
        return portfolioService.findAll();
    }

    @GetMapping("/{id}")
    public PortfolioListResponseDto findById(@PathVariable Long id) {
        return portfolioService.findById(id);
    }

    @PostMapping("")
    public ResponseEntity<?> save(@RequestBody PortfolioSaveRequestDto requestDto) {
        return portfolioService.save(requestDto);
    }

    @PutMapping("/{id}")
    public Long update(@PathVariable Long id, @RequestBody PortfolioUpdateRequestDto requestDto) {
        return portfolioService.update(id, requestDto);
    }

    @DeleteMapping("/{id}")
    public Long delete(@PathVariable Long id) {
        portfolioService.delete(id);
        return id;
    }
}