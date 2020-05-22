import React from "react";
import PortfolioResultPresenter from "./PortfolioResultPresenter";

interface PortfolioResultIState {
  name: string;
}

export default class extends React.Component<{}, PortfolioResultIState> {
  state = { name: "Eum_mericano" };
  render() {
    const { name } = this.state;
    return <PortfolioResultPresenter name={name} />;
  }
}
