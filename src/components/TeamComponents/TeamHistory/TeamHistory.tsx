import { withStyles } from '@material-ui/core/styles';
import * as React from "react";
import { Component } from "react";


import { Table } from 'antd';
import { Colors } from "../../../utils";

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  win: {
    backgroundColor: Colors.WIN,
  },
  lose: {
    backgroundColor: Colors.LOSE
  },
  draw: {
    backgroundColor: Colors.DRAW
  }
});

const title = 'Team History';

const columns = [{
  title: 'Opponent',
  dataIndex: 'opponent',
  render: text => <a href="javascript:">{text}</a>,
}, {
  title: 'Games',
  dataIndex: 'games',
}, {
  title: 'Win',
  dataIndex: 'win',
}, {
  title: 'Draw',
  dataIndex: 'draw',
}, {
  title: 'Lose',
  dataIndex: 'lose',
}, {
  title: 'Goals Difference',
  dataIndex: 'goals_difference',
}, {
  title: 'Points ',
  dataIndex: 'points',
}];
const data = [{
  key: '1',
  opponent: 'Arsenal',
  games: 52,
  win: 32,
  draw: 10,
  lose: 10,
  goalsDifference: 46,
  points: 18,
}, {
  key: '2',
  opponent: 'Manchester Utd',
  games: 32,
  win: 12,
  draw: 10,
  lose: 10,
  goalsDifference: -36,
  points: 28,
}, {
  key: '3',
  opponent: 'Manchester City',
  games: 82,
  win: 32,
  draw: 20,
  lose: 30,
  goalsDifference: +96,
  points: 38,
}, {
  key: '4',
  opponent: 'Chelsea',
  games: 52,
  win: 32,
  draw: 10,
  lose: 10,
  goalsDifference: 46,
  points: 18,
}];

class TeamHistory extends Component<any, any> {
  public render(): React.ReactNode {
    return (
      <Table dataSource={data} columns={columns} title={this.renderHeader}
             rowClassName={this.renderStyle} />
    )
  }

  private renderHeader = () => {
    return <h1>{title}</h1>
  };

  private renderStyle = (record, index: number) => {
    const { classes } = this.props;
    return classes.win;
  }
}

export default withStyles(styles)(TeamHistory);
