import React from "react";
import PortfolioPresenter from "./PortfolioPresenter2";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

interface PortfolioIState {
  name: string;
  stack1: string;
  stack1_etc: boolean;
  stack1_score: number;
  reason1: string;
  stack2: string;
  stack2_etc: boolean;
  stack2_score: number;
  reason2: string;
  stack3: string;
  stack3_etc: boolean;
  stack3_score: number;
  reason3: string;
}
export default class extends React.Component<{}, PortfolioIState> {
  state = {
    name: "음메리카노",
    stack1: "Java",
    reason1: "",
    stack1_etc: false,
    stack1_score: 50,
    stack2: "Java",
    reason2: "",
    stack2_etc: false,
    stack2_score: 50,
    stack3: "Java",
    reason3: "",
    stack3_etc: false,
    stack3_score: 50,
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
      talented_bar: {
        "& > *": {
          margin: theme.spacing(1),
        },
      },
      motion: {
        "& > *": {
          margin: theme.spacing(5),
          width: "45ch",
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
    if (name === "stack1") {
      this.setState({ stack1: value });
    } else if (name === "reason1") {
      this.setState({ reason1: value });
    } else if (name === "stack2") {
      this.setState({ stack2: value });
    } else if (name === "reason2") {
      this.setState({ reason2: value });
    } else if (name === "stack3") {
      this.setState({ stack3: value });
    } else if (name === "reason3") {
      this.setState({ reason3: value });
    }
  };

  sliderUpdate1 = async (event: object, values: number) => {
    await this.setState({ stack1_score: values });
    console.log(this.state.stack1_score);
  };
  tagUpdate1 = async (
    event: React.ChangeEvent<HTMLInputElement>,
    values: string
  ) => {
    await this.setState({ stack1: values });
    if (values === "기타") {
      await this.setState({ stack1: "" });
      this.setState({ stack1_etc: true });
    }
  };
  sliderUpdate2 = async (event: object, values: number) => {
    await this.setState({ stack2_score: values });
    console.log(this.state.stack2_score);
  };
  tagUpdate2 = async (
    event: React.ChangeEvent<HTMLInputElement>,
    values: string
  ) => {
    await this.setState({ stack2: values });
    if (values === "기타") {
      await this.setState({ stack2: "" });
      this.setState({ stack2_etc: true });
    }
  };
  sliderUpdate3 = async (event: object, values: number) => {
    await this.setState({ stack3_score: values });
    console.log(this.state.stack3_score);
  };
  tagUpdate3 = async (
    event: React.ChangeEvent<HTMLInputElement>,
    values: string
  ) => {
    await this.setState({ stack3: values });
    if (values === "기타") {
      await this.setState({ stack3: "" });
      this.setState({ stack1_etc: true });
    }
  };
  valuetext = (value: number) => {
    return `${value}점`;
  };
  render() {
    const {
      name,
      stack1,
      stack1_etc,
      stack1_score,
      reason1,
      stack2,
      stack2_etc,
      stack2_score,
      reason2,
      stack3,
      stack3_etc,
      stack3_score,
      reason3,
    } = this.state;
    return (
      <PortfolioPresenter
        handleSubmit={this.handleSubmit}
        updateTerm={this.updateTerm}
        useStyles={this.useStyles}
        valuetext={this.valuetext}
        tagUpdate1={this.tagUpdate1}
        sliderUpdate1={this.sliderUpdate1}
        tagUpdate2={this.tagUpdate2}
        sliderUpdate2={this.sliderUpdate2}
        tagUpdate3={this.tagUpdate3}
        sliderUpdate3={this.sliderUpdate3}
        name={name}
        stack1={stack1}
        stack1_etc={stack1_etc}
        stack1_score={stack1_score}
        reason1={reason1}
        stack2={stack2}
        stack2_etc={stack2_etc}
        stack2_score={stack2_score}
        reason2={reason2}
        stack3={stack3}
        stack3_etc={stack3_etc}
        stack3_score={stack3_score}
        reason3={reason3}
      />
    );
  }
}
