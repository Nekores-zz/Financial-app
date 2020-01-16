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
    '@media (max-width: 992px)': {
      width: '168.5px',
      height: '44px',
    },
    '@media (max-width: 576px)': {
      width: '73.5px',
      height: '24px',
      fontSize: '8px',
      lineHeight: 1,
      padding: '4px',
    },
  },
}));

function Label(props) {
  const classes = useStyles();
  return (
    <div
      style={{
        backgroundColor: props.bgColor,
        color: props.color,
        margin: props.margin,
      }}
      className={classes.label_style}
    >
      {props.LabelText}
    </div>
  );
}

Label.propTypes = {};

export default Label;
