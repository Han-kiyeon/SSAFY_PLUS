import React from "react";
import PortfolioResultPresenter from "./PortfolioResultPresenter";

interface PortfolioResultIState {
  name: string;
  birth: string;
  email: string;
  phone: string;
  characters: string[];
}

export default class extends React.Component<{}, PortfolioResultIState> {
  state = {
    name: "음영현",
    birth: "1991-12-22",
    email: "opwer032@naver.com",
    phone: "010-7759-1222",
    characters: ["긍정적인", "꾸준한", "듬직한", "팀을 이끄는"],
  };
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    const { name, birth, email, phone, characters } = this.state;
    return (
      <PortfolioResultPresenter
        name={name}
        birth={birth}
        email={email}
        phone={phone}
        characters={characters}
      />
    );
  }
}
