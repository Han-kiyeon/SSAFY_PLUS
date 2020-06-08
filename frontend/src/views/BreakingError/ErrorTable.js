import React from 'react';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Link } from "react-router-dom"
const LinkText = styled.span`
  color: black;
`;
const useStyles = makeStyles({
  table: {
    minWidth: 650,
    fontWeight: 600,
    color:'black'
  },
  title: {
    width: "12vw",
  },
  content: {
    width: "18vw"
  },
  titles: {
    fontSize: "0.9vw",
    fontWeight: "600",
  },
  contents: {
    fontSize: "0.8vw",
    opacity:1
  },
  
});

export default function ErrorTable(
    errorLists
) {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className={classes.title, classes.titles} align="center">제목</TableCell>
            <TableCell className={classes.content, classes.titles} align="center">내용</TableCell>
            <TableCell className={classes.titles} align="center">이메일</TableCell>
            <TableCell className={classes.titles} align="center">코멘트</TableCell>
            <TableCell className={classes.titles} align="center">날짜</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {errorLists.errorLists.map((errorList) => (
            <TableRow key={errorList.errorId}>
              <TableCell className={classes.contents} component="th" scope="row">
              <Link to={{
                pathname: `/plus/breakingerror_detail/${errorList.errorId}`,
                state: {
                  errorList
                }
              }}
              >
                <LinkText>
                {errorList.title.length>10 ? errorList.title.substring(0, 10) : errorList.title}
                </LinkText>
            </Link>
              </TableCell>
              <TableCell className={classes.contents}>
              <Link to={{
                pathname: `/plus/breakingerror_detail/${errorList.errorId}`,
                state: {
                    errorList
                }
              }}
              >
                <LinkText>
                {errorList.content.replace(/(<([^>]+)>)/ig,"").length>25 ? errorList.content.replace(/(<([^>]+)>)/ig,"").substring(0, 25)+"..." : errorList.content.replace(/(<([^>]+)>)/ig,"")}
                </LinkText>
            </Link>
                </TableCell>
              <TableCell className={classes.contents} align="center">{errorList.userEmail}</TableCell>
              <TableCell className={classes.contents} align="center">{errorList.answerCnt}</TableCell>
              <TableCell className={classes.contents} align="center">{errorList.created_date[0]+"년 "+errorList.created_date[1]+"월 "+errorList.created_date[2]+"일"}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}