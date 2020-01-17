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
import LabelButton from '../../components/LabelButton';

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
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
    marginLeft: 0,
    '&:hover': {
      background: 'transparent !important',
    },
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    '@media (max-width: 992px)': {
      width: '187px',
    },
    '@media (max-width: 576px)': {
      width: '84px',
    },
  },
  left_drawer_btn: {
    position: 'absolute',
    top: 0,
    left: 0,
  },
  left_btn: {
    position: 'fixed',
    left: -5,
    top: 14,
    borderRadius: 0,
    backgroundColor: '#7fcd91',
    '@media (max-width: 576px)': {
      boxShadow: 'none',
      left: 12,
      fontSize: '9px',
      fontWeight: 800,
      width: '71px',
      height: '24px',
      lineHeight: 1,
    },
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
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
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
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

const LeftLabelDrawer = props => {
  const { handleDrawerOpen, handleDrawerClose, open, openTwo } = props;
  const classes = useStyles();
  const theme = useTheme();

  return (
    <div className={classes.root} style={props.style}>
      <Toolbar className={classes.left_drawer_btn}>
        <IconButton
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          className={clsx(classes.menuButton, open && classes.hide)}
        >
          <LabelButton
            className={`${classes.left_btn} + ${
              openTwo ? classes.d_none : classes.d_block
            }`}
          >
            Labels
          </LabelButton>
        </IconButton>
      </Toolbar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton
            className={classes.drawerclose}
            onClick={handleDrawerClose}
          >
            {theme.direction === 'ltr' ? (
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

export default LeftLabelDrawer;
