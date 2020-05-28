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

const useStyles = makeStyles((theme) => ({
  searchBox: {
    '& > *': {
      margin: theme.spacing(1),
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
    getSearchList(value);
    return false;
  }

  async function getSearchList(value) {
    if (value === "안") {
      setSearchLists([
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
      ])
    }
    if (value === "안녕") {
      setSearchLists([
        {
          id: 0,
          bname: "d",
        },
        {
          id: 1,
          bname: "e",
        },
        {
          id: 2,
          bname: "f",
        },
      ])
    }
    // const searchLists = await axios.get(`${value}`);
  }

  function RSearchList(searchLists) {
    if (searchLists != null) {
      return (<GridItem xs={12} sm={6} md={12}>
        <Card id="search">
          {searchLists === null ? console.log(searchLists) : searchLists.map(searchList => {
            return <SearchList id={searchList.id} bname={searchList.bname} key={searchList.id} />
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

  return (<>
    <GridItem xs={12} sm={6} md={12}>
      <Card id="search">
        <form className={classes.searchBox} noValidate autoComplete="off" >
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