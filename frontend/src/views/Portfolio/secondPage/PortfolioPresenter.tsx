import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Fab from "@material-ui/core/Fab";
import ChevronRight from "@material-ui/icons/ChevronRight";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import TextField from "@material-ui/core/TextField";

interface PortfolioIState {
  useStyles: any;
  name: string;
  handleSubmit: (event: React.FormEvent) => void;
  updateTerm: (event: React.ChangeEvent<HTMLInputElement>) => void;
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

function PortfolioPresenter({
  useStyles,
  name,
  handleSubmit,
  updateTerm,
}: PortfolioIState) {
  const classes = useStyles();
  return (
    <Container>
      <Title>포트폴리오에 들어갈 내용을 정리해 보아요!</Title>
      <Title>{name}님의 개발 역량을 체크해주세요</Title>
      <Todo>
        1. 가장 자신있는 프로그래밍 언어 / 프레임워크 / 시스템을 선택해주세요
      </Todo>
      <Description>아래 보기 중 없다면 '기타'를 눌러주세요</Description>
      <br />
      <Todo>어느정도 자신있으신가요?</Todo>
      <br />

      <Todo>자신감의 이유는 무엇인가요?</Todo>
      <form
        className={classes.reason}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <TextField
          helperText="ex) 반응형 웹사이트 제작 가능, REST API 백엔드 구축 가능"
          onChange={updateTerm}
          name="reason1"
        ></TextField>
      </form>
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
