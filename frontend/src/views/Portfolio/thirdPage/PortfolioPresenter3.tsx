import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Fab from "@material-ui/core/Fab";
import Add from "@material-ui/icons/Add";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import TextField from "@material-ui/core/TextField";

interface PortfolioIState {
  useStyles: any;
  name: string;
  projectName: string;
  projectTerm: string;
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

const Name = styled.span``;
const Todo = styled.span``;
const Description = styled.h5``;

function PortfolioPresenter({
  useStyles,
  name,
  projectName,
  projectTerm,
  handleSubmit,
  updateTerm,
}: PortfolioIState) {
  const classes = useStyles();

  return (
    <Container>
      <div>
        <Name>{name}</Name>
        <Title>님의 포트폴리오에 기재할 프로젝트 경험을 작성해주세요</Title>
        <Todo>프로젝트의 이름은 무엇인가요?</Todo>
        <Description>
          특정한 이름이 없다면 특징으로 적으셔도 됩니다. ex) 상권분석 웹서비스,
          맞집추천 웹앱
        </Description>
        <form
          className={classes.projectName}
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <TextField
            label="프로젝트 이름"
            helperText="ex) 반응형 웹사이트 제작 가능, REST API 백엔드 구축 가능"
            onChange={updateTerm}
            name="projectName"
            value={projectName}
          ></TextField>
        </form>
        <Todo>프로젝트 기간을 알려주세요</Todo>
        <Description>ex. 2020.03 - 2020.05</Description>
        <form
          className={classes.projectTerm}
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <TextField
            label="프로젝트 기간"
            helperText="숫자만 입력해주세요"
            onChange={updateTerm}
            name="projectTerm"
            value={projectTerm}
          ></TextField>
        </form>
      </div>
      <div className={classes.plusButton}>
        <Fab color="primary" aria-label="next" size="small">
          <Add fontSize="small" />
        </Fab>
      </div>
      <div className={classes.pageButton}>
        <Link to={{ pathname: "/plus/2/portfolio" }}>
          <Fab color="primary" aria-label="next">
            <ChevronLeft />
          </Fab>
        </Link>
      </div>
    </Container>
  );
}

export default PortfolioPresenter;
