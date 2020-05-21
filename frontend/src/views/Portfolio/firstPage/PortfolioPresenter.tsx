import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styled from "styled-components";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import Checkbox from "@material-ui/core/Checkbox";
import Fab from "@material-ui/core/Fab";
import ChevronRight from "@material-ui/icons/ChevronRight";

interface PortfolioIState {
  name: string;
  useStyles: any;
  years: number[];
  year: number;
  months: number[];
  month: number;
  days: number[];
  day: number;
  phone: string;
  customer: boolean; // 고객지향
  national: boolean; // 국제적인
  positive: boolean; // 긍정적인
  steady: boolean; // 꾸준한
  versatile: boolean; // 다재다능한
  reliable: boolean; // 듬직한
  goal: boolean; // 목표지향적인
  bright: boolean; // 밝은
  learner: boolean; // 빨리배우는
  sincere: boolean; // 성실한
  communicating: boolean; // 소통하는
  doing: boolean; // 실행력
  passionate: boolean; // 열정적인
  polite: boolean; // 예의바른
  perfective: boolean; // 완벽주의
  principles: boolean; // 원칙적인
  flexible: boolean; // 유연한
  patience: boolean; // 인내심
  active: boolean; // 적극적인
  honesty: boolean; // 정직한
  creative: boolean; // 창의적인
  responsibility: boolean; //책임감
  best: boolean; // 최고의
  leading: boolean; // 팀을이끄는
  committed: boolean; // 헌신적인
  innovative: boolean; // 혁신적인
  realistic: boolean; // 현실적인
  cooperative: boolean; // 협동적인
  handleSubmit: (event: React.FormEvent) => void;
  updateTerm: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  error: boolean;
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
const BirthDivider = styled.span``;

function PortfolioPresenter({
  name,
  useStyles,
  years,
  year,
  months,
  month,
  days,
  day,
  phone,
  handleSubmit,
  updateTerm,
  handleChange,
  error,
  customer,
  national,
  positive,
  steady,
  versatile,
  reliable,
  goal,
  bright,
  learner,
  sincere,
  communicating,
  doing,
  passionate,
  polite,
  perfective,
  principles,
  flexible,
  patience,
  active,
  honesty,
  creative,
  responsibility,
  best,
  leading,
  committed,
  innovative,
  realistic,
  cooperative,
}: PortfolioIState) {
  const classes = useStyles();
  return (
    <>
      <Container>
        <Title>당신의 포트폴리오를 만들어보세요!</Title>
        <SubTitle>기본 정보</SubTitle>
        <Todo>이름을 입력해주세요</Todo>
        <Description>
          이력서에 들어갈 한글이름으로 정확하게 입력해주세요
        </Description>
        <form
          className={classes.name}
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <TextField
            label="이름"
            helperText="ex) 김싸피"
            onChange={updateTerm}
            name="name"
          ></TextField>
        </form>
        <Name>{name}</Name>
        <Todo>님의 생년월일을 입력해주세요</Todo>
        <form
          className={classes.birth}
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <TextField
            select
            value={year}
            helperText="생년"
            onChange={updateTerm}
            name="year"
          >
            {years.map(option => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>
          <BirthDivider>/</BirthDivider>
          <TextField
            select
            value={month}
            helperText="월"
            onChange={updateTerm}
            name="month"
          >
            {months.map(option => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>
          <BirthDivider>/</BirthDivider>
          <TextField
            select
            value={day}
            helperText="일"
            onChange={updateTerm}
            name="day"
          >
            {days.map(option => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>
        </form>
        <Name>{name}</Name>
        <Todo>님의 이메일을 입력해주세요</Todo>
        <Description>
          포트폴리오에 입력되는 이메일입니다.
          <br />
          스팸메일을 보내지 않으니 걱정하지 마세요😅
        </Description>
        <form
          className={classes.email}
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <TextField
            label="이메일"
            helperText="ex) ssafy@gmail.com"
            onChange={updateTerm}
            name="email"
          ></TextField>
        </form>
        <Name>{name}</Name>
        <Todo>님의 연락처를 입력해주세요</Todo>
        <Description>
          포트폴리오에 입력되는 연락처입니다.
          <br />
        </Description>
        <form
          className={classes.phone}
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <TextField
            label="휴대전화 번호"
            helperText="숫자만 입력해주세요"
            onChange={updateTerm}
            name="phone"
            value={phone}
          ></TextField>
        </form>
        <div className={classes.feature}>
          <FormControl
            required
            error={error}
            component="fieldset"
            className={classes.formControl}
          >
            <FormLabel component="legend">Pick Four</FormLabel>
            <FormGroup className={classes.feature}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={customer}
                    onChange={handleChange}
                    name="customer"
                  />
                }
                className={classes.label}
                label="고객지향"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={national}
                    onChange={handleChange}
                    name="national"
                  />
                }
                className={classes.label}
                label="국제적인"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={positive}
                    onChange={handleChange}
                    name="positive"
                  />
                }
                className={classes.label}
                label="긍정적인"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={steady}
                    onChange={handleChange}
                    name="steady"
                  />
                }
                className={classes.label}
                label="꾸준한"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={versatile}
                    onChange={handleChange}
                    name="versatile"
                  />
                }
                className={classes.label}
                label="다재다능한"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={reliable}
                    onChange={handleChange}
                    name="reliable"
                  />
                }
                className={classes.label}
                label="듬직한"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={goal}
                    onChange={handleChange}
                    name="goal"
                  />
                }
                className={classes.label}
                label="목표지향"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={bright}
                    onChange={handleChange}
                    name="bright"
                  />
                }
                className={classes.label}
                label="밝은"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={learner}
                    onChange={handleChange}
                    name="learner"
                  />
                }
                className={classes.label}
                label="빨리 배우는"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={sincere}
                    onChange={handleChange}
                    name="sincere"
                  />
                }
                className={classes.label}
                label="성실한"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={communicating}
                    onChange={handleChange}
                    name="communicating"
                  />
                }
                className={classes.label}
                label="소통하는"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={doing}
                    onChange={handleChange}
                    name="doing"
                  />
                }
                className={classes.label}
                label="실행력"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={passionate}
                    onChange={handleChange}
                    name="passionate"
                  />
                }
                className={classes.label}
                label="열정적인"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={polite}
                    onChange={handleChange}
                    name="polite"
                  />
                }
                className={classes.label}
                label="예의바른"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={perfective}
                    onChange={handleChange}
                    name="perfective"
                  />
                }
                className={classes.label}
                label="완벽주의"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={principles}
                    onChange={handleChange}
                    name="principles"
                  />
                }
                className={classes.label}
                label="원칙적인"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={flexible}
                    onChange={handleChange}
                    name="flexible"
                  />
                }
                className={classes.label}
                label="유연한"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={patience}
                    onChange={handleChange}
                    name="patience"
                  />
                }
                className={classes.label}
                label="인내심"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={active}
                    onChange={handleChange}
                    name="active"
                  />
                }
                className={classes.label}
                label="적극적인"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={honesty}
                    onChange={handleChange}
                    name="honesty"
                  />
                }
                className={classes.label}
                label="정직한"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={creative}
                    onChange={handleChange}
                    name="creative"
                  />
                }
                className={classes.label}
                label="창의적인"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={responsibility}
                    onChange={handleChange}
                    name="responsibility"
                  />
                }
                className={classes.label}
                label="책임감"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={best}
                    onChange={handleChange}
                    name="best"
                  />
                }
                className={classes.label}
                label="최고의"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={leading}
                    onChange={handleChange}
                    name="leading"
                  />
                }
                className={classes.label}
                label="팀을 이끄는"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={committed}
                    onChange={handleChange}
                    name="committed"
                  />
                }
                className={classes.label}
                label="헌신적인"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={innovative}
                    onChange={handleChange}
                    name="innovative"
                  />
                }
                className={classes.label}
                label="혁신적인"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={realistic}
                    onChange={handleChange}
                    name="realistic"
                  />
                }
                className={classes.label}
                label="현실적인"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={cooperative}
                    onChange={handleChange}
                    name="cooperative"
                  />
                }
                className={classes.label}
                label="협동적인"
              />
            </FormGroup>
            {error && <FormHelperText>4개를 선택해주세요</FormHelperText>}
          </FormControl>
        </div>
        <div className={classes.pageButton}>
          <Link to={{ pathname: "/plus/2/portfolio" }}>
            <Fab color="primary" aria-label="next">
              <ChevronRight />
            </Fab>
          </Link>
        </div>
      </Container>
    </>
  );
}
export default PortfolioPresenter;
