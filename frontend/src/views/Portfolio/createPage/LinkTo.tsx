import React from "react";
import styled from "styled-components";

interface PortfolioPresenterI {
  id: number;
  title: string;
}

const List = styled.form`
  border-radius: 5px;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.3);
  margin: 10px 0px;
  height: 10vh;
  width: 50vh;
  display: table;
`;

const Box = styled.div`
  height: 100%;
  width: 100%;
  cursor: pointer;
  margin-top: 18px;
  transition: background-color 0.2s ease-in-out;
  background-color: #fafafa;
  color: #070707;
  opacity: 0.7;
  font-weight: 600;
  :hover {
    background-color: #08088a;
    color: #fafafa;
    opacity: 1;
  }
  border-radius: 5px;
  text-align: center;
  display: table-cell;
  vertical-align: middle;
  font-size: 20px;
`;

export default function BoxDiv({ id, title }: PortfolioPresenterI) {
  function makePortfolio() {
    // window.sessionStorage.setItem("portfolio_title", title);
    window.location.href = `./portfolio/1/${id}`;
  }
  return (
    <List onClick={makePortfolio}>
      <Box>{title}</Box>
    </List>
  );
}
