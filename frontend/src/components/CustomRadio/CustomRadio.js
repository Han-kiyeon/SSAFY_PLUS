import React from "react";
// material-ui components
import { makeStyles } from "@material-ui/core/styles";
import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";

import styles from "assets/jss/material-dashboard-react/customCheckboxRadioSwitch.js";

const useStyles = makeStyles(styles);

export default function CustomRadio(){
  const classes = useStyles();
  const [checkedA, setCheckedA] = React.useState(true);
  return (
    <div>
      <div>
        <FormControlLabel
          control={
            <Switch
              checked={checkedA}
              onChange={event => setCheckedA(event.target.checked)}
              value="checkedA"
              classes={{
                switchBase: classes.switchBase,
                checked: classes.switchChecked,
                thumb: classes.switchIcon,
                iconChecked: classes.switchIconChecked,
                track: classes.switchBar
              }}
            />
          }
          classes={{
            label: classes.label
          }}
          label="비공개 게시판"
        />
      </div>
      
    </div>
  );
}