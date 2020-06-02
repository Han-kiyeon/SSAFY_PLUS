import React from "react";
import CreatePortfolioPresenter from "./CreatePortfolioPresenter";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { portfolioApi } from "views/Portfolio/portfolioAPI";
import Portfolio from "../resultPage/Portfolio";

interface CreateContainerI {
  portfolios: Array<{
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
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    createButton: {
      "& > *": {
        margin: theme.spacing(1),
        height: "5vh",
      },
    },
  })
);
export default class extends React.Component<{}, CreateContainerI> {
  state = {
    portfolios: [
      {
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
  };
  async componentDidMount() {
    window.scrollTo(0, 0);
    const { data } = await portfolioApi.portfoliolist();
    await this.setState({ portfolios: data });
    var portfolio_array = [];
    await this.state.portfolios.map(
      portfolio => console.log(portfolio.portfolio_id)
      //portfolio_array.push(portfolio.portfolio_id)
    );
    //window.sessionStorage.setItem("");
  }
  render() {
    const { portfolios } = this.state;
    return (
      <CreatePortfolioPresenter portfolios={portfolios} useStyles={useStyles} />
    );
  }
}
