import React from "react";
import PortfolioResultPresenter from "./PortfolioResultPresenter";

interface PortfolioResultIState {}

export default class extends React.Component<{}, PortfolioResultIState> {
  state = {};
  render() {
    return <PortfolioResultPresenter />;
  }
}
