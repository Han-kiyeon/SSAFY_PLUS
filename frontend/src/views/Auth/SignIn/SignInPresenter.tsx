import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import SSAFYlogo from "assets/img/SSAFYlogo.png";

const Container = styled.div`
  position: absolute;
  top: 0px;
  right: 0px;
  width: 40vw;
  background-color: #ffffff;
`;

const Form = styled.form`
  width: 100%;
`;

const CardBox = styled.div`
  margin: 15vh 5vw 10vh 5vw;
  display: inline-block;
  background-color: #ffffff;
  border-radius: 2px;
  padding: 60px 15px;
  box-shadow: 0 20px 25px 0 rgba(0, 0, 0, 0.07);
  transform: translateX(-40%);
  width: 30vw;
  height: 60vh;
`;
const ImageBox = styled.div`
  display: inline-block;
  background-image: url(https://images.wallpaperscraft.com/image/autumn_foliage_park_trees_111839_2560x1600.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  width: 100vw;
`;
const Logo = styled.div`
  height: 5vh;
  width: 5vh;
  background-image: url(${SSAFYlogo});
`;
const InfoBox = styled.div`
  display: inline-block;
  height: 100vh;
`;
const TestLogin = styled.form`
  display: inline-block;
  margin: 0px 20px;
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
      <ImageBox />
      <Container>
        <InfoBox>
          <CardBox>
            <Logo />
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
            </Form>
            <Form onSubmit={handleSubmit} className={classes.button}>
              <Button variant="contained" color="primary">
                로그인
              </Button>
              <Link to={{ pathname: "/auth/signUp" }}>회원가입 하러가기</Link>
            </Form>
          </CardBox>
          <TestLogin onClick={loginTest1}>Test Login (Position:1) </TestLogin>

          <TestLogin onClick={loginTest2}>Test Login (Position:3) </TestLogin>
        </InfoBox>
      </Container>
    </>
  );
}
export default SignInPresenter;
