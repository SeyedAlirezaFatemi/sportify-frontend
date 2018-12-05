import * as React from "react";
import { Component } from "react";
import './LeagueTable.css';


import { Table } from 'antd';

const title = 'Premier League';

const columns = [{
  title: 'Rank',
  dataIndex: 'rank',
}, {
  title: 'Team',
  dataIndex: 'team',
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
  rank: '1',
  team: 'Arsenal',
  games: 52,
  win: 32,
  draw: 10,
  lose: 10,
  goalsDifference: 46,
  points: 18,
}, {
  key: '2',
  rank: '2',
  team: 'Manchester Utd',
  games: 32,
  win: 12,
  draw: 10,
  lose: 10,
  goalsDifference: -36,
  points: 28,
}, {
  key: '3',
  rank: '3',
  team: 'Manchester City',
  games: 82,
  win: 32,
  draw: 20,
  lose: 30,
  goalsDifference: +96,
  points: 38,
}, {
  key: '4',
  rank: '4',
  team: 'Chelsea',
  games: 52,
  win: 32,
  draw: 10,
  lose: 10,
  goalsDifference: 46,
  points: 18,
}];

class LeagueTableFootball extends Component {
  public render(): React.ReactNode {
    return (
      <Table dataSource={data} columns={columns} title={() => (<h1 className="foot-title">{title}</h1>)}
             rowClassName={(record, index) => (index % 2 ? 'even' : 'odd')} />
    )
  }
}

export default LeagueTableFootball
