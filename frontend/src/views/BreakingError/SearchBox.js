import React from 'react';
import DateRange from "@material-ui/icons/DateRange";
// core components
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardFooter from "components/Card/CardFooter.js";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import SearchList from "./SearchList.js";
import axios from "axios";
import './BreakingError.css';

const useStyles = makeStyles((theme) => ({
  searchBox: {
    '& > *': {
      margin: theme.spacing(1),
      "&:hover": {
        backgroundColor: '#ffffff'
      }
    },
  },
  TextField: {
    '& > *': {
      fontSize: "0.9vw",
      width: '17vw',
    },
  },
  button: {
    '& > *': {
      transform: "translate(-2.5vw, 0.8vw)",
      "&:hover": {
        backgroundColor: '#ffffff'
      }
    },
  },
}));

export default function SearchBox({
  onSearchSubmit
}) {
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
    console.log(onSearchSubmit, "onsubmit")
    if (value.length > 0) {
      if (value[0] != " ") {
        const searchLists=await axios.get(`http://13.125.238.102:8080/api/breakingError/errors/searchTitle?keyword=${value}`);
        onSearchSubmit(searchLists.data);
      }else{
        // onSearchSubmit(null);
      }
    } else {
      // onSearchSubmit(null);
    }
  }
  return (<>
    <GridItem xs={12} sm={6} md={12}>
        <form onSubmit={searchLists} className={classes.searchBox} noValidate autoComplete="off" id="searchBox">
          <TextField id="standard-basic" className={classes.TextField} label="검색" value={value} onChange={handleChange} onKeyPress={appKeyPress} />
          <Button 
        onClick={appClick}
        className={classes.button}
        endIcon={<SearchIcon />}
      >
      </Button>
        </form>
    </GridItem>
  </>
  );
}