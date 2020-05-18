import React from "react";
import SignInPresenter from "./SignInPresenter";

interface LoginIState {
  userId: string;
  password: string;
  loading: boolean;
  error: any;
}

export default class extends React.Component<{}, LoginIState> {
  state = {
    userId: "",
    password: "",
    loading: false,
    error: null,
  };

  handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (this.state.userId !== "" && this.state.password !== "") {
      this.searchByTerm();
    }
  };

  searchByTerm = async () => {
    const { userId, password } = this.state;
    this.setState({ loading: true });
    try {
    } catch {
      this.setState({ error: "Can't find results." });
    } finally {
      this.setState({ loading: false });
    }
  };

  id_updateTerm = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event);
    const {
      target: { value },
    } = event;
    this.setState({ userId: value });
  };
  pass_updateTerm = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event);
    const {
      target: { value },
    } = event;
    this.setState({ password: value });
  };

  render() {
    const { userId, password, loading, error } = this.state;
    return (
      <SignInPresenter
        key={userId}
        userId={userId}
        password={password}
        loading={loading}
        error={error}
        id_updateTerm={this.id_updateTerm}
        pass_updateTerm={this.pass_updateTerm}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}
