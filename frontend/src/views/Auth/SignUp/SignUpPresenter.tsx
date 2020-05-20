import React from "react";
import styled from "styled-components";

interface SignUpIState {
  userId: string;
  password: string;
  position: string;
  section: number;
  season: number;
  loading: boolean;
  error: any;
  updateTerm: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (event: React.FormEvent) => void;
}

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

const SignInPresenter: React.FunctionComponent<SignUpIState> = ({
  userId,
  password,
  loading,
  error,
  position,
  section,
  season,
  updateTerm,
  handleSubmit,
}) => (
  <>
    <Container>
      <CardBox>
        <Form onSubmit={handleSubmit}>
          <Input
            placeholder="ID를 입력해주세요."
            value={userId}
            onChange={updateTerm}
            name="userId"
            type="text"
          ></Input>
          <br />
          <Input
            placeholder="Password를 입력해주세요."
            value={password}
            onChange={updateTerm}
            name="password"
            type="text"
          ></Input>
          <br />
          <Input
            placeholder="직급을 입력해주세요."
            value={position}
            onChange={updateTerm}
            name="position"
            type="text"
          ></Input>
          <br />
          <Input
            placeholder="반을 입력해주세요."
            value={section}
            onChange={updateTerm}
            name="section"
          ></Input>
          <br />
          <Input
            placeholder="기수를 입력해주세요."
            value={season}
            onChange={updateTerm}
            name="season"
          ></Input>
          <br />
          <Button>Sign Up</Button>
        </Form>
      </CardBox>
    </Container>
  </>
);
export default SignInPresenter;
