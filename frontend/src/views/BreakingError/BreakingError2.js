import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import GridContainer from "components/Grid/GridContainer.js";
import axios from "axios";
import AnswerList from "./AnswerList.js";
import MakeAnswer from "./MakeAnswer.js";
import CommentList from "./CommentList.js";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import DateRange from "@material-ui/icons/DateRange";
import CardHeader from "components/Card/CardHeader.js";
import CardFooter from "components/Card/CardFooter.js";
import styled from "styled-components"
import './BreakingError.css';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ThumbUpAltRoundedIcon from '@material-ui/icons/ThumbUpAltRounded';

class BreakingError2 extends React.Component {
  state = {
    isLoading: true,
    answerLists: [],
  };
  
  componentDidMount() {
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push("/plus/breakingerror");
    }
    this.getAnswerList(location);
  }
  getAnswerList = async (location) => {
    console.log(this);
    if (location.state !== undefined) {
      const answerLists = await axios.get(`http://13.125.238.102:8080/api/breakingError/answers/error/${location.state.errorList.errorId}`);
      this.setState({ answerLists, isLoading: false });
    } 
  }
  useStyles = makeStyles((theme) => ({
    grid: {
      flexGrow: 1,
    },
  }));
  render() {
    const { isLoading, answerLists } = this.state;
    const classes = this.useStyles;
    const { location } = this.props;
    console.log(location, "값보자")
    if (location.state) {
      return (<div className={classes.grid}>
        <Grid container
          direction="column"
          justify="center"
          alignItems="stretch" spacing={3} >
          <Grid item xs>
            <Paper className={classes.paper}>
              <CardHeader color="success" stats icon>
              <div id="errorListTitle">
                {location.state.errorList.title}
              </div>
              </CardHeader>
              <div id="errorListContent">
                {location.state.errorList.content.replace(/(<([^>]+)>)/ig,"")}
              </div>
      <div className="floatLeft">등록일자: 
      {location.state.errorList.created_date[0]+"년"}
      {location.state.errorList.created_date[1]+"월"}
      {location.state.errorList.created_date[2]+"일"}
      {location.state.errorList.created_date[3]+"시"}
      {location.state.errorList.created_date[4]+"분"}
      {location.state.errorList.created_date[5]+"초"}
      </div>
      <div className="floatLeft">질문자: {location.state.errorList.userEmail}</div>
      {/* <div id="errorListLikeCnt"><ThumbUpAltOutlinedIcon style={{fontSize: "1.5vw"}} />&nbsp;{location.state.errorList.likeCnt}</div> */}
              <CardFooter stats>
                <div className={classes.stats}>
              </div>
              </CardFooter>
            </Paper>
          </Grid>
          <br></br>
          {isLoading ? true : answerLists.data.map(answerList => {
            return (<><AnswerList key={answerList.answer_id} answer_id={answerList.answer_id} title={answerList.title} content={answerList.content} user_email={answerList.user_email} answer_cnt={answerList.answer_cnt} error_id={answerList.error_id} like_cnt={answerList.like_cnt} />
            </>)
          }
          )
          }
        <MakeAnswer errorId={this.props.location.state.errorList.errorId}/>
        </Grid>
      </div>);
    }
    else {
      return null;
    }
  }
}
export default BreakingError2;
