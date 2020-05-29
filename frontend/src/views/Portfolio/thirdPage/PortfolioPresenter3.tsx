import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Fab from "@material-ui/core/Fab";
import Add from "@material-ui/icons/Add";
import Minus from "@material-ui/icons/Remove";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import Checkbox from "@material-ui/core/Checkbox";

interface PortfolioIState {
  useStyles: any;
  name: string;
  projectLen: number;
  projectName1: string;
  projectTerm1: string;
  projectDesc1: string;
  projectStack1: string;
  projectDo11: string;
  projectDo12: string;
  projectDo13: string;
  projectUrl1: string;
  error1: boolean;
  frontend1: boolean;
  backend1: boolean;
  fullstack1: boolean;
  android1: boolean;
  IOS1: boolean;
  game1: boolean;
  ARVR1: boolean;
  block1: boolean;
  machine1: boolean;
  data1: boolean;
  etc1: boolean;
  projectName2: string;
  projectTerm2: string;
  projectDesc2: string;
  projectStack2: string;
  projectDo21: string;
  projectDo22: string;
  projectDo23: string;
  projectUrl2: string;
  error2: boolean;
  frontend2: boolean;
  backend2: boolean;
  fullstack2: boolean;
  android2: boolean;
  IOS2: boolean;
  game2: boolean;
  ARVR2: boolean;
  block2: boolean;
  machine2: boolean;
  data2: boolean;
  etc2: boolean;
  projectName3: string;
  projectTerm3: string;
  projectDesc3: string;
  projectStack3: string;
  projectDo31: string;
  projectDo32: string;
  projectDo33: string;
  projectUrl3: string;
  error3: boolean;
  frontend3: boolean;
  backend3: boolean;
  fullstack3: boolean;
  android3: boolean;
  IOS3: boolean;
  game3: boolean;
  ARVR3: boolean;
  block3: boolean;
  machine3: boolean;
  data3: boolean;
  etc3: boolean;
  projectName4: string;
  projectTerm4: string;
  projectDesc4: string;
  projectStack4: string;
  projectDo41: string;
  projectDo42: string;
  projectDo43: string;
  projectUrl4: string;
  error4: boolean;
  frontend4: boolean;
  backend4: boolean;
  fullstack4: boolean;
  android4: boolean;
  IOS4: boolean;
  game4: boolean;
  ARVR4: boolean;
  block4: boolean;
  machine4: boolean;
  data4: boolean;
  etc4: boolean;
  handleSubmit: (event: React.FormEvent) => void;
  handleAdd: (event: React.FormEvent) => void;
  handleMinus: (event: React.FormEvent) => void;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  updateTerm: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
const Card = styled.div`
  display: flex;
  justify-content: center;
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
  padding: 35px 5px 5px 0px;
  width: auto;
`;
const Description = styled.span`
  display: inline-block;
  font-size: 0.8em;
  opacity: 0.7;
`;
const Project = styled.div`
  margin-top: 50px;
`;

const AddButton = styled.div`
  display: inline-block;
`;
const MinusButton = styled.div`
  display: inline-block;
`;
const DoIDid = styled.span`
  display: block;
  font-size: 0.9em;
  height: 0.8em;
  font-weight: 500;
`;
const DoIDidNo = styled.div`
  display: inline-block;
  width: 0.4em;
  transform: translateX(20%) translateY(10%);
  height: 3em;
  font-weight: 600;
  font-size: 0.9em;
`;

function PortfolioPresenter({
  useStyles,
  name,
  projectLen,
  projectName1,
  projectTerm1,
  projectDesc1,
  projectStack1,
  projectDo11,
  projectDo12,
  projectDo13,
  projectUrl1,
  error1,
  frontend1,
  backend1,
  fullstack1,
  android1,
  IOS1,
  game1,
  ARVR1,
  block1,
  machine1,
  data1,
  etc1,
  projectName2,
  projectTerm2,
  projectDesc2,
  projectStack2,
  projectDo21,
  projectDo22,
  projectDo23,
  projectUrl2,
  error2,
  frontend2,
  backend2,
  fullstack2,
  android2,
  IOS2,
  game2,
  ARVR2,
  block2,
  machine2,
  data2,
  etc2,
  projectName3,
  projectTerm3,
  projectDesc3,
  projectStack3,
  projectDo31,
  projectDo32,
  projectDo33,
  projectUrl3,
  error3,
  frontend3,
  backend3,
  fullstack3,
  android3,
  IOS3,
  game3,
  ARVR3,
  block3,
  machine3,
  data3,
  etc3,
  projectName4,
  projectTerm4,
  projectDesc4,
  projectStack4,
  projectDo41,
  projectDo42,
  projectDo43,
  projectUrl4,
  error4,
  frontend4,
  backend4,
  fullstack4,
  android4,
  IOS4,
  game4,
  ARVR4,
  block4,
  machine4,
  data4,
  etc4,
  handleSubmit,
  handleAdd,
  handleMinus,
  handleChange,
  updateTerm,
}: PortfolioIState) {
  const classes = useStyles();

  return (
    <Card>
      <Container>
        <div>
          <Project>
            <Title>
              {name}님의 포트폴리오에 기재할 프로젝트 경험을 작성해주세요
            </Title>
            <Todo>프로젝트의 이름은 무엇인가요?</Todo>
            <form
              className={classes.projectName}
              noValidate
              autoComplete="off"
              onSubmit={handleSubmit}
            >
              <TextField
                label="프로젝트 이름"
                onChange={updateTerm}
                name="projectName1"
                value={projectName1}
              ></TextField>
            </form>
            <Todo>프로젝트 기간을 알려주세요</Todo>
            <br />
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
                name="projectTerm1"
                value={projectTerm1}
              ></TextField>
            </form>
            <Todo>프로젝트를 한줄로 소개해주세요</Todo>
            <br />
            <form
              className={classes.projectDesc}
              noValidate
              autoComplete="off"
              onSubmit={handleSubmit}
            >
              <TextField
                label="프로젝트 소개"
                helperText="ex) AI를 이용한 카메라 앱"
                onChange={updateTerm}
                name="projectDesc1"
                value={projectDesc1}
              ></TextField>
            </form>
            <br />
            <Todo>본인의 역할은 무엇이었습니까?</Todo> <br />
            <div className={classes.feature}>
              <FormControl
                required
                error={error1}
                component="fieldset"
                className={classes.formControl}
              >
                <FormGroup className={classes.feature} row={true}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={frontend1}
                        onChange={handleChange}
                        name="frontend1"
                      />
                    }
                    className={classes.label}
                    label="프론트엔드 엔지니어"
                  />
                </FormGroup>
                <FormGroup className={classes.feature}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={backend1}
                        onChange={handleChange}
                        name="backend1"
                      />
                    }
                    className={classes.label}
                    label="백엔드 엔지니어"
                  />
                </FormGroup>
                <FormGroup className={classes.feature}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={fullstack1}
                        onChange={handleChange}
                        name="fullstack1"
                      />
                    }
                    className={classes.label}
                    label="풀스택 엔지니어"
                  />
                </FormGroup>
                <FormGroup className={classes.feature}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={android1}
                        onChange={handleChange}
                        name="android1"
                      />
                    }
                    className={classes.label}
                    label="안드로이드 엔지니어"
                  />
                </FormGroup>
                <FormGroup className={classes.feature}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={IOS1}
                        onChange={handleChange}
                        name="IOS1"
                      />
                    }
                    className={classes.label}
                    label="iOS 엔지니어"
                  />
                </FormGroup>
                <FormGroup className={classes.feature}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={game1}
                        onChange={handleChange}
                        name="game1"
                      />
                    }
                    className={classes.label}
                    label="게임 엔지니어"
                  />
                </FormGroup>
                <FormGroup className={classes.feature}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={ARVR1}
                        onChange={handleChange}
                        name="ARVR1"
                      />
                    }
                    className={classes.label}
                    label="AR/VR 엔지니어"
                  />
                </FormGroup>
                <FormGroup className={classes.feature}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={block1}
                        onChange={handleChange}
                        name="block1"
                      />
                    }
                    className={classes.label}
                    label="블록체인 엔지니어"
                  />
                </FormGroup>
                <FormGroup className={classes.feature}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={machine1}
                        onChange={handleChange}
                        name="machine1"
                      />
                    }
                    className={classes.label}
                    label="머신러닝 엔지니어"
                  />
                </FormGroup>
                <FormGroup className={classes.feature}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={data1}
                        onChange={handleChange}
                        name="data1"
                      />
                    }
                    className={classes.label}
                    label="데이터 엔지니어"
                  />
                </FormGroup>
                <FormGroup className={classes.feature}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={etc1}
                        onChange={handleChange}
                        name="etc1"
                      />
                    }
                    className={classes.label}
                    label="기타"
                  />
                </FormGroup>
                {error1 && (
                  <FormHelperText>1 ~ 3개를 선택해주세요</FormHelperText>
                )}
              </FormControl>
            </div>
            <form
              className={classes.projectStack}
              noValidate
              autoComplete="off"
              onSubmit={handleSubmit}
            >
              <Todo>프로젝트에 사용된 기술을 적어주세요</Todo>
              <br />
              <TextField
                label="프로젝트 주요 스택"
                helperText="ex. React, Spring, MySQL, AWS"
                onChange={updateTerm}
                name="projectStack1"
                value={projectStack1}
              ></TextField>
            </form>
            <br />
            <Todo>프로젝트에서 맡은 역할을 적어주세요</Todo>
            <form
              className={classes.projectDo}
              noValidate
              autoComplete="off"
              onSubmit={handleSubmit}
            >
              <DoIDid>자신의 역할을 간략히 적어보세요</DoIDid>
              <DoIDidNo>1. </DoIDidNo>
              <TextField
                helperText="ex. REST API 모델 설계 및 구현"
                onChange={updateTerm}
                name="projectDo11"
                value={projectDo11}
              ></TextField>
              <br />
              <DoIDidNo>2. </DoIDidNo>
              <TextField
                helperText="ex. React OO 컴포넌트 제작"
                onChange={updateTerm}
                name="projectDo12"
                value={projectDo12}
              ></TextField>
              <br />
              <DoIDidNo>3. </DoIDidNo>
              <TextField
                helperText="더 있으시다면 추가로 적어보세요!"
                onChange={updateTerm}
                name="projectDo13"
                value={projectDo13}
              ></TextField>
            </form>
            <form
              className={classes.projectUrl}
              noValidate
              autoComplete="off"
              onSubmit={handleSubmit}
            >
              <Todo>프로젝트를 소개할 수 있는 Url을 적어주세요</Todo>
              <br />
              <TextField
                label="프로젝트 URL"
                helperText="Git 주소나 소개영상 링크도 좋아요!"
                onChange={updateTerm}
                name="projectUrl1"
                value={projectUrl1}
              ></TextField>
            </form>
          </Project>
          {projectLen > 1 && (
            <Project>
              <Title>2. 추가 프로젝트 경험을 작성해주세요</Title>
              <Todo>프로젝트의 이름은 무엇인가요?</Todo>
              <form
                className={classes.projectStack}
                noValidate
                autoComplete="off"
                onSubmit={handleSubmit}
              >
                <TextField
                  label="프로젝트 이름"
                  helperText="ex) 반응형 웹사이트 제작 가능, REST API 백엔드 구축 가능"
                  onChange={updateTerm}
                  name="projectName2"
                  value={projectName2}
                ></TextField>
              </form>
              <Todo>프로젝트 기간을 알려주세요</Todo>
              <br />
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
                  name="projectTerm2"
                  value={projectTerm2}
                ></TextField>
              </form>
              <Todo>프로젝트를 한줄로 소개해주세요</Todo>
              <br />
              <Description>ex. AI를 이용한 카메라앱 </Description>
              <form
                className={classes.projectDesc}
                noValidate
                autoComplete="off"
                onSubmit={handleSubmit}
              >
                <TextField
                  label="프로젝트 이름"
                  helperText="ex) 반응형 웹사이트 제작 가능, REST API 백엔드 구축 가능"
                  onChange={updateTerm}
                  name="projectDesc2"
                  value={projectDesc2}
                ></TextField>
              </form>
              <br />
              <Todo>본인의 역할은 무엇이었습니까?</Todo> <br />
              <div className={classes.feature}>
                <FormControl
                  required
                  error={error2}
                  component="fieldset"
                  className={classes.formControl}
                >
                  <FormGroup className={classes.feature} row={true}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={frontend2}
                          onChange={handleChange}
                          name="frontend2"
                        />
                      }
                      className={classes.label}
                      label="프론트엔드 엔지니어"
                    />
                  </FormGroup>
                  <FormGroup className={classes.feature}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={backend2}
                          onChange={handleChange}
                          name="backend2"
                        />
                      }
                      className={classes.label}
                      label="백엔드 엔지니어"
                    />
                  </FormGroup>
                  <FormGroup className={classes.feature}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={fullstack2}
                          onChange={handleChange}
                          name="fullstack2"
                        />
                      }
                      className={classes.label}
                      label="풀스택 엔지니어"
                    />
                  </FormGroup>
                  <FormGroup className={classes.feature}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={android2}
                          onChange={handleChange}
                          name="android2"
                        />
                      }
                      className={classes.label}
                      label="안드로이드 엔지니어"
                    />
                  </FormGroup>
                  <FormGroup className={classes.feature}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={IOS2}
                          onChange={handleChange}
                          name="IOS2"
                        />
                      }
                      className={classes.label}
                      label="iOS 엔지니어"
                    />
                  </FormGroup>
                  <FormGroup className={classes.feature}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={game2}
                          onChange={handleChange}
                          name="game2"
                        />
                      }
                      className={classes.label}
                      label="게임 엔지니어"
                    />
                  </FormGroup>
                  <FormGroup className={classes.feature}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={ARVR2}
                          onChange={handleChange}
                          name="ARVR2"
                        />
                      }
                      className={classes.label}
                      label="AR/VR 엔지니어"
                    />
                  </FormGroup>
                  <FormGroup className={classes.feature}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={block2}
                          onChange={handleChange}
                          name="block2"
                        />
                      }
                      className={classes.label}
                      label="블록체인 엔지니어"
                    />
                  </FormGroup>
                  <FormGroup className={classes.feature}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={machine2}
                          onChange={handleChange}
                          name="machine2"
                        />
                      }
                      className={classes.label}
                      label="머신러닝 엔지니어"
                    />
                  </FormGroup>
                  <FormGroup className={classes.feature}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={data2}
                          onChange={handleChange}
                          name="data2"
                        />
                      }
                      className={classes.label}
                      label="데이터 엔지니어"
                    />
                  </FormGroup>
                  <FormGroup className={classes.feature}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={etc2}
                          onChange={handleChange}
                          name="etc2"
                        />
                      }
                      className={classes.label}
                      label="기타"
                    />
                  </FormGroup>
                  {error2 && (
                    <FormHelperText>1 ~ 3개를 선택해주세요</FormHelperText>
                  )}
                </FormControl>
              </div>
              <form
                className={classes.projectStack}
                noValidate
                autoComplete="off"
                onSubmit={handleSubmit}
              >
                <Todo>프로젝트에 사용된 기술을 적어주세요</Todo>
                <br />
                <TextField
                  label="프로젝트 주요 스택"
                  helperText="ex. React, Spring, MySQL, AWS"
                  onChange={updateTerm}
                  name="projectStack2"
                  value={projectStack2}
                ></TextField>
              </form>
              <br />
              <Todo>프로젝트에서 맡은 역할을 적어주세요</Todo>
              <form
                className={classes.projectDo}
                noValidate
                autoComplete="off"
                onSubmit={handleSubmit}
              >
                <DoIDid>자신의 역할을 간략히 적어보세요</DoIDid>
                <DoIDidNo>1. </DoIDidNo>
                <TextField
                  helperText="ex. REST API 모델 설계 및 구현"
                  onChange={updateTerm}
                  name="projectDo21"
                  value={projectDo21}
                ></TextField>
                <br />
                <DoIDidNo>2. </DoIDidNo>
                <TextField
                  helperText="ex. React OO 컴포넌트 제작"
                  onChange={updateTerm}
                  name="projectDo22"
                  value={projectDo22}
                ></TextField>
                <br />
                <DoIDidNo>3. </DoIDidNo>
                <TextField
                  helperText="더 있으시다면 추가로 적어보세요!"
                  onChange={updateTerm}
                  name="projectDo23"
                  value={projectDo23}
                ></TextField>
              </form>
              <form
                className={classes.projectUrl}
                noValidate
                autoComplete="off"
                onSubmit={handleSubmit}
              >
                <Todo>프로젝트를 소개할 수 있는 Url을 적어주세요</Todo>
                <br />
                <TextField
                  label="프로젝트 URL"
                  helperText="Git 주소나 소개영상 링크도 좋아요!"
                  onChange={updateTerm}
                  name="projectUrl2"
                  value={projectUrl2}
                ></TextField>
              </form>
            </Project>
          )}
          {projectLen > 2 && (
            <Project>
              <Title>3. 추가 프로젝트 경험을 작성해주세요</Title>
              <Todo>프로젝트의 이름은 무엇인가요?</Todo>
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
                  name="projectName3"
                  value={projectName3}
                ></TextField>
              </form>
              <Todo>프로젝트 기간을 알려주세요</Todo>
              <br />
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
                  name="projectTerm3"
                  value={projectTerm3}
                ></TextField>
              </form>
              <Todo>프로젝트를 한줄로 소개해주세요</Todo>
              <br />
              <Description>ex. AI를 이용한 카메라앱 </Description>
              <form
                className={classes.projectDesc}
                noValidate
                autoComplete="off"
                onSubmit={handleSubmit}
              >
                <TextField
                  label="프로젝트 이름"
                  helperText="ex) 반응형 웹사이트 제작 가능, REST API 백엔드 구축 가능"
                  onChange={updateTerm}
                  name="projectDesc3"
                  value={projectDesc3}
                ></TextField>
              </form>
              <br />
              <Todo>본인의 역할은 무엇이었습니까?</Todo> <br />
              <div className={classes.feature}>
                <FormControl
                  required
                  error={error3}
                  component="fieldset"
                  className={classes.formControl}
                >
                  <FormGroup className={classes.feature} row={true}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={frontend3}
                          onChange={handleChange}
                          name="frontend3"
                        />
                      }
                      className={classes.label}
                      label="프론트엔드 엔지니어"
                    />
                  </FormGroup>
                  <FormGroup className={classes.feature}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={backend3}
                          onChange={handleChange}
                          name="backend3"
                        />
                      }
                      className={classes.label}
                      label="백엔드 엔지니어"
                    />
                  </FormGroup>
                  <FormGroup className={classes.feature}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={fullstack3}
                          onChange={handleChange}
                          name="fullstack3"
                        />
                      }
                      className={classes.label}
                      label="풀스택 엔지니어"
                    />
                  </FormGroup>
                  <FormGroup className={classes.feature}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={android3}
                          onChange={handleChange}
                          name="android3"
                        />
                      }
                      className={classes.label}
                      label="안드로이드 엔지니어"
                    />
                  </FormGroup>
                  <FormGroup className={classes.feature}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={IOS3}
                          onChange={handleChange}
                          name="IOS3"
                        />
                      }
                      className={classes.label}
                      label="iOS 엔지니어"
                    />
                  </FormGroup>
                  <FormGroup className={classes.feature}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={game3}
                          onChange={handleChange}
                          name="game3"
                        />
                      }
                      className={classes.label}
                      label="게임 엔지니어"
                    />
                  </FormGroup>
                  <FormGroup className={classes.feature}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={ARVR3}
                          onChange={handleChange}
                          name="ARVR3"
                        />
                      }
                      className={classes.label}
                      label="AR/VR 엔지니어"
                    />
                  </FormGroup>
                  <FormGroup className={classes.feature}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={block3}
                          onChange={handleChange}
                          name="block3"
                        />
                      }
                      className={classes.label}
                      label="블록체인 엔지니어"
                    />
                  </FormGroup>
                  <FormGroup className={classes.feature}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={machine3}
                          onChange={handleChange}
                          name="machine3"
                        />
                      }
                      className={classes.label}
                      label="머신러닝 엔지니어"
                    />
                  </FormGroup>
                  <FormGroup className={classes.feature}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={data3}
                          onChange={handleChange}
                          name="data3"
                        />
                      }
                      className={classes.label}
                      label="데이터 엔지니어"
                    />
                  </FormGroup>
                  <FormGroup className={classes.feature}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={etc3}
                          onChange={handleChange}
                          name="etc3"
                        />
                      }
                      className={classes.label}
                      label="기타"
                    />
                  </FormGroup>
                  {error3 && (
                    <FormHelperText>1 ~ 3개를 선택해주세요</FormHelperText>
                  )}
                </FormControl>
              </div>
              <form
                className={classes.projectStack}
                noValidate
                autoComplete="off"
                onSubmit={handleSubmit}
              >
                <Todo>프로젝트에 사용된 기술을 적어주세요</Todo>
                <br />
                <TextField
                  label="프로젝트 주요 스택"
                  helperText="ex. React, Spring, MySQL, AWS"
                  onChange={updateTerm}
                  name="projectStack3"
                  value={projectStack3}
                ></TextField>
              </form>
              <br />
              <Todo>프로젝트에서 맡은 역할을 적어주세요</Todo>
              <form
                className={classes.projectDo}
                noValidate
                autoComplete="off"
                onSubmit={handleSubmit}
              >
                <DoIDid>자신의 역할을 간략히 적어보세요</DoIDid>
                <DoIDidNo>1. </DoIDidNo>
                <TextField
                  helperText="ex. REST API 모델 설계 및 구현"
                  onChange={updateTerm}
                  name="projectDo31"
                  value={projectDo31}
                ></TextField>
                <br />
                <DoIDidNo>2. </DoIDidNo>
                <TextField
                  helperText="ex. React OO 컴포넌트 제작"
                  onChange={updateTerm}
                  name="projectDo32"
                  value={projectDo32}
                ></TextField>
                <br />
                <DoIDidNo>3. </DoIDidNo>
                <TextField
                  helperText="더 있으시다면 추가로 적어보세요!"
                  onChange={updateTerm}
                  name="projectDo33"
                  value={projectDo33}
                ></TextField>
              </form>
              <form
                className={classes.projectUrl}
                noValidate
                autoComplete="off"
                onSubmit={handleSubmit}
              >
                <Todo>프로젝트를 소개할 수 있는 Url을 적어주세요</Todo>
                <br />
                <TextField
                  label="프로젝트 URL"
                  helperText="Git 주소나 소개영상 링크도 좋아요!"
                  onChange={updateTerm}
                  name="projectUrl3"
                  value={projectUrl3}
                ></TextField>
              </form>
            </Project>
          )}
          {projectLen > 3 && (
            <Project>
              <Title>4. 추가 프로젝트 경험을 작성해주세요</Title>
              <Todo>프로젝트의 이름은 무엇인가요?</Todo>
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
                  name="projectName4"
                  value={projectName4}
                ></TextField>
              </form>
              <Todo>프로젝트 기간을 알려주세요</Todo>
              <br />
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
                  name="projectTerm4"
                  value={projectTerm4}
                ></TextField>
              </form>
              <Todo>프로젝트를 한줄로 소개해주세요</Todo>
              <br />
              <Description>ex. AI를 이용한 카메라앱 </Description>
              <form
                className={classes.projectDesc}
                noValidate
                autoComplete="off"
                onSubmit={handleSubmit}
              >
                <TextField
                  label="프로젝트 이름"
                  helperText="ex) 반응형 웹사이트 제작 가능, REST API 백엔드 구축 가능"
                  onChange={updateTerm}
                  name="projectDesc4"
                  value={projectDesc4}
                ></TextField>
              </form>
              <br />
              <Todo>본인의 역할은 무엇이었습니까?</Todo> <br />
              <div className={classes.feature}>
                <FormControl
                  required
                  error={error3}
                  component="fieldset"
                  className={classes.formControl}
                >
                  <FormGroup className={classes.feature} row={true}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={frontend4}
                          onChange={handleChange}
                          name="frontend4"
                        />
                      }
                      className={classes.label}
                      label="프론트엔드 엔지니어"
                    />
                  </FormGroup>
                  <FormGroup className={classes.feature}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={backend4}
                          onChange={handleChange}
                          name="backend4"
                        />
                      }
                      className={classes.label}
                      label="백엔드 엔지니어"
                    />
                  </FormGroup>
                  <FormGroup className={classes.feature}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={fullstack4}
                          onChange={handleChange}
                          name="fullstack4"
                        />
                      }
                      className={classes.label}
                      label="풀스택 엔지니어"
                    />
                  </FormGroup>
                  <FormGroup className={classes.feature}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={android4}
                          onChange={handleChange}
                          name="android4"
                        />
                      }
                      className={classes.label}
                      label="안드로이드 엔지니어"
                    />
                  </FormGroup>
                  <FormGroup className={classes.feature}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={IOS4}
                          onChange={handleChange}
                          name="IOS4"
                        />
                      }
                      className={classes.label}
                      label="iOS 엔지니어"
                    />
                  </FormGroup>
                  <FormGroup className={classes.feature}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={game4}
                          onChange={handleChange}
                          name="game4"
                        />
                      }
                      className={classes.label}
                      label="게임 엔지니어"
                    />
                  </FormGroup>
                  <FormGroup className={classes.feature}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={ARVR4}
                          onChange={handleChange}
                          name="ARVR4"
                        />
                      }
                      className={classes.label}
                      label="AR/VR 엔지니어"
                    />
                  </FormGroup>
                  <FormGroup className={classes.feature}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={block4}
                          onChange={handleChange}
                          name="block4"
                        />
                      }
                      className={classes.label}
                      label="블록체인 엔지니어"
                    />
                  </FormGroup>
                  <FormGroup className={classes.feature}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={machine4}
                          onChange={handleChange}
                          name="machine4"
                        />
                      }
                      className={classes.label}
                      label="머신러닝 엔지니어"
                    />
                  </FormGroup>
                  <FormGroup className={classes.feature}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={data4}
                          onChange={handleChange}
                          name="data4"
                        />
                      }
                      className={classes.label}
                      label="데이터 엔지니어"
                    />
                  </FormGroup>
                  <FormGroup className={classes.feature}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={etc4}
                          onChange={handleChange}
                          name="etc4"
                        />
                      }
                      className={classes.label}
                      label="기타"
                    />
                  </FormGroup>
                  {error4 && (
                    <FormHelperText>1 ~ 3개를 선택해주세요</FormHelperText>
                  )}
                </FormControl>
              </div>
              <form
                className={classes.projectStack}
                noValidate
                autoComplete="off"
                onSubmit={handleSubmit}
              >
                <Todo>프로젝트에 사용된 기술을 적어주세요</Todo>
                <br />
                <TextField
                  label="프로젝트 주요 스택"
                  helperText="ex. React, Spring, MySQL, AWS"
                  onChange={updateTerm}
                  name="projectStack4"
                  value={projectStack4}
                ></TextField>
              </form>
              <br />
              <Todo>프로젝트에서 맡은 역할을 적어주세요</Todo>
              <form
                className={classes.projectDo}
                noValidate
                autoComplete="off"
                onSubmit={handleSubmit}
              >
                <DoIDid>자신의 역할을 간략히 적어보세요</DoIDid>
                <DoIDidNo>1. </DoIDidNo>
                <TextField
                  helperText="ex. REST API 모델 설계 및 구현"
                  onChange={updateTerm}
                  name="projectDo41"
                  value={projectDo41}
                ></TextField>
                <br />
                <DoIDidNo>2. </DoIDidNo>
                <TextField
                  helperText="ex. React OO 컴포넌트 제작"
                  onChange={updateTerm}
                  name="projectDo42"
                  value={projectDo42}
                ></TextField>
                <br />
                <DoIDidNo>3. </DoIDidNo>
                <TextField
                  helperText="더 있으시다면 추가로 적어보세요!"
                  onChange={updateTerm}
                  name="projectDo43"
                  value={projectDo43}
                ></TextField>
              </form>
              <form
                className={classes.projectUrl}
                noValidate
                autoComplete="off"
                onSubmit={handleSubmit}
              >
                <Todo>프로젝트를 소개할 수 있는 Url을 적어주세요</Todo>
                <br />
                <TextField
                  label="프로젝트 URL"
                  helperText="Git 주소나 소개영상 링크도 좋아요!"
                  onChange={updateTerm}
                  name="projectUrl4"
                  value={projectUrl4}
                ></TextField>
              </form>
            </Project>
          )}
          {projectLen > 1 && (
            <MinusButton className={classes.AMButton}>
              <Fab color="primary" aria-label="next" size="small">
                <Minus fontSize="small" onClick={handleMinus} />
              </Fab>
            </MinusButton>
          )}
          {projectLen !== 4 && (
            <AddButton className={classes.AMButton}>
              <Fab color="primary" aria-label="next" size="small">
                <Add fontSize="small" onClick={handleAdd} />
              </Fab>
            </AddButton>
          )}
          <div className={classes.pageButtonLeft}>
            <Link to={{ pathname: "/plus/portfolio/2/1" }}>
              <Fab color="primary" aria-label="next">
                <ChevronLeft />
              </Fab>
            </Link>
          </div>
          <div className={classes.pageButtonRight}>
            <Link to={{ pathname: "/plus/portfolio/result/1" }}>
              <Fab color="primary" aria-label="next">
                <ChevronRight />
              </Fab>
            </Link>
          </div>
        </div>
      </Container>
    </Card>
  );
}

export default PortfolioPresenter;
