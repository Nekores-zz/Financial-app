/**
 *
 * ModalBox
 *
 */
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import transitions from '@material-ui/core/styles/transitions';

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 53 + rand();
  const left = 50 + rand();

  return {
    // top: `${top}%`,
    // left: `${left}%`,
    // transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles(theme => ({
  modalBox: {
    display:"flex",
    alignItems: "center",
    justifyContent: "center",
    
  },
  paper: {
    position: 'absolute',
    width: "44%",
    height: "57%",
    display:"flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
    padding: theme.spacing(2, 4, 3),
    '@media (max-width: 1024px)': {
      height: "22px",
    },
    "&:focus": {
      outline: "none !important"
    }
  },
  playBox: {
    display:"flex",
    alignItems: "center",
    justifyContent: "space-evenly",
    cursor: "pointer",
  },
  howToUse: {
    position: "relative",
    left: "5px",
    color: "#000",
    '@media (max-width: 576px)': {
      fontSize: "14px",
    },
  },
  iconPlay: {
    color: "#000",
    fontSize:"36px",
    '@media (max-width: 576px)': {
      fontSize: "24px",
      },
  },
}));

export default function ModalBox() {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div
    className={classes.modalBox}
    >
      <div className={classes.playBox} onClick={handleOpen}>
        <PlayCircleOutlineIcon className={classes.iconPlay} />
      <h3 className={classes.howToUse}>
        How to use
      </h3>
      </div>
      <Modal
        className={classes.modalBox}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={handleClose}
      >
        <div style={modalStyle} className={classes.paper}>
        <iframe className={classes.iframe} src="https://player.vimeo.com/video/386119363" width="640" height="339" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
        </div>
      </Modal>
    </div>
  );
}
