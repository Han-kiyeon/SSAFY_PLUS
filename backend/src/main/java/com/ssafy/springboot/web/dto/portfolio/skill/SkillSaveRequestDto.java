package com.ssafy.springboot.web.dto.portfolio.project;

import com.ssafy.springboot.domain.portfolio.Portfolio;
import com.ssafy.springboot.domain.portfolio.project.Project;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.List;

@Getter
@NoArgsConstructor
public class ProjectSaveRequestDto {

    private String user_email;
    private Long portfolio_id;
    private String name;
    private String period;
    private String description;

    private List<String> stacks;
    private List<String> roles;

    private String url;


    @Builder
    public ProjectSaveRequestDto(String user_email, Long portfolio_id, String name, String period, String description,
                                 List<String> stacks, List<String> roles, String url) {
        this.user_email = user_email;
        this.portfolio_id = portfolio_id;
        this.name = name;
        this.period = period;
        this.description = description;
        this.stacks = stacks;
        this.roles = roles;
        this.url = url;
    }

    public Project toEntity(Portfolio portfolio) {
        return Project.builder()
                .description(description)
                .name(name)
                .period(period)
                .url(url)
                .roles(roles)
                .stacks(stacks)
                .portfolio(portfolio)
                .build();
    }
}
