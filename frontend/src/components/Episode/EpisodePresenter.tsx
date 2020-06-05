import React from "react";
import styled from "styled-components";
import Card from "components/EpisodeCard";
import Section from "components/EpisodeCard/Section";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

import Autocomplete from "@material-ui/lab/Autocomplete";

interface PortfolioIState {
  episodes: Array<{
    id: number;
    user_email: string;
    date: string;
    title: string;
    strength: Array<string>;
    content: string;
  }>;
}

const Container = styled.div``;

function PortfolioPresenter({ episodes }: PortfolioIState) {
  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
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
        width: "70vw",
      },
      button: {
        "& > *": {
          margin: theme.spacing(1),
          width: "10vw",
        },
      },
      title: {
        "& > *": {
          margin: theme.spacing(1),
          width: "25vw",
        },
      },
      tags: {
        width: 500,
        "& > * + *": {
          marginTop: theme.spacing(1),
        },
      },
    })
  );

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
  };

  const EpisodeBox = styled.div`
    margin: 20px 0px 10px 0px;
  `;
  const EpisodeBoxTitle = styled.div`
    padding: 10px 10px 20px 10px;
    font-size: 18px;
    font-weight: 600;
    border-bottom: 1px solid rgba(0, 0, 0, 0.5);
  `;
  const EpisodeBoxSubTitle = styled.div`
    padding: 10px 0px 0px 15px;
    font-size: 13px;
    font-weight: 600;
    opacity: 0.7;
  `;

  return (
    <>
      <div className={classes.button}>
        <Button
          size="large"
          onClick={handleOpen}
          variant="contained"
          color="primary"
        >
          에피소드 추가
        </Button>
      </div>
      <Container>
        {episodes && episodes.length > 0 && (
          <Section>
            {episodes.map(episode => (
              <Card
                key={episode.id}
                id={episode.id}
                date={episode.date}
                title={episode.title}
                strength={episode.strength}
                content={episode.content}
                useStyles={useStyles}
              ></Card>
            ))}
          </Section>
        )}
      </Container>
      <Modal
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
            <EpisodeBox>
              <EpisodeBoxTitle>에피소드 등록</EpisodeBoxTitle>
              <EpisodeBoxSubTitle>에피소드 등록</EpisodeBoxSubTitle>
              <form className={classes.title} noValidate autoComplete="off">
                <TextField id="outlined-basic" variant="outlined" />
              </form>
              <EpisodeBoxSubTitle>에피소드 태그</EpisodeBoxSubTitle>
              <div className={classes.tags}>
                <Autocomplete
                  multiple
                  id="tags-outlined"
                  options={tags}
                  getOptionLabel={option => option.title}
                  filterSelectedOptions
                  renderInput={params => (
                    <TextField
                      {...params}
                      variant="outlined"
                      placeholder="태그 추가"
                    />
                  )}
                />
              </div>
              <EpisodeBoxSubTitle>에피소드 내용</EpisodeBoxSubTitle>
              <form className={classes.title} noValidate autoComplete="off">
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  multiline
                  rows={4}
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
            </EpisodeBox>
          </div>
        </Fade>
      </Modal>
    </>
  );
}

const tags = [
  { title: "열정적인", id: 1 },
  { title: "리더십", id: 2 },
  { title: "창의성", id: 3 },
  { title: "협동", id: 4 },
  { title: "배려", id: 5 },
];
export default PortfolioPresenter;
