/**
 *
 * LabelDrawer
 *
 */

import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import LabelButton from '../LabelButton';

const drawerWidth = 208;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    zIndex: 0,
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  menuButton: {
    '&:hover': {
      background: 'transparent !important',
    },
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  },
  title: {
    flexGrow: 1,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  right_drawer_btn: {
    position: 'absolute',
    top: 0,
    right: 0,
  },
  right_btn: {
    position: 'fixed',
    right: -5,
    top: 14,
    borderRadius: '7px',
    color: '#fff',
    backgroundColor: '#000',
    '&:hover': {
      backgroundColor: '#000 !important',
    },
    '@media (max-width: 576px)': {
      right: 12,
      boxShadow: 'none',
      fontSize: '9px',
      fontWeight: 800,
      width: '71px',
      height: '24px',
      lineHeight: 1,
    },
    // '@media (max-width: 411px)': {
    //   right: 26,
    // },
  },
  drawerPaper: {
    width: drawerWidth,
    '@media (max-width: 992px)': {
      width: '187px',
    },
    '@media (max-width: 576px)': {
      width: '85px',
    },
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',
  },
  drawerclose: {
    position: 'absolute',
    right: 0,
    '@media (max-width: 576px)': {
      marginTop: '-6px',
      right: -12,
    },
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginRight: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: 0,
  },
  d_none: {
    '@media (max-width: 576px)': {
      display: 'none',
    },
  },
  d_block: {
    '@media (max-width: 576px)': {
      display: 'block',
    },
  },
}));

const RightLabelDrawer = props => {
  const { handleDrawerOpenTwo, handleDrawerCloseTwo, openTwo, open } = props;
  const classes = useStyles();
  const theme = useTheme();

  return (
    <div className={classes.root}>
      <Toolbar className={classes.right_drawer_btn}>
        <IconButton
          aria-label="open drawer"
          onClick={handleDrawerOpenTwo}
          edge="start"
          className={clsx(classes.menuButton, openTwo && classes.hide)}
        >
          <LabelButton
            className={`${classes.right_btn} + ${
              open ? classes.d_none : classes.d_block
            }`}
          >
            Labels
          </LabelButton>
        </IconButton>
      </Toolbar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="right"
        open={openTwo}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton
            className={classes.drawerclose}
            onClick={handleDrawerCloseTwo}
          >
            {theme.direction === 'rtl' ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        {props.children}
      </Drawer>
    </div>
  );
};

export default RightLabelDrawer;
