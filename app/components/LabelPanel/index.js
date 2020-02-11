/**
 *
 * LabelPanel
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  paper: {
    width: '207px',
    height: '690px',
    background: '#fff',
    margin: '0 2rem',
    borderRadius: 0,
    // overflowY: 'inherit',
    '@media (max-width: 1449px)': {
      margin: '0 auto',
    },
    '@media (max-width: 1366px)': {
      marginTop: '-3.5rem',
      marginLeft: '0',
    },
    '@media (max-width: 576px)': {
      width: '84px',
    },
  },
  section_title: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '14px',
    lineHeight: '14px',
    '@media (max-width: 576px)': {
      fontSize: '10px',
    },
  },
  title_box: {
    width: '207px',
    height: '55px',
    display: 'flex',
    alignItems: 'center',
    paddingLeft: '8px',
    borderBottom: '1px solid #CACACA',
    '@media (max-width: 576px)': {
      width: '84px',
      height: '44px',
    },
  },
}));

function LabelPanel(props) {
  const classes = useStyles();
  return (
    <Paper className={`${classes.paper} paper`} style={props.style}>
      <div className={`${classes.title_box} title_box`} style={props.style}>
        <h5 className={classes.section_title} style={props.style}>
          Labels
        </h5>
      </div>
      {props.children}
    </Paper>
  );
}

LabelPanel.propTypes = {};

export default LabelPanel;
