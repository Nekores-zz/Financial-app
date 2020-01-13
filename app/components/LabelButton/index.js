/**
 *
 * LabelButton
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import KeyboardVoiceIcon from '@material-ui/icons/KeyboardVoice';
import Icon from '@material-ui/core/Icon';
import SaveIcon from '@material-ui/icons/Save';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
    background: '#fff',
    color: 'black',
    '&-hover': {
      backgroundColor: '#fff !important',
    },
  },
}));

function LabelButton(props) {
  const classes = useStyles();
  return (
    <div>
      <Button
        variant="contained"
        className={`${props.className} +${classes.button}`}
        // endIcon={<Icon>send</Icon>}
      >
        {props.children}
      </Button>
    </div>
  );
}

LabelButton.propTypes = {};

export default LabelButton;
