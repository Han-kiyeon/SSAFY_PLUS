import React from "react";
import PropTypes from "prop-types";
import './BreakingError.css';
import DateRange from "@material-ui/icons/DateRange";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardFooter from "components/Card/CardFooter.js";
import axios from "axios";
import SearchList from "./SearchList.js";
import { makeStyles, useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      backgroundColor: theme.palette.background.paper,
      width: 1100,
    },
  }));

function ShowSearchList(searchLists) {
    const classes = useStyles();
    if (searchLists != null) {
        if (searchLists.searchLists.length > 0) {
            return (<GridItem xs={12} sm={6} md={12}>
                    {searchLists === null ? console.log(searchLists) : searchLists.searchLists.map((searchList, index) => {
                        return <SearchList answerCnt={searchList.answerCnt} content={searchList.content} errorId={searchList.errorId} likeCnt={searchList.likeCnt} title={searchList.title} userEmail={searchList.userEmail} key={index} />
                    })}
                    <CardFooter stats>
                        <div className={classes.stats}>
                           
                </div>
                    </CardFooter>
            </GridItem>);
        }
    }
    return null;
}

// ShowSearchList.propTypes = {
//     id: PropTypes.number.isRequired,
//     bname: PropTypes.string.isRequired,
// };


export default ShowSearchList;