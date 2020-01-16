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
import Input from '../../components/Input';
import Label from '../../components/Label';
import { Container, Draggable } from 'react-smooth-dnd';
import { applyDrag, generateItems } from './utils';
import LeftLabelDrawer from '../../components/LeftLabelDrawer';
import RightLabelDrawer from '../../components/RightLabelDrawer';
import H3 from '../../components/H3';
import H4 from '../../components/H4';
import LabelPanel from '../../components/LabelPanel';
import makeSelectFinancialStatement from './selectors';
import reducer from './reducer';
import { items1Arr, items3Arr } from './cellArray';

const getNumber = function(number) {
  return number && number.constructor == Number ? number : 0;
};

export function FinancialStatement() {
  const [state, setState] = useState({
    items1: items1Arr,
    items2: generateItems(1, i => ({
      id: '10' + i,
    })),
  });
  const [rightStateLabels, setRightStateLabels] = useState({
    items3: items3Arr,
    items4: [{ id: '28', color: '#fff' }],
  });
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
    input8: '',
  });
  const [stateTwo, setStateTwo] = useState({
    input9: '',
    input10: '',
    input11: '',
    input12: '',
    input13: '',
    input14: '',
    input15: '',
    input16: '',
  });
  const [open, setOpen] = React.useState(false);
  const [openTwo, setOpenTwo] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const handleDrawerOpenTwo = () => {
    setOpenTwo(true);
  };

  const handleDrawerCloseTwo = () => {
    setOpenTwo(false);
  };

  const handleChange = (event, item) => {
    let value = event.target.value;
    try {
      let c = eval(value);
      let arr = event.target.value.split('+');
      let a = 0;
      arr.forEach(i => (a = a + parseInt(i ? i : 0)));
      setStateOne({
        ...stateOne,
        [item]: a,
      });
    } catch (e) {
      // event.target.value === '+' ||
      // event.target.value > '0' ||
      // event.target.value < '9'
      //   ? (event.target.value = '')
      // let reg = /[^a-zA-Z]/g;
      // let num = event.target.value.match(reg);
      // console.log(num, 'message');
    }
  };
  const handleChangeInputTwo = (event, item) => {
    let arrTwo = event.target.value.split('+');
    let b = 0;
    arrTwo.forEach(i => (b = b + parseInt(i ? i : 0)));
    setStateTwo({
      ...stateTwo,
      [item]: b,
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
    'input8',
  ];

  let x = window.matchMedia('(max-width: 1366px)');

  return (
    <Widget>
      <Helmet>
        <title>FinancialStatement</title>
        <meta name="description" content="Description of FinancialStatement" />
      </Helmet>
      <Widget className={classes.root}>
        <Grid container className={classes.main_container} spacing={3}>
          {x.matches ? (
            <LeftLabelDrawer
              handleDrawerOpen={handleDrawerOpen}
              handleDrawerClose={handleDrawerClose}
              open={open}
              openTwo={openTwo}
            >
              <LabelPanel>
                <Container
                  groupName="1"
                  getChildPayload={i => state.items1[i]}
                  onDrop={e =>
                    setState(s => ({
                      ...s,
                      items1: applyDrag(s.items1, e),
                    }))
                  }
                >
                  {state.items1.map(p => {
                    return (
                      <Draggable className={classes.draggable} key={p.id}>
                        <Label bgColor={p.bgColor} LabelText={p.LabelText} />
                      </Draggable>
                    );
                  })}
                </Container>
              </LabelPanel>
            </LeftLabelDrawer>
          ) : (
            <LabelPanel>
              <Container
                groupName="1"
                getChildPayload={i => state.items1[i]}
                onDrop={e =>
                  setState(s => ({
                    ...s,
                    items1: applyDrag(s.items1, e),
                  }))
                }
              >
                {state.items1.map(p => {
                  return (
                    <Draggable className={classes.draggable} key={p.id}>
                      <Label bgColor={p.bgColor} LabelText={p.LabelText} />
                    </Draggable>
                  );
                })}
              </Container>
            </LabelPanel>
          )}
          <Widget className={classes.paper_center_box}>
            <Paper
              square
              elevation={2}
              className={`${classes.paper_center} + ${
                open ? classes.slide_true : classes.slide_false
              } + ${
                openTwo ? classes.slide_Two_true : classes.slide_Two_false
              }`}
            >
              <H3
                text="Assets = Liabilities + Owner's Equity"
                className={classes.title_center}
              />
              <Widget className={classes.center_box}>
                <Grid className={classes.left_grid} sm={6}>
                  <Widget className={classes.cell_box_left}>
                    <Container
                      groupName="1"
                      getChildPayload={i => state.items2[i]}
                      onDrop={e => {
                        setState(s => ({
                          ...s,
                          items2: applyDrag(s.items2, e),
                        }));
                      }}
                    >
                      {state.items2.map(p => {
                        return (
                          <Draggable className={classes.draggable} key={p.id}>
                            <Label
                              bgColor={p.bgColor}
                              LabelText={p.LabelText}
                            />
                          </Draggable>
                        );
                      })}
                    </Container>
                  </Widget>
                  <Widget className={classes.cell_box_right}>
                    {inputsArray.map(item => (
                      <Widget className={classes.cell}>
                        <Input
                          type="text"
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
                  <Widget className={classes.cell_box_left}>
                    <Container
                      groupName="2"
                      getChildPayload={i => rightStateLabels.items4[i]}
                      onDrop={e => {
                        setRightStateLabels(s => ({
                          ...s,
                          items4: applyDrag(s.items4, e),
                        }));
                      }}
                    >
                      {rightStateLabels.items4.map(p => {
                        return (
                          <Draggable className={classes.draggable} key={p.id}>
                            <Label
                              bgColor={p.bgColor}
                              color={p.color}
                              LabelText={p.LabelText}
                            />
                          </Draggable>
                        );
                      })}
                    </Container>
                  </Widget>
                  <Widget
                    className={classes.cell_box_right}
                    style={{ borderRight: 0 }}
                  >
                    {inputsArray.map(item => (
                      <Widget className={classes.cell}>
                        <Input
                          type="text"
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
                      getNumber(stateOne.input7) +
                      getNumber(stateOne.input8)
                    }
                  />
                </Widget>
                <Widget
                  className={classes.total_box}
                  style={{ borderRight: 'none' }}
                >
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
                      getNumber(stateTwo.input7) +
                      getNumber(stateTwo.input8)
                    }
                  />
                </Widget>
              </Widget>
            </Paper>
          </Widget>
          {x.matches ? (
            <RightLabelDrawer
              handleDrawerOpenTwo={handleDrawerOpenTwo}
              handleDrawerCloseTwo={handleDrawerCloseTwo}
              open={open}
              openTwo={openTwo}
            >
              <LabelPanel>
                <Container
                  groupName="2"
                  getChildPayload={i => rightStateLabels.items3[i]}
                  onDrop={e =>
                    setRightStateLabels(t => ({
                      ...t,
                      items3: applyDrag(t.items3, e),
                    }))
                  }
                >
                  {rightStateLabels.items3.map(p => {
                    return (
                      <Draggable className={classes.draggable} key={p.id}>
                        <Label
                          bgColor={p.bgColor}
                          color={p.color}
                          LabelText={p.LabelText}
                        />
                      </Draggable>
                    );
                  })}
                </Container>
              </LabelPanel>
            </RightLabelDrawer>
          ) : (
            <LabelPanel>
              <Container
                groupName="2"
                getChildPayload={i => rightStateLabels.items3[i]}
                onDrop={e =>
                  setRightStateLabels(t => ({
                    ...t,
                    items3: applyDrag(t.items3, e),
                  }))
                }
              >
                {rightStateLabels.items3.map(p => {
                  return (
                    <Draggable className={classes.draggable} key={p.id}>
                      <Label
                        bgColor={p.bgColor}
                        color={p.color}
                        LabelText={p.LabelText}
                      />
                    </Draggable>
                  );
                })}
              </Container>
            </LabelPanel>
          )}
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
