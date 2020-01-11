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
    height: '706px',
    background: '#fff',
    margin: '0 auto',
    borderRadius: 0,
  },
  section_title: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '14px',
    lineHeight: '14px',
  },
  title_box: {
    width: '207px',
    height: '55px',
    display: 'flex',
    alignItems: 'center',
    paddingLeft: '8px',
    borderBottom: '1px solid #CACACA',
  },
}));

function LabelPanel(props) {
  const classes = useStyles();
  return (
    <Paper className={classes.paper} style={props.style}>
      <div className={classes.title_box} style={props.style}>
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
