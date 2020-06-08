import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components"
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import SearchBox from "./SearchBox.js";
import ShowSearchList from './ShowSearchList.js';
import ErrorTable from './ErrorTable.js';
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardFooter from "components/Card/CardFooter.js";
import axios from "axios";
import SearchList from "./SearchList.js";
import RankList from "./RankList.js";
import SearchTable from "./SearchTable.js";
import MakeQuestion from "./MakeQuestion.js";
import RankTable from "./RankTable.js";
import DateRange from "@material-ui/icons/DateRange";

const RankBox = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
`;

const Line = styled.div`
  margin-top: 10px;
  border-bottom: 2px solid rgba(0,0,0,0.2);
`;


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  tab: {
    backgroundColor: theme.palette.background.paper,
    width: 1100,
  },
  Tabs: {
    height: "4vw"
  },
  appbar: {
    backgroundColor: "white",
    height: "4vw"
  },
  tabName: {
    transform: "translate(0, 0.5vw)",
    fontSize: "1vw"

  },
  searchname: {
    fontSize:"1.5vw",
    fontWeight: "600",
    opacity: "0.5",
    transform: "translate(2vw, 0)"
  },
}));

export default function FullWidthTabs(
  errorLists, isLoading, rankLists
) {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  const [searchLists, SetSearchLists] = React.useState([]);

  const onSearchSubmit = (searchLists) => {
    console.log(searchLists, "onsearchsubmit");
    SetSearchLists(searchLists);
  }

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <div className={classes.tab}>
      <AppBar position="static" className={classes.appbar}>
        <Tabs
          className={classes.Tabs}
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab className={classes.tabName} label="에러리스트" {...a11yProps(0)} />
          <Tab className={classes.tabName} label="에러질문하기" {...a11yProps(1)} />
          <Tab className={classes.tabName} label="디버그 랭크" {...a11yProps(2)} />
          <SearchBox onSearchSubmit={onSearchSubmit} />
        </Tabs>
      </AppBar>
      <br></br>
      <br></br>
      {searchLists.length !== 0 && <><div className={classes.searchname}>검색결과</div>
      <br></br>
      </>}

      <GridItem>
            <CardHeader color="success" stats icon>
              <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                {searchLists.length !== 0 && <>
          <SearchTable searchLists={searchLists} />
          <br></br>
          </>
                  }
                </GridItem>
              </GridContainer>

            </CardHeader>
            {searchLists.length !== 0 && <>
            <Line /></>
            }
          </GridItem>
          {searchLists.length !== 0 && <>
      <br></br>
      <br></br>
      <br></br>
      </>}
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <GridItem>
            <CardHeader color="success" stats icon>
              <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                  {errorLists.errorLists.data !== undefined && <>
                    <ErrorTable errorLists={errorLists.errorLists.data} />
                  </>
                  }
                </GridItem>
              </GridContainer>

            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
              </div>
            </CardFooter>
          </GridItem>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <MakeQuestion />
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          <RankBox>
            <CardHeader color="success" stats icon>
              {errorLists.rankLists.data !== undefined && <>
                <RankTable rankLists={errorLists.rankLists.data} />
              </>
              }
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
              </div>
            </CardFooter>
          </RankBox>
        </TabPanel>
      </SwipeableViews>
    </div>
  );
}
