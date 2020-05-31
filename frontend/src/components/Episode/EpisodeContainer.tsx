import React from "react";
import EpisodePresenter from "./EpisodePresenter";

interface IEpisode {
  episodes: Array<{
    id: number;
    user_id: number;
    date: string;
    title: string;
    strength: Array<string>;
    content: string;
  }>;
}

export default class extends React.Component<{}, IEpisode> {
  state = {
    episodes: [
      {
        id: 1,
        user_id: 2,
        date: "2020-03-31",
        title: "SSAFY 공통프로젝트",
        strength: ["배려", "노력"],
        content: "공통프로젝트에서 이러저러해서 열심히 노력하였다",
      },
      {
        id: 2,
        user_id: 2,
        date: "2020-03-31",
        title: "SSAFY 특화프로젝트",
        strength: ["리더쉽", "협동"],
        content: "특화프로젝트에서 이러저러해서 열심히 노력하였다",
      },
      {
        id: 3,
        user_id: 2,
        date: "2020-05-31",
        title: "SSAFY 심화프로젝트",
        strength: ["열정", "협동"],
        content: "심화프로젝트에서 이러저러해서 열심히 노력하였다",
      },
    ],
  };
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    const { episodes } = this.state;
    return <EpisodePresenter episodes={episodes} />;
  }
}
