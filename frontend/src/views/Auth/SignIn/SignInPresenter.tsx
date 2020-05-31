import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const Container = styled.div`
  margin: 50px 5px;
`;

const Form = styled.form`
  width: 100%;
`;

const CardBox = styled.div`
  background-color: #fafafa;
  padding: 20px 10px;
  height: 50vh;
  width: 50vw;
`;

const TestLogin = styled.form`
  margin: 20px;
  font-size: 20px;
  :hover {
    cursor: pointer;
  }
`;

interface SignInIState {
  userId: string;
  password: string;
  loading: boolean;
  error: any;
  updateTerm: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (event: React.FormEvent) => void;
  loginTest1: (event: React.FormEvent) => void;
  loginTest2: (event: React.FormEvent) => void;
  useStyles: any;
}

function SignInPresenter({
  userId,
  password,
  loading,
  error,
  updateTerm,
  handleSubmit,
  loginTest1,
  loginTest2,
  useStyles,
}: SignInIState) {
  const classes = useStyles();
  return (
    <>
      <Container>
        <CardBox>
          <Form onSubmit={handleSubmit} className={classes.loginbar}>
            <TextField
              label="이메일 계정"
              helperText="ex) example@gmail.com"
              onChange={updateTerm}
              name="userId"
              value={userId}
              variant="outlined"
            ></TextField>
            <br />
            <TextField
              label="비밀번호"
              onChange={updateTerm}
              name="password"
              value={password}
              variant="outlined"
            ></TextField>
            <br />
            <Link to={{ pathname: "/auth/signUp" }}>회원가입 하러가기</Link>
          </Form>
          <Form onSubmit={handleSubmit} className={classes.button}>
            <Button variant="contained" color="primary">
              로그인
            </Button>
          </Form>
        </CardBox>
        <TestLogin onClick={loginTest1}>Test Login (Position:1) </TestLogin>
        <TestLogin onClick={loginTest2}>Test Login (Position:3) </TestLogin>
      </Container>
    </>
  );
}
export default SignInPresenter;
