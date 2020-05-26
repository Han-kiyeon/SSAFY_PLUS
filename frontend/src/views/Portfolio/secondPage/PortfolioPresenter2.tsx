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
  stack4: string;
  stack4_etc: boolean;
  stack4_score: number;
  reason4: string;
  stack5: string;
  stack5_etc: boolean;
  stack5_score: number;
  reason5: string;
  handleSubmit: (event: React.FormEvent) => void;
  updateTerm: (event: React.ChangeEvent<HTMLInputElement>) => void;
  tagUpdate1: any;
  sliderUpdate1: any;
  tagUpdate2: any;
  sliderUpdate2: any;
  tagUpdate3: any;
  sliderUpdate3: any;
  tagUpdate4: any;
  sliderUpdate4: any;
  tagUpdate5: any;
  sliderUpdate5: any;
  valuetext: (value: number) => string;
}
const Card = styled.div`
  display: flex;
  justify-content: center;
`;
const Block = styled.div`
  margin: 40px 0px;
`;
const Container = styled.div`
  display: inline-block;
  position: relative;
  padding: 40px 35px 80px 35px;
  width: 60vw;
  background-color: #fafafa;
  border-radius: 5px;
  box-shadow: 0 3px 10px 3px rgba(50, 50, 93, 0.25),
    0 8px 16px -8px rgba(0, 0, 0, 0.3);
  word-break: break-all;
`;
const Title = styled.span`
  display: block;
  padding: 10px 10px 40px 10px;
  font-weight: 600;
  font-size: 1.5em;
  color: #1c1c1c;
`;

const Todo = styled.span`
  display: inline-block;
  font-weight: 600;
  font-size: 1em;
  padding: 15px 5px 5px 0px;
  width: auto;
`;
const Description = styled.span`
  display: inline-block;
  font-size: 0.8em;
  opacity: 0.7;
`;

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
  stack4,
  stack4_etc,
  stack4_score,
  reason4,
  stack5,
  stack5_etc,
  stack5_score,
  reason5,
  handleSubmit,
  updateTerm,
  tagUpdate1,
  sliderUpdate1,
  tagUpdate2,
  sliderUpdate2,
  tagUpdate3,
  sliderUpdate3,
  tagUpdate4,
  sliderUpdate4,
  tagUpdate5,
  sliderUpdate5,
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
    <Card>
      <Container>
        <Title>포트폴리오에 들어갈 내용을 정리해 보아요!</Title>

        <Title>{name}님의 개발 역량을 체크해주세요</Title>
        <Block>
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
            style={{ width: 300 }}
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
        </Block>
        {stack1 && stack1_score >= 0 && reason1 && (
          <Block>
            <Todo>
              2. 다음으로 자신있는 프로그래밍 언어 / 프레임워크 / 시스템을
              선택해주세요
            </Todo>
            <Description>
              아래 보기 중 원하는 기술이 없다면 '기타'를 선택해주세요
            </Description>
            <Autocomplete
              options={stack}
              getOptionLabel={option => option}
              style={{ width: 300 }}
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
            <Description>
              100점을 만점으로 자신의 실력을 평가해보세요
            </Description>
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
          </Block>
        )}
        {stack2 && stack2_score >= 0 && reason2 && (
          <Block>
            <Todo>
              3. 세번째로 자신있는 프로그래밍 언어 / 프레임워크 / 시스템을
              선택해주세요
            </Todo>
            <Description>
              아래 보기 중 원하는 기술이 없다면 '기타'를 선택해주세요
            </Description>
            <Autocomplete
              options={stack}
              getOptionLabel={option => option}
              style={{ width: 300 }}
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
            <Description>
              100점을 만점으로 자신의 실력을 평가해보세요
            </Description>
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
          </Block>
        )}
        {stack3 && stack3_score >= 0 && reason3 && (
          <Block>
            <Todo>
              4. 네번째로 자신있는 프로그래밍 언어 / 프레임워크 / 시스템을
              선택해주세요
            </Todo>
            <Description>
              아래 보기 중 원하는 기술이 없다면 '기타'를 선택해주세요
            </Description>
            <Autocomplete
              options={stack}
              getOptionLabel={option => option}
              style={{ width: 300 }}
              onChange={tagUpdate4}
              renderInput={params => (
                <TextField {...params} label="Stack" variant="outlined" />
              )}
            />
            {stack4_etc && (
              <TextField
                label="직접 입력해주세요"
                onChange={updateTerm}
                name="stack4"
                value={stack4}
              ></TextField>
            )}
            <br />
            <Todo>어느정도 자신있으신가요?</Todo>
            <br />
            <Description>
              100점을 만점으로 자신의 실력을 평가해보세요
            </Description>
            <div className={classes.motion}>
              <Slider
                onChange={sliderUpdate4}
                getAriaValueText={valuetext}
                step={5}
                valueLabelDisplay="auto"
                value={stack4_score}
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
                name="reason4"
                value={reason4}
              ></TextField>
            </form>
          </Block>
        )}
        {stack4 && stack4_score >= 0 && reason4 && (
          <Block>
            <Todo>
              5. 마지막으로 자신있는 프로그래밍 언어 / 프레임워크 / 시스템을
              선택해주세요
            </Todo>
            <Description>
              아래 보기 중 원하는 기술이 없다면 '기타'를 선택해주세요
            </Description>
            <Autocomplete
              options={stack}
              getOptionLabel={option => option}
              style={{ width: 300 }}
              onChange={tagUpdate5}
              renderInput={params => (
                <TextField {...params} label="Stack" variant="outlined" />
              )}
            />
            {stack5_etc && (
              <TextField
                label="직접 입력해주세요"
                onChange={updateTerm}
                name="stack5"
                value={stack5}
              ></TextField>
            )}
            <br />
            <Todo>어느정도 자신있으신가요?</Todo>
            <br />
            <Description>
              100점을 만점으로 자신의 실력을 평가해보세요
            </Description>
            <div className={classes.motion}>
              <Slider
                onChange={sliderUpdate5}
                getAriaValueText={valuetext}
                step={5}
                valueLabelDisplay="auto"
                value={stack5_score}
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
                name="reason5"
                value={reason5}
              ></TextField>
            </form>
          </Block>
        )}
        <div className={classes.pageButtonLeft}>
          <Link to={{ pathname: "/plus/portfolio" }}>
            <Fab color="primary" aria-label="before">
              <ChevronLeft />
            </Fab>
          </Link>
        </div>
        <div className={classes.pageButtonRight}>
          <Link to={{ pathname: "/plus/3/portfolio" }}>
            <Fab color="primary" aria-label="next">
              <ChevronRight />
            </Fab>
          </Link>
        </div>
      </Container>
    </Card>
  );
}

export default PortfolioPresenter;
