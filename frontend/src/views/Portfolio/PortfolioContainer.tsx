import React from "react";
import PortfolioPresenter from "./PortfolioPresenter";

interface PortfolioIState {
  userId: string;
}

export default class extends React.Component<{}, PortfolioIState> {
  state = {
    userId: "",
  };
  render() {
    const { userId } = this.state;
    return <PortfolioPresenter userId={userId} />;
  }
}
