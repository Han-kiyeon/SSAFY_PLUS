import React from "react";
import CreatePortfolioPresenter from "./CreatePortfolioPresenter";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { portfolioApi } from "views/Portfolio/portfolioAPI";
import Axios from "axios";

interface CreateContainerI {
  portfolios: Array<{
    title: string;
    portfolio_id: number;
    user_email: string;
    name: string;
    birth: string;
    email: string;
    phone: string;
    characters: Array<string>;
    skills: Array<{
      name: string;
      percentage: number;
      description: string;
    }>;
    project: Array<{
      project_id: number;
      name: string;
      period: string;
      desc: string;
      stacks: Array<string>;
      roles: Array<string>;
      url: string;
    }>;
  }>;
  open: boolean;
  new_title: string;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    createButton: {
      "& > *": {
        margin: theme.spacing(1),
        height: "5vh",
        fontSize: 16,
      },
    },
    modal: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: "2px solid #000",
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
    title: {
      display: "block",
      margin: "10px",
    },
  })
);

export default class extends React.Component<{}, CreateContainerI> {
  state = {
    portfolios: [
      {
        title: "",
        portfolio_id: 0,
        user_email: "",
        name: "",
        birth: "",
        email: "",
        phone: "",
        characters: [],
        skills: [],
        project: [
          {
            project_id: 0,
            name: "",
            period: "",
            desc: "",
            stacks: [],
            roles: [],
            url: "",
          },
        ],
      },
    ],
    open: false,
    new_title: "",
  };
  async componentDidMount() {
    window.scrollTo(0, 0);
    const { data } = await portfolioApi.portfoliolist();
    var portfolio_list = new Array();

    await this.setState({ portfolios: data });
    await this.state.portfolios.map(portfolio =>
      portfolio_list.push(portfolio.portfolio_id)
    );
    window.sessionStorage.setItem(
      "portfolio_list",
      JSON.stringify(portfolio_list)
    );
  }

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };
  handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (this.state.new_title !== "") {
      await Axios.post("http://13.125.238.102:8080/api/portfolio", {
        birth: "",
        characters: [],
        email: "",
        name: "",
        phone: "",
        projects: [],
        skills: [],
        title: this.state.new_title,
        user_email: window.sessionStorage.getItem("user_email"),
      });
      window.location.reload();
    }
  };

  updateTerm = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value, name },
    } = event;
    if (name === "new_title") {
      this.setState({ new_title: value });
    }
  };

  render() {
    const { open, new_title, portfolios } = this.state;
    return (
      <CreatePortfolioPresenter
        open={open}
        new_title={new_title}
        portfolios={portfolios}
        useStyles={useStyles}
        handleOpen={this.handleOpen}
        handleClose={this.handleClose}
        handleSubmit={this.handleSubmit}
        updateTerm={this.updateTerm}
      />
    );
  }
}
