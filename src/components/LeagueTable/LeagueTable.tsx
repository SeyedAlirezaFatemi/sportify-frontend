import * as React from 'react';
import { Component } from 'react';
import { Link } from 'react-router-dom';
import './LeagueTable.css';


import { Button, Table } from 'antd';

const title = 'Premier League';

const basketballColumns = [{
  title: 'Rank',
  dataIndex: 'rank',
}, {
  title: 'Team',
  dataIndex: 'team',
  render: text => <Link to={'/team/1'}>{text}</Link>,
}, {
  title: 'Games',
  dataIndex: 'games',
}, {
  title: 'Win',
  dataIndex: 'win',
}, {
  title: 'Percentage',
  dataIndex: 'percentage',
}];

const basketballData = [{
  key: '1',
  rank: '1',
  team: 'Los Angeles Lakers',
  games: 52,
  win: 32,
  percentage: 0.8,
}, {
  key: '2',
  rank: '2',
  team: 'Toronto Raptors',
  games: 52,
  win: 32,
  percentage: 0.8,
}, {
  key: '3',
  rank: '3',
  team: 'Milwaukee Bucks',
  games: 52,
  win: 32,
  percentage: 0.8,
}, {
  key: '4',
  rank: '4',
  team: 'Phoenix Suns',
  games: 52,
  win: 32,
  percentage: 0.8,
}];

const soccerColumns = [{
  title: 'Rank',
  dataIndex: 'rank',
}, {
  title: 'Team',
  dataIndex: 'team',
  render: text => <Link to={'/team/1'}>{text}</Link>,
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

const soccerData = [{
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

class LeagueTable extends Component {

  public render(): React.ReactNode {
    return (
      <div>
        <Button onClick={this.sortByScore}>sort by score</Button>
        <Button onClick={this.sortByName}>sort by name</Button>
        <Table dataSource={soccerData} columns={soccerColumns} title={this.renderHeader}
               rowClassName={(record, index) => (index % 2 ? 'even' : 'odd')}
               pagination={false} />
      </div>
    );
  }

  private sortByScore = () => {
    this.state = { sort: 'sortByScore' };
    basketballData.sort((a, b) => a.percentage - b.percentage);
    soccerData.sort((a, b) => a.points - b.points);
  };

  private sortByName = () => {
    this.state = { sort: 'sortByName' };
    basketballData.sort((a, b) => {
      if (a.team < b.team) {
        return -1;
      }
      if (a.team > b.team) {
        return 1;
      }
      return 0;
    });
    soccerData.sort((a, b) => {
      if (a.team < b.team) {
        return -1;
      }
      if (a.team > b.team) {
        return 1;
      }
      return 0;
    });
  };

  private renderHeader() {
    return <h1 className="foot-title">{title}</h1>
  }
}

export default LeagueTable
