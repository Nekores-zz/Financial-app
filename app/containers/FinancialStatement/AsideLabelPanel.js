import React from 'react';
import { cellArray, cellArrayTwo } from './cellArray';
import useStyles from './styles';
import Grid from '@material-ui/core/Grid';
import LabelPanel from '../../components/LabelPanel';
import Label from '../../components/Label';
import Board from '../../components/Board';
import Card from '../../components/Card';

const LeftLabelPanel = () => {
  const classes = useStyles();

  const cardArrayOne = [
    { id: 'card-1', className: classes.card, draggable: 'true' },
    { id: 'card-2', className: classes.card, draggable: 'true' },
    { id: 'card-3', className: classes.card, draggable: 'true' },
    { id: 'card-4', className: classes.card, draggable: 'true' },
    { id: 'card-5', className: classes.card, draggable: 'true' },
    { id: 'card-6', className: classes.card, draggable: 'true' },
    { id: 'card-7', className: classes.card, draggable: 'true' },
    { id: 'card-8', className: classes.card, draggable: 'true' },
    { id: 'card-9', className: classes.card, draggable: 'true' },
  ];

  return (
    <Grid item xs={12} sm={2}>
      <Board id="board-1" className="board">
        <LabelPanel>
          {cellArray.map((item, index) => (
            <Card
              id={cardArrayOne[index] && cardArrayOne[index].id}
              className={cardArrayOne[index] && cardArrayOne[index].className}
              draggable={cardArrayOne[index] && cardArrayOne[index].draggable}
            >
              <Label {...item} />
            </Card>
          ))}
        </LabelPanel>
      </Board>
    </Grid>
  );
};

const RightLabelPanel = () => {
  const classes = useStyles();

  const cardArrayTwo = [
    { id: 'card-10', className: classes.card, draggable: 'true' },
    { id: 'card-11', className: classes.card, draggable: 'true' },
    { id: 'card-12', className: classes.card, draggable: 'true' },
    { id: 'card-13', className: classes.card, draggable: 'true' },
    { id: 'card-14', className: classes.card, draggable: 'true' },
    { id: 'card-15', className: classes.card, draggable: 'true' },
    { id: 'card-16', className: classes.card, draggable: 'true' },
    { id: 'card-17', className: classes.card, draggable: 'true' },
    { id: 'card-18', className: classes.card, draggable: 'true' },
  ];
  return (
    <Grid item xs={12} sm={2}>
      <Board id="board-1" className="board">
        <LabelPanel>
          {cellArrayTwo.map((item, index) => (
            <Card
              id={cardArrayTwo[index] && cardArrayTwo[index].id}
              className={cardArrayTwo[index] && cardArrayTwo[index].className}
              draggable={cardArrayTwo[index] && cardArrayTwo[index].draggable}
            >
              <Label {...item} />
            </Card>
          ))}
        </LabelPanel>
      </Board>
    </Grid>
  );
};

export { LeftLabelPanel, RightLabelPanel };
