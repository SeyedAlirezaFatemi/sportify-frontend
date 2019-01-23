import * as React from 'react';
import { Component } from 'react';
import { Link } from 'react-router-dom';
import './LeagueTable.css';


import { Table } from 'antd';
import axios from "../../api";
import {API} from "../../utils";

const title = 'Premier League';

const basketballColumns = [{
  title: 'Rank',
  dataIndex: 'rank',
  sorter: (a, b) => a.rank - b.rank,
}, {
  title: 'Team',
  dataIndex: 'team',
  render: text => <Link to={'/team/1'}>{text}</Link>,
  sorter: (a, b) => a.team.length - b.team.length,
}, {
  title: 'Games',
  dataIndex: 'games',
}, {
  title: 'Win',
  dataIndex: 'win',
}, {
  title: 'Lose',
  dataIndex: 'lose',
}, {
  title: 'Percentage ',
  dataIndex: 'percentage',
  sorter: (a, b) => a.percentage - b.percentage,
}];


const soccerColumns = [{
  title: 'Rank',
  dataIndex: 'rank',
  sorter: (a, b) => a.rank - b.rank,
}, {
  title: 'Team',
  dataIndex: 'team',
  render: text => <Link to={'/team/1'}>{text}</Link>,
  sorter: (a, b) => a.team.length - b.team.length,
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
  title: 'Score ',
  dataIndex: 'score',
  sorter: (a, b) => a.score - b.score,
}];

const soccerData = [{
  key: '1',
  rank: '1',
  team: 'Arsenal',
  games: 52,
  win: 32,
  draw: 10,
  lose: 10,
  goalsDifference: 46,
  score: 18,
}, {
  key: '2',
  rank: '2',
  team: 'Manchester Utd',
  games: 32,
  win: 12,
  draw: 10,
  lose: 10,
  goalsDifference: -36,
  score: 28,
}, {
  key: '3',
  rank: '3',
  team: 'Manchester City',
  games: 82,
  win: 32,
  draw: 20,
  lose: 30,
  goalsDifference: +96,
  score: 38,
}, {
  key: '4',
  rank: '4',
  team: 'Chelsea',
  games: 52,
  win: 32,
  draw: 10,
  lose: 10,
  goalsDifference: 46,
  score: 18,
}];

class LeagueTable extends Component<any, any> {

  public render(): React.ReactNode {
    return (
        <Table dataSource={this.props.tableData}
               columns={this.props.sport === 'soccer' ? soccerColumns : basketballColumns}
               title={this.renderHeader}
               rowClassName={(record, index) => (index % 2 ? 'even' : 'odd')}
               pagination={false} />
    );
  }

  private renderHeader() {
    return <h1 className="foot-title">{title}</h1>
  }
}

export default LeagueTable
