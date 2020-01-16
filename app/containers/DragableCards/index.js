import React, { useState } from 'react';
import { Container, Draggable } from 'react-smooth-dnd';
import { applyDrag, generateItems } from './utils';
import Label from '../../components/Label';
// import {
//   cellLeft,
//   cellRight,
// } from '../../containers/FinancialStatement/cellArray';

const groupStyle = {
  marginLeft: '50px',
  width: '207px',
  height: '376px',
  border: '1px solid black',
};

const DragableCards = () => {
  const [state, setState] = useState({
    items1: [
      {
        id: '1',
        LabelText: 'Cash',
        bgColor: '#4caf50',
      },
      {
        id: '2',
        LabelText: 'Fixed Assets',
        bgColor: '#03a9f4',
      },
      {
        id: '3',
        LabelText: 'Pre-Paid Expensis',
        bgColor: '#ff9800',
      },
      {
        id: '4',
        LabelText: 'Inventory',
        bgColor: '#ffeb3b',
      },
      {
        id: '5',
        LabelText: 'Accounts Receivable',
        bgColor: '#8bc34a',
      },
    ],
    items2: generateItems(6, i => ({
      id: '10' + i,
    })),
  });

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'stretch',
        marginTop: '50px',
        marginRight: '50px',
      }}
    >
      <div style={groupStyle}>
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
              <Draggable key={p.id} style={{ margin: '7px' }}>
                <Label bgColor={p.bgColor} LabelText={p.LabelText} />
              </Draggable>
            );
          })}
        </Container>
      </div>
      <div style={groupStyle}>
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
              <Draggable key={p.id} style={{ margin: '7px' }}>
                <Label bgColor={p.bgColor} LabelText={p.LabelText} />
              </Draggable>
            );
          })}
        </Container>
      </div>
    </div>
  );
};

DragableCards.propTypes = {};

export default DragableCards;
