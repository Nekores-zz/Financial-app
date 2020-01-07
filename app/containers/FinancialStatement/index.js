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
import useStyles from './styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Widget from '../../components/Widget';
import Board from '../../components/Board';
import Input from '../../components/Input';
import H3 from '../../components/H3';
import H4 from '../../components/H4';
import { LeftLabelPanel, RightLabelPanel } from './AsideLabelPanel';
import makeSelectFinancialStatement from './selectors';
import reducer from './reducer';

const getNumber = function(number) {
  return number && number.constructor == Number ? number : 0;
};

export function FinancialStatement() {
  useInjectReducer({ key: 'financialStatement', reducer });
  const classes = useStyles();
  const [stateOne, setStateOne] = useState({
    input1: 0,
    input2: 0,
    input3: 0,
    input4: 0,
    input5: 0,
    input6: 0,
    input7: 0,
  });
  const [stateTwo, setStateTwo] = useState({
    input8: 0,
    input9: 0,
    input10: 0,
    input11: 0,
    input12: 0,
    input13: 0,
    input14: 0,
  });
  const handleChange = (event, item) => {
    setStateOne({
      ...stateOne,
      [item]: parseInt(event.target.value),
    });
  };
  const handleChangeInputTwo = (event, item) => {
    setStateTwo({
      ...stateTwo,
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

  const freeCells = [
    { className: classes.cell },
    { className: classes.cell },
    { className: classes.cell },
    { className: classes.cell },
    { className: classes.cell },
    { className: classes.cell },
    { className: classes.cell },
  ];

  return (
    <Widget>
      <Helmet>
        <title>FinancialStatement</title>
        <meta name="description" content="Description of FinancialStatement" />
      </Helmet>
      <Widget className={classes.root}>
        <Grid container className={classes.main_container} spacing={3}>
          <LeftLabelPanel />
          <Grid item xs={12} sm={8}>
            <Paper square elevation={2} className={classes.paper_center}>
              <H3
                text="Assets = Liabilities + Owner's Equity"
                className={classes.title_center}
              />
              <Widget className={classes.center_box}>
                <Grid className={classes.left_grid} sm={6}>
                  <Board id="board-2" className="board">
                    <Widget className={classes.cell_box_left}>
                      {freeCells.map(cell => (
                        <Widget className={classes.cell} />
                      ))}
                    </Widget>
                  </Board>
                  <Widget className={classes.cell_box_right}>
                    {inputsArray.map(item => (
                      <Widget className={classes.cell}>
                        <Input
                          type="number"
                          className={classes.input_style}
                          placeholder="$"
                          name={item}
                          onChange={e => handleChange(e, item)}
                        />
                      </Widget>
                    ))}
                  </Widget>
                </Grid>
                <Grid className={classes.left_grid} sm={6}>
                  <Board id="board-2" className="board">
                    <Widget className={classes.cell_box_left}>
                      {freeCells.map(cell => (
                        <Widget className={classes.cell} />
                      ))}
                    </Widget>
                  </Board>
                  <Widget className={classes.cell_box_right}>
                    {inputsArray.map(item => (
                      <Widget className={classes.cell}>
                        <Input
                          type="number"
                          className={classes.input_style}
                          placeholder="$"
                          name={item}
                          onChange={e => handleChangeInputTwo(e, item)}
                        />
                      </Widget>
                    ))}
                  </Widget>
                </Grid>
              </Widget>
              <Widget className={classes.calcutale_box}>
                <Widget className={classes.total_box}>
                  <H4 className={classes.label} text="Total Assets" />
                  <Input
                    placeholder="$"
                    className={classes.input_style_calcu}
                    value={
                      getNumber(stateOne.input1) +
                      getNumber(stateOne.input2) +
                      getNumber(stateOne.input3) +
                      getNumber(stateOne.input4) +
                      getNumber(stateOne.input5) +
                      getNumber(stateOne.input6) +
                      getNumber(stateOne.input7)
                    }
                  />
                </Widget>
                <Widget>
                  <H4
                    className={classes.label}
                    text="Total Liabilities & Owner’s Equity"
                  />
                  <Input
                    placeholder="$"
                    className={classes.input_style_calcu}
                    value={
                      getNumber(stateTwo.input1) +
                      getNumber(stateTwo.input2) +
                      getNumber(stateTwo.input3) +
                      getNumber(stateTwo.input4) +
                      getNumber(stateTwo.input5) +
                      getNumber(stateTwo.input6) +
                      getNumber(stateTwo.input7)
                    }
                  />
                </Widget>
              </Widget>
            </Paper>
          </Grid>
          <RightLabelPanel />
        </Grid>
      </Widget>
    </Widget>
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
