import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

interface ICard {
  id: number;
  date: string;
  title: string;
  strength: Array<string>;
  content: string;
  useStyles: any;
}

const Box = styled.form`
  font-size: 12px;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  padding: 15px;
  margin: 5px;
  cursor: pointer;
  :hover {
    box-shadow: 0 0 6px rgba(35, 173, 255, 1);
  }
`;
const Title = styled.div`
  font-size: 16px;
  font-weight: 600;
`;
const Date = styled.div`
  font-size: 8px;
  opacity: 0.7;
  padding-bottom: 5px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.5);
`;
const Tags = styled.div`
  margin-top: 5px;
`;

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

export default function Card({
  id,
  date,
  title,
  strength,
  content,
  useStyles,
}: ICard) {
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
  return (
    <>
      <Box onClick={handleOpen}>
        <Title>{title}</Title>
        <Date>{date}</Date>
        <Tags>
          {strength.map(tag => (
            <div key={tag}>#{tag}&nbsp;&nbsp;</div>
          ))}
        </Tags>
      </Box>
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
              <EpisodeBoxTitle>에피소드 수정</EpisodeBoxTitle>
              <EpisodeBoxSubTitle>에피소드 수정</EpisodeBoxSubTitle>
              <form className={classes.title} noValidate autoComplete="off">
                <TextField
                  id="outlined-basic"
                  variant="outlined"
                  value={title}
                />
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
                  value={content}
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
                  수정하기
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
Card.propTypes = {
  id: PropTypes.number.isRequired,
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  strength: PropTypes.array,
  content: PropTypes.string,
};
