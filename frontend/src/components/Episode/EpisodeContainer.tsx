import React from "react";
import EpisodePresenter from "./EpisodePresenter";
import axios from "axios";

interface IEpisode {
  episodes: Array<{
    id: number;
    user_email: string;
    date: string;
    title: string;
    strength: Array<string>;
    content: string;
  }>;
}

export default class extends React.Component<{}, IEpisode> {
  state = {
    episodes: [],
  };
  componentDidMount() {
    window.scrollTo(0, 0);
    axios
      .get(
        `http://13.125.238.102:8080/api/episode/list/${window.sessionStorage.getItem(
          "user_email"
        )}/`
      )
      .then(res => {
        console.log(res);
        this.setState({ episodes: res.data });
      });
  }
  render() {
    const { episodes } = this.state;
    return <EpisodePresenter episodes={episodes} />;
  }
}
