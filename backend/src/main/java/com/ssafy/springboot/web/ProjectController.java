package com.ssafy.springboot.web;

import com.ssafy.springboot.service.ProjectService;
import com.ssafy.springboot.web.dto.project.*;
import io.swagger.annotations.Api;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@Api(tags = {"Project"})
@RequestMapping("/api/project")
@RequiredArgsConstructor
@RestController
public class ProjectController {

    private final ProjectService projectService;


    @GetMapping("/list/{portfolio_id}")
    public List<ProjectListResponseDto> findAll(@PathVariable Long portfolio_id) {
        return projectService.findAll(portfolio_id);
    }

    @GetMapping("/{project_id}")
    public ProjectListResponseDto findById(@PathVariable Long project_id) {
        return projectService.findById(project_id);
    }

    @PostMapping("")
    public ResponseEntity<?> save(@RequestBody ProjectSaveRequestDto requestDto) {
        return projectService.save(requestDto);
    }

    @PutMapping("/{id}")
    public Long update(@PathVariable Long id, @RequestBody ProjectUpdateRequestDto requestDto) {
        return projectService.update(id, requestDto);
    }

    @DeleteMapping("/{id}")
    public Long delete(@PathVariable Long id) {
        projectService.delete(id);
        return id;
    }
}