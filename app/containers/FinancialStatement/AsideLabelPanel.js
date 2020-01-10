import React from 'react';
import useStyles from './styles';
import Grid from '@material-ui/core/Grid';
import LabelPanel from '../../components/LabelPanel';
import Label from '../../components/Label';
import Board from '../../components/Board';
import Card from '../../components/Card';

const SidePanel = ({ id, data }) => {
  const classes = useStyles();

  return (
    <Grid item xs={12} sm={2}>
      <Board id={id} className="board">
        <LabelPanel>
          {data.map((item, index) => (
            <Card
              id={`${id}-${index}`}
              className={classes.card}
              draggable="true"
              cardID={id}
            >
              <Label {...item} />
            </Card>
          ))}
        </LabelPanel>
      </Board>
    </Grid>
  );
};

export default SidePanel;
