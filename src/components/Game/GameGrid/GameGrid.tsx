import { withStyles } from '@material-ui/core/styles';
import * as React from 'react';
import GameResult from '../GameResult/GameResult';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    // width: 500,
    // height: 450,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
  card: {
    maxWidth: '125px',
  },
});

class GameGrid extends React.Component<any, any> {
  public render(): React.ReactNode {
    const { games } = this.props;
    return games.map(game => (<GameResult game={game} />)
    )
  }
}

// @ts-ignore
export default withStyles(styles)(GameGrid);
