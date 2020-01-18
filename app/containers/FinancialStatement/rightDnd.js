import React from 'react';
import useStyles from './styles';
import Label from '../../components/Label';
import LabelPanel from '../../components/LabelPanel';
import { Container, Draggable } from 'react-smooth-dnd';

export function RightDnd(props) {
  const classes = useStyles();

  const { rightStateLabels, handleRightOnDrop } = props;

  return (
    <LabelPanel>
      <Container
        groupName="2"
        getChildPayload={i => rightStateLabels.items3[i]}
        onDrop={handleRightOnDrop}
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
  );
}
