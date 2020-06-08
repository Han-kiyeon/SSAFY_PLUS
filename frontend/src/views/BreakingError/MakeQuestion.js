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
import Editor from "./Editor.js";
import { makeStyles, useTheme } from '@material-ui/core/styles';
import CustomInput from "components/CustomInput/CustomInput.js"
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.background.paper,
        width: 1100,
    },
    button: {
        '& > *': {
          margin: theme.spacing(0),
          width: "8vw",
          height: "3.5vw"
        },
      },
}));
function MakeQuestion(searchLists) {
    const [title, setTitle] = React.useState('');
    const [contents, setContents] = React.useState('');
    const classes = useStyles();

    const changeTitle = (e) => {
        setTitle(e.target.value);
    };
    const changeContents = (e) => {
        setContents(e);
    }
   const appClick =  async() =>{
        await axios({
            method: 'post',
            url: 'http://13.125.238.102:8080/api/breakingError/errors',
            data: {
                content: contents,
                title: title,
                user_email: window.sessionStorage.getItem("user_email")
            }
          }).then(res=>{
              console.log(res)
          });
        window.location.reload(true);
    }

    return (<div>
        <h4>에러질문하기</h4>
        <GridContainer>
            <GridItem xs={12} sm={12} md={12}><CustomInput
                labelText="제목"
                id="title"
                formControlProps={{
                    fullWidth: true
                }}
                inputProps={{
                    onChange: changeTitle
                }}
            /></GridItem>
        </GridContainer>
        <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
                <Editor changeContents={changeContents} a={"b"} />
            </GridItem>
        </GridContainer>
        <div className={classes.button}>
        <Button variant="contained" color="primary" onClick={appClick}>
        질문올리기
      </Button>
      </div>
    </div>
    );
}

// ShowSearchList.propTypes = {
//     id: PropTypes.number.isRequired,
//     bname: PropTypes.string.isRequired,
// };


export default MakeQuestion;