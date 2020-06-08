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
import axios from "axios";

interface PortfolioIState {
  episodes: Array<{
    episode_id: number;
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
          margin: theme.spacing(2),
          width: "13vw",
        },
      },
      title: {
        "& > *": {
          margin: theme.spacing(1),
          width: "40vw",
        },
      },
      tags: {
        "& > * + *": {
          marginTop: theme.spacing(1),
          width: "55vw",
        },
      },
      submit: {
        "& > * + *": {
          marginTop: "20vh",
        },
      },
    })
  );

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  var title = "";
  var content = "";
  var strength = new Array();
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    axios
      .post("http://13.125.238.102:8080/api/episode", {
        content: content,
        strength: strength,
        title: title,
        user_email: window.sessionStorage.getItem("user_email"),
      })
      .then(res => {
        window.location.reload();
      });
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
  const tagChange = (event: any, values: any) => {
    strength = values;
  };
  const updateTerm = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value, name },
    } = event;
    if (name === "content") {
      content = value;
    } else if (name === "title") {
      title = value;
    }
  };
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
                key={episode.episode_id}
                id={episode.episode_id}
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
              <EpisodeBoxSubTitle>제목</EpisodeBoxSubTitle>
              <form className={classes.title} noValidate autoComplete="off">
                <TextField
                  id="outlined-basic"
                  name="title"
                  variant="outlined"
                  onChange={updateTerm}
                />
              </form>
              <EpisodeBoxSubTitle>에피소드 태그</EpisodeBoxSubTitle>
              <div className={classes.tags}>
                <Autocomplete
                  multiple
                  id="tags-outlined"
                  options={tags.map(option => option.title)}
                  filterSelectedOptions
                  renderInput={params => <TextField {...params} />}
                  onChange={tagChange}
                />
              </div>
              <EpisodeBoxSubTitle>에피소드 내용</EpisodeBoxSubTitle>
              <form className={classes.title} noValidate autoComplete="off">
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  multiline
                  name="content"
                  rows={4}
                  onChange={updateTerm}
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
  { title: "열정", id: 1 },
  { title: "리더십", id: 2 },
  { title: "창의성", id: 3 },
  { title: "협동", id: 4 },
  { title: "배려", id: 5 },
  { title: "실행력", id: 6 },
  { title: "지원 동기", id: 7 },
  { title: "비젼", id: 7 },
  { title: "커뮤니케이션", id: 8 },
  { title: "가치관", id: 9 },
  { title: "조직 적응력", id: 10 },
  { title: "성실함", id: 10 },
  { title: "직무수행 능력", id: 10 },
];
export default PortfolioPresenter;
