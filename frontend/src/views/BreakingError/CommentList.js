import React, { useEffect } from "react";
import PropTypes from "prop-types";
import './BreakingError.css';
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import WorkIcon from '@material-ui/icons/Work';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import Divider from '@material-ui/core/Divider';
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

function CommentList({ answer_id }) {
  const classes = useStyles();
  const [commentLists, setCommentLists] = React.useState(null);
  async function getCommentLists() {
    const commentLists = await axios.get(`http://13.125.238.102:8080/api/breakingError/answers/list/${answer_id}`);
    setCommentLists(commentLists.data);
  }
  useEffect(() => {
    getCommentLists();
  }, []);
  return (
    <div>
      {commentLists == null ? null : commentLists.map(commentList => {
        return (<><div key={commentList.answer_id}>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <ImageIcon />
                </Avatar>
              </ListItemAvatar>
              {commentList.content}
              <ListItemText primary={commentList.user_email} secondary="Jan 9, 2014" />
            </ListItem>
            <Divider variant="inset" component="li" />
            </div>
            </>
        )
      }
      )
      }
      <br></br>
      <br></br>
    </div>);
}

CommentList.propTypes = {
  answer_id: PropTypes.number.isRequired,
};

export default CommentList;