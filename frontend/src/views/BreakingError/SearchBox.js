import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
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
  const [value, setValue] = React.useState('');
  
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  
  function appKeyPress(e) {
    if (e.key === 'Enter') {
      appClick();
    }
  }
  
  function appClick() {
    console.log(`context는:${value}`);
    getSearchList(value);
  }
  
  async function getSearchList(value) {
    console.log(value);
    // const searchLists = await axios.get(`${value}`);
  }

  return (<>
    <form className={classes.searchBox} noValidate autoComplete="off">
      <TextField id="standard-basic" label="검색" value={value} onChange={handleChange} onKeyPress={appKeyPress}/>
      <SearchIcon type="button" onClick={appClick} id="searchIcon" />
    </form>
    </>
    );
  }