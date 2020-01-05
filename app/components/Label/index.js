/**
 *
 * Label
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  label_style: {
    padding: '10px',
    margin: '11px auto',
    width: '114px',
    height: '36px',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '12px',
    lineHeight: '14px',
    textAlign: 'start',
  },
}));

function Label(props) {
  const classes = useStyles();
  return (
    <div
      style={{ backgroundColor: props.color }}
      className={classes.label_style}
    >
      {props.LabelText}
    </div>
  );
}

Label.propTypes = {};

export default Label;
