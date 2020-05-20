import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Fab from "@material-ui/core/Fab";
import ChevronRight from "@material-ui/icons/ChevronRight";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import Slider from "@material-ui/core/Slider";

interface PortfolioIState {
  useStyles: any;
  name: string;
  stack1: string;
  stack1_etc: boolean;
  stack1_score: number;
  reason1: string;
  stack2: string;
  stack2_etc: boolean;
  stack2_score: number;
  reason2: string;
  stack3: string;
  stack3_etc: boolean;
  stack3_score: number;
  reason3: string;
  handleSubmit: (event: React.FormEvent) => void;
  updateTerm: (event: React.ChangeEvent<HTMLInputElement>) => void;
  tagUpdate1: any;
  sliderUpdate1: any;
  tagUpdate2: any;
  sliderUpdate2: any;
  tagUpdate3: any;
  sliderUpdate3: any;
  valuetext: (value: number) => string;
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
  stack1,
  stack1_etc,
  stack1_score,
  reason1,
  stack2,
  stack2_etc,
  stack2_score,
  reason2,
  stack3,
  stack3_etc,
  stack3_score,
  reason3,
  handleSubmit,
  updateTerm,
  tagUpdate1,
  sliderUpdate1,
  tagUpdate2,
  sliderUpdate2,
  tagUpdate3,
  sliderUpdate3,
  valuetext,
}: PortfolioIState) {
  const classes = useStyles();
  const stack = [
    "Java",
    "Python",
    "C",
    "C++",
    "JavaScript",
    "Vue",
    "React",
    "TypeScript",
    "MySql",
    "MongoDB",
    "Linux",
    "HTML/CSS",
    "Rust",
    "nodeJS",
    "R",
    "Spring",
    "IntelliJ",
    "C#",
    "기타",
  ];
  const motion = [
    { value: 0, label: "💣" },
    { value: 25, label: "😵" },
    { value: 50, label: "🙄" },
    { value: 75, label: "😃" },
    { value: 100, label: "🏆" },
  ];
  return (
    <Container>
      <Title>포트폴리오에 들어갈 내용을 정리해 보아요!</Title>
      <Name>{name}</Name>
      <Title>님의 개발 역량을 체크해주세요</Title>
      <div>
        <Todo>
          1. 가장 자신있는 프로그래밍 언어 / 프레임워크 / 시스템을 선택해주세요
        </Todo>
        <Description>
          아래 보기 중 원하는 기술이 없다면 '기타'를 선택해주세요
        </Description>
        <Autocomplete
          options={stack}
          getOptionLabel={option => option}
          style={{ width: 500 }}
          onChange={tagUpdate1}
          renderInput={params => (
            <TextField {...params} label="Stack" variant="outlined" />
          )}
        />
        {stack1_etc && (
          <TextField
            label="직접 입력해주세요"
            onChange={updateTerm}
            name="stack1"
            value={stack1}
          ></TextField>
        )}
        <br />
        <Todo>어느정도 자신있으신가요?</Todo>
        <br />
        <Description>100점을 만점으로 자신의 실력을 평가해보세요</Description>
        <div className={classes.motion}>
          <Slider
            onChange={sliderUpdate1}
            getAriaValueText={valuetext}
            step={5}
            valueLabelDisplay="auto"
            value={stack1_score}
            marks={motion}
          />
        </div>
        <Todo>점수의 이유는 무엇인가요?</Todo>
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
            value={reason1}
          ></TextField>
        </form>
      </div>
      {stack1 && stack1_score && reason1 && (
        <div>
          <Todo>
            1. 가장 자신있는 프로그래밍 언어 / 프레임워크 / 시스템을
            선택해주세요
          </Todo>
          <Description>
            아래 보기 중 원하는 기술이 없다면 '기타'를 선택해주세요
          </Description>
          <Autocomplete
            options={stack}
            getOptionLabel={option => option}
            style={{ width: 500 }}
            onChange={tagUpdate2}
            renderInput={params => (
              <TextField {...params} label="Stack" variant="outlined" />
            )}
          />
          {stack2_etc && (
            <TextField
              label="직접 입력해주세요"
              onChange={updateTerm}
              name="stack2"
              value={stack2}
            ></TextField>
          )}
          <br />
          <Todo>어느정도 자신있으신가요?</Todo>
          <br />
          <Description>100점을 만점으로 자신의 실력을 평가해보세요</Description>
          <div className={classes.motion}>
            <Slider
              onChange={sliderUpdate2}
              getAriaValueText={valuetext}
              step={5}
              valueLabelDisplay="auto"
              value={stack2_score}
              marks={motion}
            />
          </div>
          <Todo>점수의 이유는 무엇인가요?</Todo>
          <form
            className={classes.reason}
            noValidate
            autoComplete="off"
            onSubmit={handleSubmit}
          >
            <TextField
              helperText="ex) 반응형 웹사이트 제작 가능, REST API 백엔드 구축 가능"
              onChange={updateTerm}
              name="reason2"
              value={reason2}
            ></TextField>
          </form>
        </div>
      )}
      {stack2 && stack2_score && reason2 && (
        <div>
          <Todo>
            1. 가장 자신있는 프로그래밍 언어 / 프레임워크 / 시스템을
            선택해주세요
          </Todo>
          <Description>
            아래 보기 중 원하는 기술이 없다면 '기타'를 선택해주세요
          </Description>
          <Autocomplete
            options={stack}
            getOptionLabel={option => option}
            style={{ width: 500 }}
            onChange={tagUpdate3}
            renderInput={params => (
              <TextField {...params} label="Stack" variant="outlined" />
            )}
          />
          {stack3_etc && (
            <TextField
              label="직접 입력해주세요"
              onChange={updateTerm}
              name="stack3"
              value={stack3}
            ></TextField>
          )}
          <br />
          <Todo>어느정도 자신있으신가요?</Todo>
          <br />
          <Description>100점을 만점으로 자신의 실력을 평가해보세요</Description>
          <div className={classes.motion}>
            <Slider
              onChange={sliderUpdate3}
              getAriaValueText={valuetext}
              step={5}
              valueLabelDisplay="auto"
              value={stack3_score}
              marks={motion}
            />
          </div>
          <Todo>점수의 이유는 무엇인가요?</Todo>
          <form
            className={classes.reason}
            noValidate
            autoComplete="off"
            onSubmit={handleSubmit}
          >
            <TextField
              helperText="ex) 반응형 웹사이트 제작 가능, REST API 백엔드 구축 가능"
              onChange={updateTerm}
              name="reason3"
              value={reason3}
            ></TextField>
          </form>
        </div>
      )}
      <div className={classes.pageButton}>
        <Link to={{ pathname: "/plus/portfolio" }}>
          <Fab color="primary" aria-label="next">
            <ChevronLeft />
          </Fab>
        </Link>
        <Link to={{ pathname: "/plus/3/portfolio" }}>
          <Fab color="primary" aria-label="next">
            <ChevronRight />
          </Fab>
        </Link>
      </div>
    </Container>
  );
}

export default PortfolioPresenter;
