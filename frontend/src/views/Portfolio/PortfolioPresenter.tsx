import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";

interface PortfolioIState {
  name: string;
  handleSubmit: (event: React.FormEvent) => void;
  updateTerm: (event: React.ChangeEvent<HTMLInputElement>) => void;
  useStyles: any;
  years: number[];
  year: number;
  months: number[];
  month: number;
  days: number[];
  day: number;
  email: string;
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
  handleSubmit,
  updateTerm,
  useStyles,
  years,
  year,
  months,
  month,
  days,
  day,
  email,
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
            placeholder="이름"
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
            placeholder="이메일"
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
          className={classes.email}
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <TextField
            placeholder="010-0000-0000"
            helperText=" - 를 포함해 주세요"
            onChange={updateTerm}
            name="email"
          ></TextField>
        </form>
      </Container>
    </>
  );
}
export default PortfolioPresenter;
