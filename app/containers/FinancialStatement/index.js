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
import LeftLabelDrawer from '../../components/LeftLabelDrawer';
import RightLabelDrawer from '../../components/RightLabelDrawer';
import H3 from '../../components/H3';
import H4 from '../../components/H4';
import LabelPanel from './AsideLabelPanel';
import makeSelectFinancialStatement from './selectors';
import reducer from './reducer';
import { cellLeft, cellRight } from './cellArray';

const getNumber = function(number) {
  return number && number.constructor == Number ? number : 0;
};

export function FinancialStatement() {
  useInjectReducer({ key: 'financialStatement', reducer });
  const classes = useStyles();
  const [stateOne, setStateOne] = useState({
    input1: '',
    input2: '',
    input3: '',
    input4: '',
    input5: '',
    input6: '',
    input7: '',
  });
  const [stateTwo, setStateTwo] = useState({
    input8: '',
    input9: '',
    input10: '',
    input11: '',
    input12: '',
    input13: '',
    input14: '',
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
          <LeftLabelDrawer>
            <LabelPanel id="left" data={cellLeft} />
          </LeftLabelDrawer>
          <Grid>
            <Paper square elevation={2} className={classes.paper_center}>
              <H3
                text="Assets = Liabilities + Owner's Equity"
                className={classes.title_center}
              />
              <Widget className={classes.center_box}>
                <Grid className={classes.left_grid} sm={6}>
                  <Board id="left" className="board">
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
                  <Board id="right" className="board">
                    <Widget className={classes.cell_box_left}>
                      {freeCells.map(cell => (
                        <Widget className={classes.cell} />
                      ))}
                    </Widget>
                  </Board>
                  <Widget
                    className={classes.cell_box_right}
                    style={{ borderRight: 0 }}
                  >
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
                <Widget className={classes.total_box}>
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
          <RightLabelDrawer>
            <LabelPanel id="right" data={cellRight} />
          </RightLabelDrawer>
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
