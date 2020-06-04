import React from "react";
// react plugin for creating charts
// @material-ui/core
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
// @material-ui/icons
import DateRange from "@material-ui/icons/DateRange";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardFooter from "components/Card/CardFooter.js";
import axios from "axios";
import ErrorList from "./ErrorList.js";
import RankList from "./RankList.js";
import SearchBox from "./SearchBox.js";
import './BreakingError.css';


class BreakingError extends React.Component {
  state = {
    context: "",
    isLoading: true,
    errorLists: [],
    rankLists: [
      {
        id: 0,
        bname: "a",
      },
      {
        id: 1,
        bname: "b",
      },
      {
        id: 2,
        bname: "c",
      },

    ],
  };

  getBreakingError = async () => {
    const errorLists = await axios.get("http://13.125.238.102:8080/api/breakingError/errors/list");
    this.setState({errorLists, isLoading : false });
  }
  getRankList = async () => {
    // const rankLists = await axios.get("");
  }
  componentDidMount() {
    this.getBreakingError();
    this.getRankList();
  }

  useStyles = makeStyles((theme) => ({
    searchBox: {
      '& > *': {
        margin: theme.spacing(1),
        width: '50vw',
      },
    },
  }));

  render() {
    const classes = this.useStyles;
    const { isLoading, errorLists} = this.state;
    return (
      <div>
       
        <GridContainer>
               <SearchBox />
          <GridItem xs={12} sm={6} md={6}>
            <Card>
              <CardHeader color="success" stats icon>
                <p className={classes.cardCategory}> 미해결 에러 </p>
                {isLoading ? true : errorLists.data.map(errorList => {
                  return <ErrorList key={errorList.errorId} answerCnt={errorList.answerCnt} content={errorList.content} errorId={errorList.errorId} likeCnt={errorList.likeCnt} title={errorList.title} userEmail={errorList.userEmail} />
                })}
              </CardHeader>
              <CardFooter stats>
                <div className={classes.stats}>
                  <DateRange />
                Last 24 Hours 
              </div>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={6} md={6}>
            <Card>
              <CardHeader color="success" stats icon>
                <p className={classes.cardCategory}> SSAFY Debug Rank </p>
                {isLoading ? true : this.state.rankLists.map(rankList => {
                  return <RankList id={rankList.id} bname={rankList.bname} key={rankList.id} />
                }
                )
                }
              </CardHeader>
              <CardFooter stats>
                <div className={classes.stats}>
                  <DateRange />
                Last 24 Hours
              </div>
              </CardFooter>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}
export default BreakingError;
