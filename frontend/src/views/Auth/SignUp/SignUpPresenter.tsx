import React from "react";
import styled from "styled-components";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";

interface SignUpIState {
  userId: string;
  name: string;
  password: string;
  position: string;
  section: string;
  season: string;
  loading: boolean;
  error: any;
  updateTerm: any;
  handleSubmit: (event: React.FormEvent) => void;
  useStyles: any;
  keyPress: any;
}

const Container = styled.div``;
const Title = styled.div`
  font-size: 1.2em;
  font-weight: 600;
  border-bottom: 1px solid rgba(0, 0, 0, 0.7);
  padding: 20px 0px;
`;

const Form = styled.form`
  display: inline-block;
`;

const BlockForm = styled.form`
  display: block;
  margin-top: 15px;
  margin-bottom: 10px;
`;
const CardBox = styled.div`
  height: 50vh;
  width: 50vw;
`;
const Input = styled.input`
  width: 50vw;
`;

function SignInPresenter({
  userId,
  password,
  name,
  loading,
  error,
  position,
  section,
  season,
  updateTerm,
  handleSubmit,
  keyPress,
  useStyles,
}: SignUpIState) {
  const classes = useStyles();
  return (
    <>
      <Container>
        <Title>회원 가입</Title>
        <CardBox>
          <Form onSubmit={handleSubmit}>
            <TextField
              label="아이디"
              onChange={updateTerm}
              name="userId"
              value={userId}
              variant="outlined"
              className={classes.longBar}
            ></TextField>
            <br />
            <TextField
              label="비밀번호"
              onChange={updateTerm}
              name="password"
              value={password}
              variant="outlined"
              className={classes.longBar}
            ></TextField>
          </Form>
          <br />
          <Form
            className={classes.Bar}
            noValidate
            autoComplete="off"
            onSubmit={handleSubmit}
          >
            <TextField
              label="이름"
              onChange={updateTerm}
              name="name"
              value={name}
              variant="outlined"
            ></TextField>
            <FormControl variant="outlined">
              <InputLabel id="demo-simple-select-outlined-label">
                직급
              </InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                value={position}
                onChange={updateTerm}
                label="position"
                name="position"
              >
                <MenuItem value={"교수"}>교수</MenuItem>
                <MenuItem value={"프로"}>프로</MenuItem>
                <MenuItem value={"취업컨설턴트"}>취업컨설턴트</MenuItem>
                <MenuItem value={"코치"}>코치</MenuItem>
                <MenuItem value={"교육생"}>교육생</MenuItem>
              </Select>
            </FormControl>
          </Form>
          <br />
          <TextField
            label="기수"
            onChange={updateTerm}
            name="season"
            value={season}
            variant="outlined"
            className={classes.Bar}
          ></TextField>
          <TextField
            label="반"
            onChange={updateTerm}
            name="section"
            value={section}
            variant="outlined"
            className={classes.Bar}
            onKeyPress={keyPress}
          ></TextField>

          <br />
          <br />
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            onClick={handleSubmit}
          >
            회원 가입
          </Button>
        </CardBox>
      </Container>
    </>
  );
}
export default SignInPresenter;
