import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import GridContainer from "components/Grid/GridContainer.js";
import axios from "axios";
import AnswerList from "./AnswerList.js";
import CommentList from "./CommentList.js";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import DateRange from "@material-ui/icons/DateRange";
import CardHeader from "components/Card/CardHeader.js";
import CardFooter from "components/Card/CardFooter.js";

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
    const answerLists = await axios.get(`http://13.125.238.102:8080/api/breakingError/answers/error/${location.state.errorId}`);
    this.setState({ answerLists, isLoading: false });
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
    console.log(location, "변수확인")

    if (location.state) {
      return (<div className={classes.grid}>
        <Grid container
          direction="column"
          justify="center"
          alignItems="stretch" spacing={3} >
          <Grid item xs>
            <Paper className={classes.paper}>
              <CardHeader color="success" stats icon>
                <p className={classes.cardCategory}> 미해결 에러 </p>
                {location.state.title}
              </CardHeader>
              {location.state.content}
              <CardFooter stats>
                <div className={classes.stats}>
                  <DateRange />
                Last 24 Hours
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
        </Grid>
      </div>);
    }
    else {
      return null;
    }
  }
}
export default BreakingError2;
