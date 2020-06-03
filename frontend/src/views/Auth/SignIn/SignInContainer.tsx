import React from "react";
import SignInPresenter from "./SignInPresenter";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

interface SignInIState {
  userId: string;
  password: string;
  loading: boolean;
  error: any;
}

export default class extends React.Component<{}, SignInIState> {
  state = {
    userId: "",
    password: "",
    loading: false,
    error: null,
  };
  componentDidMount() {
    window.scrollTo(0, 0);
    console.log(sessionStorage.getItem("user_email"));
  }
  handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (this.state.userId !== "" && this.state.password !== "") {
      console.log("login 요청");
      this.Login();
    }
  };
  loginTest1 = async (event: React.FormEvent) => {
    console.log("test 로그인 요청1");
    await window.sessionStorage.setItem("user_name", "Test1");
    await window.sessionStorage.setItem("user_email", "test1@gmail.com");
    await window.sessionStorage.setItem("user_position", "1");
    window.location.href = "../plus/main";
  };
  loginTest2 = async (event: React.FormEvent) => {
    console.log("test 로그인 요청2");
    await window.sessionStorage.setItem("user_name", "Test2");
    await window.sessionStorage.setItem("user_email", "test2@gmail.com");
    await window.sessionStorage.setItem("user_position", "3");
    window.location.href = "../plus/main";
  };

  Login = async () => {
    const { userId, password } = this.state;
    this.setState({ loading: true });
    try {
    } catch {
      this.setState({ error: "Can't find results." });
    } finally {
      this.setState({ loading: false });
    }
  };

  useStyles = makeStyles((theme: Theme) =>
    createStyles({
      loginbar: {
        "& > *": {
          margin: theme.spacing(1),
          marginTop: "2vh",
          width: "22vw",
        },
      },
      button: {
        "& > *": {
          margin: theme.spacing(1),
          marginTop: "2vh",
          width: "7vw",
        },
      },
    })
  );
  updateTerm = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value, name },
    } = event;
    if (name === "userId") {
      this.setState({ userId: value });
    } else if (name === "password") {
      this.setState({ password: value });
    }
  };

  render() {
    const { userId, password, loading, error } = this.state;
    return (
      <SignInPresenter
        userId={userId}
        password={password}
        loading={loading}
        error={error}
        updateTerm={this.updateTerm}
        handleSubmit={this.handleSubmit}
        loginTest1={this.loginTest1}
        loginTest2={this.loginTest2}
        useStyles={this.useStyles}
      />
    );
  }
}
