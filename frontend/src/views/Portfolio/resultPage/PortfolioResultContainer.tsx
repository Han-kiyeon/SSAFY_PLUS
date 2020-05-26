import React from "react";
import PortfolioResultPresenter from "./PortfolioResultPresenter";

interface PortfolioResultIState {
  name: string;
  birth: string;
  email: string;
  phone: string;
  characters: string[];
  skill1: string[];
  skill2: string[];
  skill3: string[];
  skill4: string[];
  skill5: string[];
  project_len: number;
  t_projectName1: string;
  t_projectPeriod1: string;
  t_projectDesc1: string;
  t_mystacks1: string[];
  t_projectStacks1: string;
  t_roles1: string[];
}

export default class extends React.Component<{}, PortfolioResultIState> {
  state = {
    name: "음영현",
    birth: "1991-12-22",
    email: "opwer032@naver.com",
    phone: "010-7759-1222",
    characters: ["긍정적인", "꾸준한", "듬직한", "팀을 이끄는"],
    skill1: ["Python", "80", "REST API 구축 및 빅데이터 알고리즘 적용"],
    skill2: ["Java", "80", "REST API 구축 및 알고리즘 학습"],
    skill3: ["Mysql", "80", "인터넷을 참고하여 원하는 기능 구현 가능"],
    skill4: ["React", "70", "Component 단위 홈페이지 구현 가능"],
    skill5: ["JavaScript", "60", "함수 단위 구현"],
    project_len: 2,
    t_projectName1: "ㅎㅎㅎ (핫, 힙, 힐링 플레이스)",
    t_projectPeriod1: "2020.03 - 2020.05",
    t_projectDesc1: "[빅데이터] 핫플레이스 추천 SNS",
    t_mystacks1: ["백엔드 엔지니어", "데이터 엔지니어"],
    t_projectStacks1: "React, Django, MySQL, AWS",
    t_roles1: [
      "REST API 모델 설계 및 구현",
      "빅데이터 추천 시스템 구축",
      "배포",
    ],
    t_projectUrl1: "https://lab.ssafy.com/s02-bigdata-sub3/s02p23a202",
  };
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    const {
      name,
      birth,
      email,
      phone,
      characters,
      skill1,
      skill2,
      skill3,
      skill4,
      skill5,
      project_len,
      t_projectName1,
      t_projectPeriod1,
      t_projectDesc1,
      t_mystacks1,
      t_projectStacks1,
      t_roles1,
    } = this.state;
    return (
      <PortfolioResultPresenter
        name={name}
        birth={birth}
        email={email}
        phone={phone}
        characters={characters}
        skill1={skill1}
        skill2={skill2}
        skill3={skill3}
        skill4={skill4}
        skill5={skill5}
        project_len={project_len}
        t_projectName1={t_projectName1}
        t_projectPeriod1={t_projectPeriod1}
        t_projectDesc1={t_projectDesc1}
        t_mystacks1={t_mystacks1}
        t_projectStacks1={t_projectStacks1}
        t_roles1={t_roles1}
      />
    );
  }
}
