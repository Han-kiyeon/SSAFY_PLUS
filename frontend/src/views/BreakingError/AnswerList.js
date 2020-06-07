import React from "react";
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

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));


function AnswerList({ answer_id, title, content, user_email, answer_cnt, error_id, like_cnt }) {
    const classes = useStyles();
    return (<div>
        <Grid item xs>
            <Paper className={classes.paper}>
                <CardHeader color="success" stats icon>
                    <p className={classes.cardCategory}> 미해결 에러 </p>
                    {title}
                </CardHeader>
                {content}
                <CardFooter stats>
                    <div className={classes.stats}>
                        <DateRange />
                Last 24 Hours
              </div>
                </CardFooter>
                <CommentList answer_id={answer_id}/>
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