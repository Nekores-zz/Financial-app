/**
 *
 * Input
 *
 */

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  input_box: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingRight: '10px',
  },
  dollor: {
    position: 'relative',
    left: 16,
    fontSize: '18px',
    color: '#656565',
  },
}));

function Input(props) {
  const classes = useStyles();
  return (
    <div className={classes.input_box}>
      <p className={classes.dollor}>$</p>
      <input
        // placeholder={props.placeholder}
        className={props.className}
        value={props.value}
        name={props.name}
        onChange={props.onChange}
        type={props.type}
      />
    </div>
  );
}

Input.propTypes = {};

export default Input;
