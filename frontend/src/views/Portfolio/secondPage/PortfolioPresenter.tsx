import React from "react";
import styled from "styled-components";
import Fab from "@material-ui/core/Fab";
import ChevronRight from "@material-ui/icons/ChevronRight";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import { Link } from "react-router-dom";

interface PortfolioIState {
  useStyles: any;
}
const Container = styled.div`
  width: 80vw;
  border: 1px solid black;
  background-color: #fafafa;
  border-radius: 5px;
  box-shadow: 0 3px 10px 3px rgba(50, 50, 93, 0.25),
    0 8px 16px -8px rgba(0, 0, 0, 0.3);
`;
const Title = styled.h1`
  font-weight: 600;
  font-size: 25px;
  color: #1c1c1c;
`;

const SubTitle = styled.h2`
  font-size: 1.5em;
`;
const Name = styled.span``;
const Todo = styled.span``;
const Description = styled.h5``;

function PortfolioPresenter({ useStyles }: PortfolioIState) {
  const classes = useStyles();
  return (
    <Container>
      <Title>포트폴리오에 들어갈 내용을 정리하겠습니다!</Title>
      <SubTitle>기본 정보</SubTitle>
      <Todo>이름을 입력해주세요</Todo>
      <Description>
        이력서에 들어갈 한글이름으로 정확하게 입력해주세요
      </Description>

      <div className={classes.pageButton}>
        <Link to={{ pathname: "/plus/portfolio" }}>
          <Fab color="primary" aria-label="next">
            <ChevronLeft />
          </Fab>
        </Link>
        <Link to={{ pathname: "/plus/2/portfolio" }}>
          <Fab color="primary" aria-label="next">
            <ChevronRight />
          </Fab>
        </Link>
      </div>
    </Container>
  );
}

export default PortfolioPresenter;
