import React, { useEffect } from "react";
import PropTypes from "prop-types";
import './BreakingError.css';
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
// @material-ui/icons
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import DateRange from "@material-ui/icons/DateRange";
import CardHeader from "components/Card/CardHeader.js";
import CardFooter from "components/Card/CardFooter.js";
import CommentList from "./CommentList.js";
import GridContainer from "components/Grid/GridContainer.js";
import CustomInput from "components/CustomInput/CustomInput.js"
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';
import Icon from '@material-ui/core/Icon';
import axios from "axios";
import TextField from '@material-ui/core/TextField';
import './BreakingError.css';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ThumbUpAltRoundedIcon from '@material-ui/icons/ThumbUpAltRounded';

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    button: {
        '& > *': {
            margin: theme.spacing(1),
            width: '4vw',
        },
    },
    text: {
        '& > *': {
          margin: theme.spacing(1),
          width: '35vw',
          textAlign: 'bottom',
        },
      },
}));


function AnswerList({ answer_id, title, content, user_email, answer_cnt, error_id, like_cnt }) {
    const classes = useStyles();
    const [contents, setContents] = React.useState('');
    const [value, setValue] = React.useState(null);
    const [like, setLike] = React.useState(false);
    const handleChange = (event) => {
        setContents(event.target.value);
    };
    async function getLike(){
        await axios({
            method: 'post',
            url: 'http://13.125.238.102:8080/api/answerlike/likeCheck',
            data: {
                answer_id: answer_id,
                user_email: user_email,
            }
        }).then(res => {
            console.log(res.data);
            setLike(res.data);
        });
    }
    
    useEffect(() => {
        getLike();
    }, []);
    function appKeyPress(e) {
        if (e.key === 'Enter') {
            appClick();
            e.preventDefault();
        }
    }
    const setTrue = async () => {
        await axios({
            method: 'put',
            url: 'http://13.125.238.102:8080/api/answerlike',
            data: {
                answer_id: answer_id,
                user_email: user_email,
            }
        }).then(res => {
            console.log(res);
            setLike(true);
        });
    }
    const setFalse = async () => {
        await axios({
            method: 'put',
            url: 'http://13.125.238.102:8080/api/answerlike',
            data: {
                answer_id: answer_id,
                user_email: user_email,
            }
        }).then(res => {
            console.log(res);
            setLike(false);
        });
    }
    const appClick = async () => {
        await axios({
            method: 'post',
            url: 'http://13.125.238.102:8080/api/breakingError/answers',
            data: {
                content: contents,
                error_id: error_id,
                parent: answer_id,
                title: "",
                user_email: window.sessionStorage.getItem("user_email")
            }
        }).then(res => {
            console.log(res)
        });
        window.location.reload(true);
    }
    return (<div>
        <Grid item xs>
            <Paper className={classes.paper}>
                <CardHeader color="success" stats icon>
                    <div id="answerTitle">
                        {title}
                    </div>
                </CardHeader>
                <div id="answerContent">
                    {content.replace(/(<([^>]+)>)/ig,"")}
                </div>
                 <div id="answerListLikeCnt">
                 {!like &&  <ThumbUpAltOutlinedIcon style={{fontSize: "1.5vw"}} onClick={setTrue} /> }
                 {like &&  <ThumbUpAltRoundedIcon style={{fontSize: "1.5vw"}} onClick={setFalse} /> }
                     &nbsp;<div id="gachihasheul">{like_cnt}</div></div>
                <CardFooter stats>
                    <div className={classes.stats}>
                    </div>
                </CardFooter>
                <CommentList answer_id={answer_id} />
                <GridContainer>
                    <GridItem xs={12} sm={12} md={12}>
                        <form className={classes.text} id="answerTextField" noValidate autoComplete="off">
                            <TextField id="standard-basic" label="댓글" value={value} onChange={handleChange} onKeyPress={appKeyPress} />
                        </form>
                        <Button
                            id="answerButton"
                            onClick={appClick}
                            variant="contained"
                            color="primary"
                            className={classes.button}
                            endIcon={<SendIcon />}
                        >
                            작성하기
      </Button>
                    </GridItem>
                </GridContainer>
            </Paper>
        </Grid>
        <br></br>
    </div>);
}

AnswerList.propTypes = {
    id: PropTypes.number.isRequired,
    bname: PropTypes.string.isRequired,
};

export default AnswerList;