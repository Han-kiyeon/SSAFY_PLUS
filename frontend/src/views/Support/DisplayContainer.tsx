import React from "react";
import DisplayPresenter from "./DisplayPresenter";

export default class extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return <DisplayPresenter />;
  }
}
