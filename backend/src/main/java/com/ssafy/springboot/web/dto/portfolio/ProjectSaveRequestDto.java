package com.ssafy.springboot.web.dto.portfolio;

import com.ssafy.springboot.domain.board.Board;
import com.ssafy.springboot.domain.portfolio.Project;
import com.ssafy.springboot.domain.user.User;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.List;

@Getter
@NoArgsConstructor
public class ProjectSaveRequestDto {

    private String name;
    private String period;
    private String desc;
    private List<String> stacks;
    private List<String> roles;
    private String pjt_url;


    @Builder
    public ProjectSaveRequestDto(String name, String period, String desc,
                                 List<String> stacks, List<String> roles, String pjt_url) {
        this.name = name;
        this.period = period;
        this.desc = desc;
        this.stacks = stacks;
        this.roles = roles;
        this.pjt_url = pjt_url;
    }

    public Project toEntity() {
        return Project.builder()
                .name(name)
                .period(period)
                .desc(desc)
                .stacks(stacks)
                .roles(roles)
                .pjt_url(pjt_url)
                .build();
    }
}
