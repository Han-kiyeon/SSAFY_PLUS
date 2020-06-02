import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "@material-ui/core/Button";

interface PortfolioPresenterI {
  useStyles: any;
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

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 20px 10px;
  border-top: 1px black rgba(0, 0, 0, 0.6);
  padding: 40px 20px 20px 20px;
`;

const Card = styled.div`
  padding: 20px 10px;
  border-radius: 5px;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.3);
  width: 50vw;
  height: 50vh;
`;
const List = styled.div``;
export default function DisplayPresenter({
  useStyles,
  portfolios,
}: PortfolioPresenterI) {
  const classes = useStyles();
  return (
    <>
      <Button
        className={classes.createButton}
        variant="contained"
        color="primary"
      >
        <Link to={{ pathname: "/plus/portfolio/1/1" }}>포트폴리오 만들기</Link>
      </Button>
      <Container>
        <Card>
          {portfolios.map(portfolio => (
            <>
              {console.log(portfolio)}
              <div key={portfolio.portfolio_id}>
                <Link
                  to={{
                    pathname: `/plus/portfolio/1/${[portfolio.portfolio_id]}`,
                  }}
                >
                  {portfolio.portfolio_id}
                </Link>
              </div>
            </>
          ))}
        </Card>
      </Container>
    </>
  );
}
