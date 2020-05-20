import React from "react";
import PortfolioPresenter from "./PortfolioPresenter3";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

interface PortfolioIState {
  name: string;
  projectName: string;
  projectTerm: string;
}
export default class extends React.Component<{}, PortfolioIState> {
  state = {
    name: "음메리카노",
    projectName: "",
    projectTerm: "",
  };
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  useStyles = makeStyles((theme: Theme) =>
    createStyles({
      plusButton: {
        "& > *": {
          margin: theme.spacing(1),
          width: "36px",
          height: "36px",
        },
      },
      pageButton: {
        "& > *": {
          margin: theme.spacing(1),
        },
      },
      projectName: {
        "& > *": {
          margin: theme.spacing(1),
          width: "40ch",
        },
      },
      projectTerm: {
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

    if (name === "projectName") {
      this.setState({ projectName: value });
    }
  };

  render() {
    const { name, projectName, projectTerm } = this.state;
    return (
      <PortfolioPresenter
        name={name}
        projectName={projectName}
        projectTerm={projectTerm}
        useStyles={this.useStyles}
        handleSubmit={this.handleSubmit}
        updateTerm={this.updateTerm}
      />
    );
  }
}
