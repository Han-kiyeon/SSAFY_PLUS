import React from "react";

interface PortfolioIState {
  episodes: Array<{
    id: number;
    user_id: number;
    date: string;
    title: string;
    strength: Array<string>;
    content: string;
  }>;
}

function PortfolioPresenter({ episodes }: PortfolioIState) {
  return (
    <>
      {episodes.map(episode => (
        <div key={episode.id}>{episode.title}</div>
      ))}
    </>
  );
}

export default PortfolioPresenter;
