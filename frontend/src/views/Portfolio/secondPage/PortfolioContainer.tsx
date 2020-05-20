import React from "react";
import PortfolioPresenter from "./PortfolioPresenter";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

interface PortfolioIState {
  name: string;
  reason1: string;
}
export default class extends React.Component<{}, PortfolioIState> {
  state = {
    name: "음메리카노",
    reason1: "",
  };
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  useStyles = makeStyles((theme: Theme) =>
    createStyles({
      pageButton: {
        "& > *": {
          margin: theme.spacing(1),
        },
      },
      reason: {
        "& > *": {
          margin: theme.spacing(1),
          width: "40ch",
        },
      },
    })
  );
  handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
  };

  updateTerm = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value, name },
    } = event;
    if (name === "reason1") {
      this.setState({ reason1: value });
    }
  };
  render() {
    const { name, reason1 } = this.state;
    return (
      <PortfolioPresenter
        handleSubmit={this.handleSubmit}
        updateTerm={this.updateTerm}
        useStyles={this.useStyles}
        name={name}
      />
    );
  }
}
