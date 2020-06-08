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
import RankList from "./RankList.js";
import SearchBox from "./SearchBox.js";
import Tab from "./Tab.js";
import './BreakingError.css';


class BreakingError extends React.Component {
  state = {
    context: "",
    isLoading: true,
    errorLists: [],
    rankLists: []
  };

  getBreakingError = async () => {
    const errorLists = await axios.get("http://13.125.238.102:8080/api/breakingError/errors/list");
    this.setState({errorLists, isLoading : false });
  }
  getRankList = async () => {
    const rankLists = await axios.get("http://13.125.238.102:8080/api/user/answerLike");
    this.setState({rankLists});
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
    const { isLoading, errorLists, rankLists} = this.state;
    return (
      <div>
        
        <GridContainer>
          <Tab errorLists={errorLists} isLoading={isLoading} rankLists={rankLists}/>
        </GridContainer>
      </div>
    );
  }
}
export default BreakingError;
