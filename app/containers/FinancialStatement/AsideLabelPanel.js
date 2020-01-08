import React from 'react';
import { cellLeft, cellRight } from './cellArray';
import useStyles from './styles';
import Grid from '@material-ui/core/Grid';
import LabelPanel from '../../components/LabelPanel';
import Label from '../../components/Label';
import Board from '../../components/Board';
import Card from '../../components/Card';

const LeftLabelPanel = () => {
  const classes = useStyles();

  return (
    <Grid item xs={12} sm={2}>
      <Board id="board-1" className="board">
        <LabelPanel>
          {cellLeft.map((item, index) => (
            <Card
              id={`card-${index}`}
              className={classes.card}
              draggable="true"
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

  return (
    <Grid item xs={12} sm={2}>
      <Board id="board-1" className="board">
        <LabelPanel>
          {cellRight.map((item, index) => (
            <Card
              id={`card-${index + 9}`}
              className={classes.card}
              draggable="true"
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
