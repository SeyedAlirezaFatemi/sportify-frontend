import { Table } from 'antd';
import * as React from 'react';
import { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Sports } from '../../utils';
import './LeagueTable.css';

const title = 'Premier League';

const basketballColumns = [{
  title: 'Rank',
  dataIndex: 'rank',
  sorter: (a, b) => a.rank - b.rank,
}, {
  title: 'Team',
  dataIndex: 'team',
  render: team => <Link to={`/team/basketball/${team.id}`}>{team.name}</Link>,
  sorter: (a, b) => a.team.name.length - b.team.name.length,
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
  render: team => <Link to={`/team/soccer/${team.id}`}>{team.name}</Link>,
  sorter: (a, b) => a.team.name.length - b.team.name.length,
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
  title: 'Goal Difference',
  dataIndex: 'goal_difference',
}, {
  title: 'Score ',
  dataIndex: 'score',
  sorter: (a, b) => a.score - b.score,
}];


class LeagueTable extends Component<any, any> {

  public render(): React.ReactNode {
    const { tableData, sport } = this.props;
    return (
      <Table dataSource={tableData}
             columns={sport === Sports.SOCCER ? soccerColumns : basketballColumns}
             title={this.renderHeader}
             rowClassName={(record, index) => (index % 2 ? 'even' : 'odd')}
             pagination={false} />
    );
  }

  private renderHeader() {
    return <h1 className="foot-title">{title}</h1>
  }
}

export default LeagueTable;
