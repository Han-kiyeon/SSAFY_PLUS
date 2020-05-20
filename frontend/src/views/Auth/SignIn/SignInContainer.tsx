import React from "react";
import SignInPresenter from "./SignInPresenter";

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
  }
  handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (this.state.userId !== "" && this.state.password !== "") {
      console.log("login 요청");
      this.Login();
    }
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
      />
    );
  }
}
