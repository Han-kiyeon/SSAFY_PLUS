import React from "react";
import EpisodePresenter from "./EpisodePresenter";

export default class extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return <EpisodePresenter />;
  }
}
