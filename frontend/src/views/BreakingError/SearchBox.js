import React from 'react';
import DateRange from "@material-ui/icons/DateRange";
// core components
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardFooter from "components/Card/CardFooter.js";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import SearchList from "./SearchList.js";
import axios from "axios";
import './BreakingError.css';

const useStyles = makeStyles((theme) => ({
  searchBox: {
    '& > *': {
      margin: theme.spacing(0),
      width: '17vw',
    },
  },
}));

export default function SearchBox() {
  const classes = useStyles();
  const [value, setValue] = React.useState(null);
  const [searchLists, setSearchLists] = React.useState(null);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  function appKeyPress(e) {
    if (e.key === 'Enter') {
      appClick();
      e.preventDefault();
    }
  }

  function appClick() {
    if(value)
    getSearchList(value);
    return false;
  }

  async function getSearchList(value) {
    if (value.length > 0) {
      if (value[0] != " ") {
        const searchLists = await axios.get(`http://13.125.238.102:8080/api/breakingError/errors/searchTitle?keyword=${value}`);
        setSearchLists(searchLists);
      }else{
        setSearchLists(null);
      }
    } else {
      setSearchLists(null);
    }
  }

  function RSearchList(searchLists) {
    if (searchLists != null) {
      if (searchLists.data.length > 0) {
        return (<GridItem xs={12} sm={6} md={12}>
          <Card id="search">
            {searchLists === null ? console.log(searchLists) : searchLists.data.map((searchList, index) => {
              return <SearchList answerCnt={searchList.answerCnt} content={searchList.content} errorId={searchList.errorId} likeCnt={searchList.likeCnt} title={searchList.title} userEmail={searchList.userEmail} key={index} />
            })}
            <CardFooter stats>
              <div className={classes.stats}>
                <DateRange />
                  Last 24 Hours
                </div>
            </CardFooter>
          </Card>
        </GridItem>);
      }
    }
  }

  return (<>
    <GridItem xs={12} sm={6} md={12}>
      <Card id="search">
        <form className={classes.searchBox} noValidate autoComplete="off" id="searchBox">
          <TextField id="standard-basic" label="검색" value={value} onChange={handleChange} onKeyPress={appKeyPress} />
          <SearchIcon type="button" onClick={appClick} id="searchIcon" />
        </form>
        <CardFooter stats>
          <div className={classes.stats}>
            <DateRange />
                Last 24 Hours
              </div>
        </CardFooter>
      </Card>
    </GridItem>
    {RSearchList(searchLists)}
  </>
  );
}