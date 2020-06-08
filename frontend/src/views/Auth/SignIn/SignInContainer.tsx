import React from "react";
import SignInPresenter from "./SignInPresenter";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import axios from "axios";

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
    console.log(window.sessionStorage.getItem("user_email"));
  }
  handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (this.state.userId !== "" && this.state.password !== "") {
      this.Login();
    }
  };
  keyPress = (event: any) => {
    if (
      this.state.userId !== "" &&
      this.state.password !== "" &&
      event.key === "Enter"
    ) {
      this.Login();
    }
  };

  Login = async () => {
    const { userId, password } = this.state;
    try {
      axios
        .post("http://13.125.238.102:8080/api/user/login", {
          email: userId,
          password: password,
        })
        .then(res => {
          axios
            .get(`http://13.125.238.102:8080/api/user/get/${userId}/`)
            .then(res => {
              console.log(res);
              window.sessionStorage.setItem("user_id", res.data.user_id);
              window.sessionStorage.setItem("user_position", res.data.position);
            });
        })
        .then(res => {
          window.sessionStorage.setItem("user_email", userId);
          console.log(res);
          window.location.href = "../plus/board";
        });
    } catch {
      this.setState({ error: "유저정보를 찾을 수 없습니다." });
    } finally {
      this.setState({ loading: false });
    }
  };

  useStyles = makeStyles((theme: Theme) =>
    createStyles({
      loginbar: {
        "& > *": {
          margin: theme.spacing(2),
          marginTop: "1vh",
          width: "21vw",
          fontsize: "10",
        },
      },
      button: {
        "& > *": {
          margin: theme.spacing(1),
          marginTop: "1vh",
          width: "26vw",
        },
      },
      modal: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      },
      paper: {
        position: "fixed",
        top: "15vh",
        height: "70vh",
        width: "50vw",
        backgroundColor: theme.palette.background.paper,
        borderRadius: "4px",
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
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
        keyPress={this.keyPress}
        useStyles={this.useStyles}
      />
    );
  }
}
