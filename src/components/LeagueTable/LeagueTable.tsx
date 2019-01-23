import * as React from 'react';
import { Component } from 'react';
import { Link } from 'react-router-dom';
import './LeagueTable.css';
import {withRouter} from 'react-router-dom';


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
