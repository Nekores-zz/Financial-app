import React from 'react';
import useStyles from './styles';
import Label from '../../components/Label';
import LabelPanel from '../../components/LabelPanel';
import { Container, Draggable } from 'react-smooth-dnd';

export function LeftDnd(props) {
  const classes = useStyles();

  const { state, handleLeftOnDrop } = props;

  return (
    <LabelPanel>
      <Container
        groupName="1"
        getChildPayload={i => state.items1[i]}
        onDrop={handleLeftOnDrop}
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
  );
}
