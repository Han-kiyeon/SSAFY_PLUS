import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div``;

const Form = styled.form`
  margin-bottom: 50px;
  width: 100%;
`;

const CardBox = styled.div`
  height: 50vh;
  width: 50vw;
`;
const Input = styled.input`
  width: 50vw;
`;
const Button = styled.button`
  height: 5vh;
  width: 10vw;
`;

interface SignInIState {
  userId: string;
  password: string;
  loading: boolean;
  error: any;
  updateTerm: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (event: React.FormEvent) => void;
}

const SignInPresenter: React.FunctionComponent<SignInIState> = ({
  userId,
  password,
  loading,
  error,
  updateTerm,
  handleSubmit,
}) => (
  <>
    <Container>
      <CardBox>
        <Form onSubmit={handleSubmit}>
          <Input
            placeholder="ID를 입력해주세요. (Test Id: Test)"
            value={userId}
            onChange={updateTerm}
            name="userId"
            type="text"
          ></Input>
          <br />
          <Input
            placeholder="Password를 입력해주세요. (Test Password: Test)"
            value={password}
            onChange={updateTerm}
            name="password"
            type="text"
          ></Input>
          <br />
          <Button>Sign In</Button>
          <Link to={{ pathname: "/auth/signUp" }}>회원가입 하러가기</Link>
        </Form>
      </CardBox>
    </Container>
  </>
);
export default SignInPresenter;
