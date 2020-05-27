import React, { Children } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

interface IGridItems {
  children: React.ReactNode;
  xs: any;
  sm: any;
  md: any;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    grid: {
      padding: "0 15px !important",
    },
  })
);

export default function GridItems(props: IGridItems) {
  const classes = useStyles();
  const { children, ...rest } = props;
  return (
    <Grid item xs={props.xs} sm={props.sm} md={props.md}>
      {children}
    </Grid>
  );
}
