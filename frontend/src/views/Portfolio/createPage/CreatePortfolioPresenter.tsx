import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import TextField from "@material-ui/core/TextField";

interface PortfolioPresenterI {
  useStyles: any;
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
  handleOpen: () => void;
  handleClose: () => void;
  handleSubmit: (event: React.FormEvent) => void;
  updateTerm: (event: React.ChangeEvent<HTMLInputElement>) => void;
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
const List = styled.div`
  border-radius: 5px;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.3);
  margin: 10px 0px;
  height: 10vh;
`;

const PortfolioBox = styled.div`
  margin: 20px 0px 10px 0px;
`;
const PortfolioBoxTitle = styled.div`
  padding: 10px 10px 20px 10px;
  font-size: 18px;
  font-weight: 600;
  border-bottom: 1px solid rgba(0, 0, 0, 0.5);
`;
const PortfolioBoxSubTitle = styled.div`
  padding: 10px 0px 0px 15px;
  font-size: 13px;
  font-weight: 600;
  opacity: 0.7;
`;
export default function DisplayPresenter({
  open,
  new_title,
  useStyles,
  portfolios,
  handleOpen,
  handleClose,
  handleSubmit,
  updateTerm,
}: PortfolioPresenterI) {
  const classes = useStyles();
  return (
    <>
      <Button
        className={classes.createButton}
        variant="contained"
        color="primary"
        onClick={handleOpen}
      >
        포트폴리오 만들기
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <PortfolioBox>
              <PortfolioBoxTitle>포트폴리오 만들기</PortfolioBoxTitle>
              <PortfolioBoxSubTitle>제목</PortfolioBoxSubTitle>
              <form className={classes.title} noValidate autoComplete="off">
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  value={new_title}
                  onChange={updateTerm}
                  name="new_title"
                />
              </form>
              <form onSubmit={handleSubmit}>
                <Button
                  size="large"
                  onClick={handleSubmit}
                  variant="contained"
                  color="primary"
                >
                  등록하기
                </Button>
              </form>
            </PortfolioBox>
          </div>
        </Fade>
      </Modal>
      <Container>
        <Card>
          {portfolios.map(portfolio => (
            <>
              <List key={portfolio.portfolio_id}>
                <Link
                  to={{
                    pathname: `/plus/portfolio/1/${[portfolio.portfolio_id]}`,
                  }}
                >
                  {portfolio.portfolio_id} &nbsp; &nbsp; {portfolio.title}
                </Link>
              </List>
            </>
          ))}
        </Card>
      </Container>
    </>
  );
}
