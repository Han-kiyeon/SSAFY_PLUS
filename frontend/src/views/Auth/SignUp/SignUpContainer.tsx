import React from "react";
import SignUpPresenter from "./SignUpPresenter";

interface SignUpIState {
  userId: string;
  password: string;
  position: string;
  section: number;
  season: number;
  loading: boolean;
  error: any;
}

export default class extends React.Component<{}, SignUpIState> {
  state = {
    userId: "",
    password: "",
    position: "",
    section: 0,
    season: 0,
    loading: false,
    error: null,
  };

  handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (this.state.userId !== "" && this.state.password !== "") {
      console.log("login 요청");
      this.Login();
    }
  };
  componentDidMount() {
    window.scrollTo(0, 0);
  }
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
      this.setState({ section: parseInt(value) });
    } else if (name === "season") {
      this.setState({ season: parseInt(value) });
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
    } = this.state;
    return (
      <SignUpPresenter
        userId={userId}
        password={password}
        loading={loading}
        error={error}
        position={position}
        section={section}
        season={season}
        updateTerm={this.updateTerm}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}
