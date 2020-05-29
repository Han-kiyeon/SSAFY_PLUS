import React from "react";
import CreatePortfolioPresenter from "./CreatePortfolioPresenter";

export default class extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return <CreatePortfolioPresenter />;
  }
}
