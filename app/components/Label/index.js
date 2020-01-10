/**
 *
 * Label
 *
 */

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  label_style: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: '10px',
    width: '191.5px',
    height: '51px',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '14px',
    lineHeight: '14px',
    textAlign: 'start',
  },
}));

function Label(props) {
  const classes = useStyles();
  return (
    <div
      style={{ backgroundColor: props.bgColor, color: props.color }}
      className={classes.label_style}
    >
      {props.LabelText}
    </div>
  );
}

Label.propTypes = {};

export default Label;
