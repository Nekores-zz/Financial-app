/**
 *
 * FinancialStatement
 *
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectReducer } from 'utils/injectReducer';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import LabelPanel from '../../components/LabelPanel';
import Label from '../../components/Label';
import makeSelectFinancialStatement from './selectors';
import reducer from './reducer';

const getNumber = function(number) {
  return number && number.constructor == Number ? number : 0;
};

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    margin: '0 auto',
    width: '950px',
  },

  main_container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  },

  title_center: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '50px',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '14px',
    lineHeight: '16px',
    borderBottom: '1px solid #CACACA;',
  },

  paper_center: {
    width: '629px',
    height: '469px',
    background: '#fff',
    // margin: '0 auto',
    textAlign: 'center',
  },

  center_box: {
    display: 'flex',
  },

  left_grid: {
    display: 'flex',
    width: '316px',
    height: '330px',
    borderRight: '1px solid #CACACA',
  },

  cell_box_left: {
    width: '125px',
    borderRight: '1px solid #CACACA',
  },

  cell_box_right: {
    width: '191px',
    borderRight: '1px solid #CACACA',
  },

  cell: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '47px',
    borderBottom: '1px solid #CACACA',
  },

  input_style: {
    paddingLeft: '10px',
    background: '#F1F0F0',
    border: '1px solid #CACACA',
    width: '170px',
    height: '30px',
  },
  input_style_calcu: {
    paddingLeft: '10px',
    background: '#F1F0F0',
    border: '1px solid #CACACA',
    width: '226px',
    height: '36px',
  },
  total_box: {
    marginRight: '6rem',
    marginLeft: '1rem',
  },
  label: {
    margin: 0,
    paddingBottom: '2px',
    textAlign: 'start',
  },
  calcutale_box: {
    height: '87px',
    display: 'flex',
    alignItems: 'center',
  },
}));

export function FinancialStatement() {
  useInjectReducer({ key: 'financialStatement', reducer });
  const classes = useStyles();
  const [state, setState] = useState({
    input1: 0,
    input2: 0,
    input3: 0,
  });
  const handleChange = (event, item) => {
    console.log(event.target.value, item, 'item');
    setState({
      ...state,
      [item]: parseInt(event.target.value),
    });
  };
  const inputsArray = [
    'input1',
    'input2',
    'input3',
    'input4',
    'input5',
    'input6',
    'input7',
  ];
  const cellArray = [
    {
      LabelText: 'Cash',
      color: '#2ECC71',
    },
    {
      LabelText: 'Fixed Assets',
      color: '#E67E22',
    },
    {
      LabelText: 'Prepaid Expensis',
      color: '#E74C3C',
    },
    {
      LabelText: 'Inventory',
      color: '#7F8C8D',
    },
    {
      color: '#F39C12',
    },
    {
      color: '#2980B9',
    },
    {
      color: '#7F8C8D',
    },
    {
      color: '#FDCB6E',
    },
    {
      color: '#74D57E',
    },
  ];
  console.log(state, 'State');
  const total = 0;

  return (
    <div>
      <Helmet>
        <title>FinancialStatement</title>
        <meta name="description" content="Description of FinancialStatement" />
      </Helmet>
      <div className={classes.root}>
        <Grid container className={classes.main_container} spacing={3}>
          <Grid item xs={12} sm={2}>
            <LabelPanel>
              {cellArray.map(item => (
                <Label {...item} />
              ))}
            </LabelPanel>
          </Grid>
          <Grid item xs={12} sm={8}>
            <Paper square elevation={2} className={classes.paper_center}>
              <div className={classes.title_center}>
                Assets = Liabilities + Owner's Equity
              </div>
              <div className={classes.center_box}>
                <Grid className={classes.left_grid} sm={6}>
                  <div className={classes.cell_box_left}>
                    <div className={classes.cell}>
                      <Label LabelText="Cash" color="#2ECC71" />
                    </div>
                    <div className={classes.cell} />
                    <div className={classes.cell} />
                    <div className={classes.cell}>
                      <Label LabelText="Inventory" color="#7F8C8D" />
                    </div>
                    <div className={classes.cell} />
                    <div className={classes.cell} />
                    <div className={classes.cell} />
                  </div>
                  <div className={classes.cell_box_right}>
                    {inputsArray.map(item => (
                      <div className={classes.cell}>
                        <input
                          className={classes.input_style}
                          placeholder="$"
                          name={item}
                          onChange={e => handleChange(e, item)}
                        />
                      </div>
                    ))}
                  </div>
                </Grid>
                <Grid className={classes.left_grid} sm={6}>
                  <div className={classes.cell_box_left}>
                    <div className={classes.cell}>
                      <Label LabelText="Cash" color="#2ECC71" />
                    </div>
                    <div className={classes.cell} />
                    <div className={classes.cell} />
                    <div className={classes.cell} />
                    <div className={classes.cell} />
                    <div className={classes.cell} />
                    <div className={classes.cell} />
                  </div>
                  <div className={classes.cell_box_right}>
                    {inputsArray.map(item => (
                      <div className={classes.cell}>
                        <input
                          className={classes.input_style}
                          placeholder="$"
                          name={item}
                          onChange={e => handleChange(e, item)}
                        />
                      </div>
                    ))}
                  </div>
                </Grid>
              </div>
              <div className={classes.calcutale_box}>
                <div className={classes.total_box}>
                  <h5 className={classes.label}>Total Assets</h5>
                  <input
                    placeholder="$"
                    className={classes.input_style_calcu}
                    value={
                      getNumber(state.input1) +
                      getNumber(state.input2) +
                      getNumber(state.input3) +
                      getNumber(state.input4) +
                      getNumber(state.input5) +
                      getNumber(state.input6) +
                      getNumber(state.input7)
                    }
                  />
                </div>
                <div>
                  <h5 className={classes.label}>
                    Total Liabilities & Owner’s Equity
                  </h5>
                  <input
                    placeholder="$"
                    className={classes.input_style_calcu}
                    // value={
                    //   getNumber(state.input1) +
                    //   getNumber(state.input2) +
                    //   getNumber(state.input3) +
                    //   getNumber(state.input4) +
                    //   getNumber(state.input5) +
                    //   getNumber(state.input6) +
                    //   getNumber(state.input7)
                    // }
                  />
                </div>
              </div>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={2}>
            <LabelPanel>
              {cellArray.map(item => (
                <Label {...item} />
              ))}
            </LabelPanel>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

FinancialStatement.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  financialStatement: makeSelectFinancialStatement(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(FinancialStatement);
