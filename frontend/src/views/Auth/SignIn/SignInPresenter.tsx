import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div``;

const Form = styled.form`
  margin-bottom: 50px;
  width: 100%;
`;

const Id_Input = styled.input``;
const Pass_Input = styled.input``;

interface SignInIState {
  userId: string;
  password: string;
  loading: boolean;
  error: any;
  id_updateTerm: (event: React.ChangeEvent<HTMLInputElement>) => void;
  pass_updateTerm: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (event: React.FormEvent) => void;
}

const SignInPresenter: React.FunctionComponent<SignInIState> = ({
  userId,
  password,
  loading,
  error,
  id_updateTerm,
  pass_updateTerm,
  handleSubmit,
}) => (
  <>
    <Container>
      <Form onSubmit={handleSubmit}>
        <Id_Input
          placeholder="ID를 입력해주세요. (Test Id: Test)"
          value={userId}
          onChange={id_updateTerm}
        ></Id_Input>
        <Pass_Input
          placeholder="PassWord를 입력해주세요. (Test pw: Test)"
          value={password}
          onChange={pass_updateTerm}
        ></Pass_Input>
      </Form>
    </Container>
  </>
);
export default SignInPresenter;
