/**
 *
 * FinancialStatement
 *
 */

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectReducer } from 'utils/injectReducer';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Container, Draggable } from 'react-smooth-dnd';
import useStyles from './styles';
import Widget from '../../components/Widget';
import Input from '../../components/Input';
import Label from '../../components/Label';
import { applyDrag, generateItems } from './utils';
import LeftLabelDrawer from '../../components/LeftLabelDrawer';
import RightLabelDrawer from '../../components/RightLabelDrawer';
import H3 from '../../components/H3';
import H4 from '../../components/H4';
import ModalBox from '../../components/ModalBox';
import makeSelectFinancialStatement from './selectors';
import reducer from './reducer';
import { items1Arr, items3Arr } from './cellArray';
import { LeftDnd } from './leftDnd';
import { RightDnd } from './rightDnd';

const getNumber = function(number) {
  return number && number.constructor == Number ? number : 0;
};

export function FinancialStatement() {
  const [state, setState] = useState({
    items1: items1Arr,
    items2: generateItems(0, i => ({
      id: `20${i}`,
    })),
    items5: generateItems(0, i => ({
      id: `50${i}`,
    })),
    items6: generateItems(0, i => ({
      id: `60${i}`,
    })),
    items7: generateItems(0, i => ({
      id: `70${i}`,
    })),
    items8: generateItems(0, i => ({
      id: `80${i}`,
    })),
    items9: generateItems(0, i => ({
      id: `90${i}`,
    })),
    items10: generateItems(0, i => ({
      id: `100${i}`,
    })),
    items11: generateItems(0, i => ({
      id: `110${i}`,
    })),
  });
  const [rightStateLabels, setRightStateLabels] = useState({
    items3: items3Arr,
    items4: [{ id: '28' }],
    items12: [{ id: '29' }],
    items13: [{ id: '30' }],
    items14: [{ id: '31' }],
    items15: [{ id: '32' }],
    items16: [{ id: '33' }],
    items17: [{ id: '34' }],
    items18: [{ id: '35' }],
    items19: [{ id: '36' }],
    items20: [{ id: '37' }],
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

  // useEffect(() => {
  //   let form2Data = JSON.parse(localStorage.getItem('FormData'));

  //   setStateTwo(form2Data);
  // }, []);

  const handleLeftOnDrop = e => {
    setState(s => ({
      ...s,
      items1: applyDrag(s.items1, e),
    }));
  };
  const handleRightOnDrop = e => {
    setRightStateLabels(s => ({
      ...s,
      items3: applyDrag(s.items3, e),
    }));
  };

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
    const val = event.target.value;
    const arr = val.split('+');

    let a = 0;
    arr.forEach(i => (a += parseInt(i.split(',').join('') || 0)));
    setStateOne({
      ...stateOne,
      [item]: a,
    });
  };

  function addComma(inputValue) {
    if (typeof inputValue === 'number') {
      return inputValue
        .toString()
        .replace(/\D/g, '')
        .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    } else {
      return inputValue
        .replace(/\D/g, '')
        .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }
  }

  const handleComma = (event, id) => {
    const input = document.getElementById(id);
    console.log(input.value.length, input.value, 'asdf');

    const newValue = input.value === '' ? '' : addComma(input.value);
    input.value = newValue;
    if (event.keyCode == 46 || event.keyCode == 8) {
    } else {
      if (event.keyCode < 48 || event.keyCode > 57) {
        event.preventDefault();
      }
    }
  };

  const handleChangeInputTwo = (event, item) => {
    const arrTwo = event.target.value.split('+');
    let b = 0;
    arrTwo.forEach(i => (b += parseInt(i.split(',').join('') || 0)));
    setStateTwo({
      ...stateTwo,
      [item]: b,
    });

    // console.log(addComma(event.target.value), 'value');

    // let newState = { ...stateTwo };
    // newState[item] = `${addComma(event.target.value)}`;

    // localStorage.setItem('FormData', JSON.stringify(newState));
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

  const x = window.matchMedia('(max-width: 1366px)');

  // console.log(stateTwo, 'form data');

  return (
    <Widget>
      <Helmet>
        <title>FinancialStatement</title>
        <meta name="description" content="Description of FinancialStatement" />
      </Helmet>
      <Widget className={classes.root}>
        <ModalBox />
        <Grid container className={classes.main_container} spacing={3}>
          {x.matches ? (
            <LeftLabelDrawer
              handleDrawerOpen={handleDrawerOpen}
              handleDrawerClose={handleDrawerClose}
              open={open}
              openTwo={openTwo}
            >
              <LeftDnd state={state} handleLeftOnDrop={handleLeftOnDrop} />
            </LeftLabelDrawer>
          ) : (
            <LeftDnd state={state} handleLeftOnDrop={handleLeftOnDrop} />
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
                  <Widget className={`${classes.cell_box_left} cell_box_left`}>
                    <Container
                      className="dnd_container"
                      groupName="1"
                      getChildPayload={i => state.items2[i]}
                      onDrop={e => {
                        setState(s => ({
                          ...s,
                          items2: applyDrag(s.items2, e),
                        }));
                      }}
                    >
                      {state.items2.map(p => (
                        <Draggable className={classes.draggable} key={p.id}>
                          <Label bgColor={p.bgColor} LabelText={p.LabelText} />
                        </Draggable>
                      ))}
                    </Container>
                    <Container
                      className="dnd_container"
                      groupName="1"
                      getChildPayload={i => state.items5[i]}
                      onDrop={e => {
                        setState(s => ({
                          ...s,
                          items5: applyDrag(s.items5, e),
                        }));
                      }}
                    >
                      {state.items5.map(p => (
                        <Draggable className={classes.draggable} key={p.id}>
                          <Label bgColor={p.bgColor} LabelText={p.LabelText} />
                        </Draggable>
                      ))}
                    </Container>
                    <Container
                      className="dnd_container"
                      groupName="1"
                      getChildPayload={i => state.items6[i]}
                      onDrop={e => {
                        setState(s => ({
                          ...s,
                          items6: applyDrag(s.items6, e),
                        }));
                      }}
                    >
                      {state.items6.map(p => (
                        <Draggable className={classes.draggable} key={p.id}>
                          <Label bgColor={p.bgColor} LabelText={p.LabelText} />
                        </Draggable>
                      ))}
                    </Container>
                    <Container
                      className="dnd_container"
                      groupName="1"
                      getChildPayload={i => state.items7[i]}
                      onDrop={e => {
                        setState(s => ({
                          ...s,
                          items7: applyDrag(s.items7, e),
                        }));
                      }}
                    >
                      {state.items7.map(p => (
                        <Draggable className={classes.draggable} key={p.id}>
                          <Label bgColor={p.bgColor} LabelText={p.LabelText} />
                        </Draggable>
                      ))}
                    </Container>
                    <Container
                      className="dnd_container"
                      groupName="1"
                      getChildPayload={i => state.items8[i]}
                      onDrop={e => {
                        setState(s => ({
                          ...s,
                          items8: applyDrag(s.items8, e),
                        }));
                      }}
                    >
                      {state.items8.map(p => (
                        <Draggable className={classes.draggable} key={p.id}>
                          <Label bgColor={p.bgColor} LabelText={p.LabelText} />
                        </Draggable>
                      ))}
                    </Container>
                    <Container
                      className="dnd_container"
                      groupName="1"
                      getChildPayload={i => state.items9[i]}
                      onDrop={e => {
                        setState(s => ({
                          ...s,
                          items9: applyDrag(s.items9, e),
                        }));
                      }}
                    >
                      {state.items9.map(p => (
                        <Draggable className={classes.draggable} key={p.id}>
                          <Label bgColor={p.bgColor} LabelText={p.LabelText} />
                        </Draggable>
                      ))}
                    </Container>
                    <Container
                      className="dnd_container"
                      groupName="1"
                      getChildPayload={i => state.items10[i]}
                      onDrop={e => {
                        setState(s => ({
                          ...s,
                          items10: applyDrag(s.items10, e),
                        }));
                      }}
                    >
                      {state.items10.map(p => (
                        <Draggable className={classes.draggable} key={p.id}>
                          <Label bgColor={p.bgColor} LabelText={p.LabelText} />
                        </Draggable>
                      ))}
                    </Container>
                    <Container
                      className="dnd_container"
                      groupName="1"
                      getChildPayload={i => state.items11[i]}
                      onDrop={e => {
                        setState(s => ({
                          ...s,
                          items11: applyDrag(s.items11, e),
                        }));
                      }}
                    >
                      {state.items11.map(p => (
                        <Draggable className={classes.draggable} key={p.id}>
                          <Label bgColor={p.bgColor} LabelText={p.LabelText} />
                        </Draggable>
                      ))}
                    </Container>
                  </Widget>
                  <Widget className={classes.cell_box_right}>
                    {inputsArray.map((item, index) => (
                      <Widget className={classes.cell}>
                        <Input
                          type="text"
                          id={`input_${index}`}
                          className={classes.input_style}
                          placeholder="$"
                          name={item}
                          onKeyUp={event =>
                            handleComma(event, `input_${index}`)
                          }
                          onChange={e => handleChange(e, item)}
                        />
                      </Widget>
                    ))}
                  </Widget>
                </Grid>

                {/* right grid started */}

                <Grid className={classes.left_grid} sm={6}>
                  <Widget className={`${classes.cell_box_left} cell_box_left`}>
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
                      {rightStateLabels.items4.map(p => (
                        <Draggable className={classes.draggable} key={p.id}>
                          <Label
                            bgColor={p.bgColor}
                            color={p.color}
                            LabelText={p.LabelText}
                          />
                        </Draggable>
                      ))}
                    </Container>
                    <Container
                      groupName="2"
                      getChildPayload={i => rightStateLabels.items12[i]}
                      onDrop={e => {
                        setRightStateLabels(s => ({
                          ...s,
                          items12: applyDrag(s.items12, e),
                        }));
                      }}
                    >
                      {rightStateLabels.items12.map(p => (
                        <Draggable className={classes.draggable} key={p.id}>
                          <Label
                            bgColor={p.bgColor}
                            color={p.color}
                            LabelText={p.LabelText}
                          />
                        </Draggable>
                      ))}
                    </Container>
                    <Container
                      groupName="2"
                      getChildPayload={i => rightStateLabels.items13[i]}
                      onDrop={e => {
                        setRightStateLabels(s => ({
                          ...s,
                          items13: applyDrag(s.items13, e),
                        }));
                      }}
                    >
                      {rightStateLabels.items13.map(p => (
                        <Draggable className={classes.draggable} key={p.id}>
                          <Label
                            bgColor={p.bgColor}
                            color={p.color}
                            LabelText={p.LabelText}
                          />
                        </Draggable>
                      ))}
                    </Container>
                    <Container
                      groupName="2"
                      getChildPayload={i => rightStateLabels.items14[i]}
                      onDrop={e => {
                        setRightStateLabels(s => ({
                          ...s,
                          items14: applyDrag(s.items14, e),
                        }));
                      }}
                    >
                      {rightStateLabels.items14.map(p => (
                        <Draggable className={classes.draggable} key={p.id}>
                          <Label
                            bgColor={p.bgColor}
                            color={p.color}
                            LabelText={p.LabelText}
                          />
                        </Draggable>
                      ))}
                    </Container>
                    <Container
                      groupName="2"
                      getChildPayload={i => rightStateLabels.items15[i]}
                      onDrop={e => {
                        setRightStateLabels(s => ({
                          ...s,
                          items15: applyDrag(s.items15, e),
                        }));
                      }}
                    >
                      {rightStateLabels.items15.map(p => (
                        <Draggable className={classes.draggable} key={p.id}>
                          <Label
                            bgColor={p.bgColor}
                            color={p.color}
                            LabelText={p.LabelText}
                          />
                        </Draggable>
                      ))}
                    </Container>
                    <Container
                      groupName="2"
                      getChildPayload={i => rightStateLabels.items16[i]}
                      onDrop={e => {
                        setRightStateLabels(s => ({
                          ...s,
                          items16: applyDrag(s.items16, e),
                        }));
                      }}
                    >
                      {rightStateLabels.items16.map(p => (
                        <Draggable className={classes.draggable} key={p.id}>
                          <Label
                            bgColor={p.bgColor}
                            color={p.color}
                            LabelText={p.LabelText}
                          />
                        </Draggable>
                      ))}
                    </Container>
                    <Container
                      groupName="2"
                      getChildPayload={i => rightStateLabels.items17[i]}
                      onDrop={e => {
                        setRightStateLabels(s => ({
                          ...s,
                          items17: applyDrag(s.items17, e),
                        }));
                      }}
                    >
                      {rightStateLabels.items17.map(p => (
                        <Draggable className={classes.draggable} key={p.id}>
                          <Label
                            bgColor={p.bgColor}
                            color={p.color}
                            LabelText={p.LabelText}
                          />
                        </Draggable>
                      ))}
                    </Container>
                    <Container
                      groupName="2"
                      getChildPayload={i => rightStateLabels.items18[i]}
                      onDrop={e => {
                        setRightStateLabels(s => ({
                          ...s,
                          items18: applyDrag(s.items18, e),
                        }));
                      }}
                    >
                      {rightStateLabels.items18.map(p => (
                        <Draggable className={classes.draggable} key={p.id}>
                          <Label
                            bgColor={p.bgColor}
                            color={p.color}
                            LabelText={p.LabelText}
                          />
                        </Draggable>
                      ))}
                    </Container>
                  </Widget>
                  <Widget
                    className={classes.cell_box_right}
                    style={{ borderRight: 0 }}
                  >
                    {inputsArray.map((item, index) => (
                      <Widget className={classes.cell}>
                        <Input
                          type="text"
                          // value={
                          //   stateTwo[item]
                          //     ? addComma(stateTwo[item])
                          //     : stateTwo[item]
                          // }
                          id={`input2_${index}`}
                          className={classes.input_style}
                          placeholder="$"
                          name={item}
                          onKeyUp={event =>
                            handleComma(event, `input2_${index}`)
                          }
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
                    type="text"
                    id="total_assets"
                    className={classes.input_style_calcu}
                    value={(
                      getNumber(stateOne.input1) +
                      getNumber(stateOne.input2) +
                      getNumber(stateOne.input3) +
                      getNumber(stateOne.input4) +
                      getNumber(stateOne.input5) +
                      getNumber(stateOne.input6) +
                      getNumber(stateOne.input7) +
                      getNumber(stateOne.input8)
                    ).toLocaleString()}
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
                    type="text"
                    id="tatal_liabilities"
                    className={classes.input_style_calcu}
                    value={(
                      getNumber(stateTwo.input1) +
                      getNumber(stateTwo.input2) +
                      getNumber(stateTwo.input3) +
                      getNumber(stateTwo.input4) +
                      getNumber(stateTwo.input5) +
                      getNumber(stateTwo.input6) +
                      getNumber(stateTwo.input7) +
                      getNumber(stateTwo.input8)
                    ).toLocaleString()}
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
              <RightDnd
                rightStateLabels={rightStateLabels}
                handleRightOnDrop={handleRightOnDrop}
              />
            </RightLabelDrawer>
          ) : (
            <RightDnd
              rightStateLabels={rightStateLabels}
              handleRightOnDrop={handleRightOnDrop}
            />
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
