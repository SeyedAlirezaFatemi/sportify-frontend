import { withStyles } from '@material-ui/core/styles';
import { Card } from 'antd';
import * as React from 'react';

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
    return games ?
      (games.map(game => {
        return <Card
          title={game.date}
          // extra={<a href="#">More</a>}
          style={{ width: 300 }}
        >
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>
        </Card>
      })) : null
  }
}

// @ts-ignore
export default withStyles(styles)(GameGrid);
