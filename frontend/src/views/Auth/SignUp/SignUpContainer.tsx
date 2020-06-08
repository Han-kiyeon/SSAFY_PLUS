import React from "react";
import SignUpPresenter from "./SignUpPresenter";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import axios from "axios";

interface SignUpIState {
  userId: string;
  name: string;
  password: string;
  position: string;
  section: string;
  season: string;
  loading: boolean;
  error: any;
}

export default class extends React.Component<{}, SignUpIState> {
  state = {
    userId: "",
    name: "",
    password: "",
    position: "",
    section: "",
    season: "",
    loading: false,
    error: null,
  };

  handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (this.state.userId !== "" && this.state.password !== "") {
      this.SignUp();
    }
  };
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  keyPress = (event: any) => {
    if (
      this.state.userId !== "" &&
      this.state.password !== "" &&
      this.state.name !== "" &&
      this.state.position !== "" &&
      this.state.section !== "" &&
      this.state.season !== "" &&
      event.key === "Enter"
    ) {
      this.SignUp();
    }
  };
  SignUp = async () => {
    const { userId, name, password, position, section, season } = this.state;
    try {
      axios
        .post("http://13.125.238.102:8080/api/user/signup", {
          email: userId,
          name: name,
          password: password,
          position: position,
          profile_img: "string",
          role: "GUEST",
          season: season,
          section: section,
        })
        .then(res => {
          window.sessionStorage.setItem("user_email", userId);
          window.sessionStorage.setItem("user_id", res.data.user_id);
          window.sessionStorage.setItem("user_position", res.data.position);
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
      Bar: {
        "& > *": {
          margin: 10,
          width: "15vw",
          height: "8vh",
        },
      },
      longBar: {
        "& > *": {
          display: "block",
          margin: 10,
          width: "30vw",
          height: "8vh",
        },
      },
      signUpBar: {
        "& > *": {
          width: "30vw",
          height: "8vh",
        },
      },
      button: {
        "& > *": {
          width: "15vw",
          height: "3vh",
        },
      },
      input10: {
        "& > *": {
          marginTop: "2vh",
          width: "17vw",
        },
      },
      input20: {
        "& > *": {
          marginTop: "2vh",
          width: "10vw",
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
    } else if (name === "position") {
      this.setState({ position: value });
    } else if (name === "section") {
      this.setState({ section: value });
    } else if (name === "season") {
      this.setState({ season: value });
    } else if (name === "name") {
      this.setState({ name: value });
    }
  };

  render() {
    const {
      userId,
      password,
      loading,
      error,
      position,
      section,
      season,
      name,
    } = this.state;
    return (
      <SignUpPresenter
        userId={userId}
        password={password}
        loading={loading}
        name={name}
        error={error}
        position={position}
        section={section}
        season={season}
        updateTerm={this.updateTerm}
        handleSubmit={this.handleSubmit}
        useStyles={this.useStyles}
        keyPress={this.keyPress}
      />
    );
  }
}
