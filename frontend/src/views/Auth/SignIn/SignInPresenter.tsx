import React from "react";
import styled from "styled-components";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import SignUp from "views/Auth/SignUp";

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
  padding: 0px 15px;
  box-shadow: 0 20px 25px 0 rgba(0, 0, 0, 0.07);
  transform: translateX(-40%);
  width: 30vw;
  height: 65vh;
`;
const ImageBox = styled.div`
  display: inline-block;
  background-image: url(http://13.125.238.102:8080/api/downloadFile/4871d4e2-3785-4bc1-9b2b-0157ee02ef7d);
  background-repeat: no-repeat;
  background-size: cover;
  height: 99vh;
  width: 99vw;
`;
const Logo = styled.div`
  background-image: url(http://13.125.238.102:8080/api/downloadFile/2ddfbf2c-1dfb-4f0e-a8d8-91b5bbc5c18e);
  background-repeat: no-repeat;
  background-size: contain;
  height: 13vh;
  width: 13vw;
  transform: translateX(10%) translateY(-50%);
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
const Title = styled.span`
  display: block;
  font-size: 13px;
  font-weight: 600;
  opacity: 0.5;
`;

interface SignInIState {
  userId: string;
  password: string;
  loading: boolean;
  error: any;
  updateTerm: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (event: React.FormEvent) => void;
  keyPress: any;
  useStyles: any;
}

function SignInPresenter({
  userId,
  password,
  loading,
  error,
  updateTerm,
  handleSubmit,
  keyPress,
  useStyles,
}: SignInIState) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <ImageBox />
      <Container>
        <InfoBox>
          <CardBox>
            <Logo />
            <Form onSubmit={handleSubmit} className={classes.loginbar}>
              <Title>아이디</Title>
              <TextField
                label="이메일 계정"
                helperText="Test ID: test2@gmail.com"
                onChange={updateTerm}
                name="userId"
                value={userId}
                variant="outlined"
              ></TextField>
              <br />
              <Title>비밀번호</Title>
              <TextField
                label="비밀번호"
                helperText="Test PW: 1234"
                onChange={updateTerm}
                name="password"
                value={password}
                variant="outlined"
                onKeyPress={keyPress}
              ></TextField>
              <br />
            </Form>
            <Form onClick={handleSubmit} className={classes.button}>
              <Button variant="contained" color="primary">
                로그인
              </Button>
              <Button color="primary" onClick={handleOpen}>
                회원 가입
              </Button>
              <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                  timeout: 500,
                }}
              >
                <Fade in={open}>
                  <div className={classes.paper}>
                    <SignUp />
                  </div>
                </Fade>
              </Modal>
            </Form>
          </CardBox>
        </InfoBox>
      </Container>
    </>
  );
}
export default SignInPresenter;
