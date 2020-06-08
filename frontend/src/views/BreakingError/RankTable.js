import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Link } from "react-router-dom"

const useStyles = makeStyles({
  table: {
    minWidth: 650,
    fontWeight: 600,
    color: 'black',
    fontSize: "12vw"
  },
  name: {
    width: "25vw",
  },
  TableContainer: {
    width: "45vw",
  },
  fontTitle: {
    fontSize: "0.9vw",
    fontWeight: "600"
  },
  fontContent: {
    fontSize: "0.8vw"
  },
});

export default function RankTable(
  rankLists
) {
  const classes = useStyles();

  return (
    <TableContainer component={Paper} className={classes.TableContainer}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className={classes.fontTitle} align="center">순위</TableCell>
            <TableCell className={classes.name, classes.fontTitle} align="center">이름</TableCell>
            <TableCell className={classes.fontTitle} align="center">직급</TableCell>
            <TableCell className={classes.error, classes.fontTitle} align="center">해결한 에러</TableCell>
            <TableCell className={classes.fontTitle} align="center">기수/반</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rankLists.rankLists.map((rankList, index) => (
            <TableRow  key={rankList.errorId}>
              <TableCell className={classes.fontContent} component="th" scope="row" align="center">
                {(index+1)===1 && "🥇"}
                {(index+1)===2 && "🥈"}
                {(index+1)===3 && "🥉"}
                {(index+1)>3 && index+1}
              
              </TableCell>
              <TableCell className={classes.fontContent} align="center">{rankList.name}</TableCell>
              <TableCell className={classes.fontContent} align="center">{rankList.position}</TableCell>
              <TableCell className={classes.fontContent} align="center">{rankList.answer_like}</TableCell>
              <TableCell className={classes.fontContent} align="center">{rankList.season + "기 " + rankList.season + "반"}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}