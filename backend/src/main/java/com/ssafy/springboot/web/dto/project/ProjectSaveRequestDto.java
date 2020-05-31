//package com.ssafy.springboot.web.dto.project;
//
//import com.ssafy.springboot.domain.project.Project;
//import lombok.Builder;
//import lombok.Getter;
//import lombok.NoArgsConstructor;
//
//import java.util.List;
//
//@Getter
//@NoArgsConstructor
//public class ProjectSaveRequestDto {
//
//    private String user_email;
//
//    private String name;
//    private String period;
//    private String description;
//
//    private List<String> stacks;
//    private List<String> roles;
//
//    private String url;
//
//
//    @Builder
//    public ProjectSaveRequestDto(String user_email, String name, String period, String description,
//                                 List<String> stacks, List<String> roles, String url) {
//        this.user_email = user_email;
//        this.name = name;
//        this.period = period;
//        this.description = description;
//        this.stacks = stacks;
//        this.roles = roles;
//        this.url = url;
//    }
//
//    public Project toEntity() {
//        return Project.builder()
//                .description(description)
//                .name(name)
//                .period(period)
//                .url(url)
//                .roles(roles)
//                .stacks(stacks)
//                .build();
//    }
//
//    @Override
//    public String toString() {
//        return "ProjectSaveRequestDto{" +
//                "user_email='" + user_email + '\'' +
//                ", name='" + name + '\'' +
//                ", period='" + period + '\'' +
//                ", description='" + description + '\'' +
//                ", stacks=" + stacks +
//                ", roles=" + roles +
//                ", url='" + url + '\'' +
//                '}';
//    }
//}
