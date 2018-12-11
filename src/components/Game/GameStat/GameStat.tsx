import withStyles from '@material-ui/core/es/styles/withStyles';
import {Table} from 'antd';
import * as React from 'react';
import {Component} from 'react';


const styles = theme => ({});

const columns = [{
  title: 'FC Team1',
  dataIndex: 'team1',
  align: 'center',
}, {
  dataIndex: 'team_stat',
  align: 'center',
}, {
  title: 'FC Team2',
  dataIndex: 'team2',
  align: 'center',
}];

const data = [{
  key: '1',
  team1: '41%',
  team_stat: 'Possession',
  team2: '59%',

}, {
  key: '2',
  team1: '10 (5)',
  team_stat: 'Shots (On target)',
  team2: '9 (2)',
}, {
  key: '3',
  team1: '11 (2)',
  team_stat: 'Fouls (Offside)',
  team2: '2 (1)',
}, {
  key: '4',
  team1: '10',
  team_stat: 'Corner Kicks',
  team2: '3',
}, {
  key: '5',
  team1: '21',
  team_stat: 'Passes',
  team2: '16',
}, {
  key: '6',
  team1: '3',
  team_stat: 'Crosses',
  team2: '1',
}, {
  key: '7',
  team1: '4',
  team_stat: 'Interceptions',
  team2: '5',
}, {
  key: '8',
  team1: '4',
  team_stat: 'Tackles',
  team2: '5',
}, {
  key: '9',
  team1: '8',
  team_stat: 'Saves',
  team2: '5',
}];

class GameStat extends Component<any, any> {
  public render(): React.ReactNode {
    const {classes} = this.props;
    return (
      // @ts-ignore
      <Table dataSource={data} columns={columns} pagination={false}
             rowClassName={(record, index) => (index % 2 ? 'even' : 'odd')}/>
    )
  }

}

export default withStyles(styles)(GameStat);
