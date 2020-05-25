import React from "react";
import PortfolioResultPresenter from "./PortfolioResultPresenter";

interface PortfolioResultIState {
  name: string;
  birth: string;
  email: string;
  phone: string;
  characters: string[];
  skill1: string;
  s_score1: string;
  s_reason1: string;
  skill2: string;
  s_score2: string;
  s_reason2: string;
  skill3: string;
  s_score3: string;
  s_reason3: string;
}

export default class extends React.Component<{}, PortfolioResultIState> {
  state = {
    name: "음영현",
    birth: "1991-12-22",
    email: "opwer032@naver.com",
    phone: "010-7759-1222",
    characters: ["긍정적인", "꾸준한", "듬직한", "팀을 이끄는"],
    skill1: "Python",
    s_score1: "80",
    s_reason1: "REST API 구축 및 빅데이터 알고리즘 적용",
    skill2: "Java",
    s_score2: "80",
    s_reason2: "REST API 구축 및 알고리즘 학습",
    skill3: "React",
    s_score3: "70",
    s_reason3: "Component 단위 홈페이지 구현 가능",
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
      s_score1,
      s_reason1,
      skill2,
      s_score2,
      s_reason2,
      skill3,
      s_score3,
      s_reason3,
    } = this.state;
    return (
      <PortfolioResultPresenter
        name={name}
        birth={birth}
        email={email}
        phone={phone}
        characters={characters}
        skill1={skill1}
        s_score1={s_score1}
        s_reason1={s_reason1}
        skill2={skill2}
        s_score2={s_score2}
        s_reason2={s_reason2}
        skill3={skill3}
        s_score3={s_score3}
        s_reason3={s_reason3}
      />
    );
  }
}
