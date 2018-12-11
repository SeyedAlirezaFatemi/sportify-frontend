import Grid from '@material-ui/core/Grid/Grid';
import withStyles from '@material-ui/core/styles/withStyles';
import Table from 'antd/es/table/Table';
import * as React from 'react';
import {Component} from 'react';
import Gloves from '../../Common/Icons/Gloves';
import Medal from '../../Common/Icons/Medal';
import RedCard from '../../Common/Icons/RedCard';
import TShirt from '../../Common/Icons/TShirt';
import YellowCard from '../../Common/Icons/YellowCard';
import {Icon} from "antd";

const styles = theme => ({
  gamePlayersStatTable: {
    width: '100%',
  },
  substitutePlayer: {
    backgroundColor: '#F9F3DC',
  },
});

const teamTableColumns = [{
  dataIndex: 'tShirt',
  align: 'left' as 'left',
  width: 'auto',
}, {
  dataIndex: 'teamPlayers',
  align: 'left' as 'left',
}, {
  dataIndex: 'description',
  align: 'right' as 'right',
  width: 'auto',
}];

const team1TableData = [{
  key: '1',
  tShirt: (<Gloves/>),
  teamPlayers: 'Player 1 Goalkeeper',
  description: null,

}, {
  key: '2',
  tShirt: (<TShirt/>),
  teamPlayers: 'Player 2',
  description: (<Icon type="arrow-down" style={{color : 'red'}}/>),

}, {
  key: '3',
  tShirt: (<TShirt/>),
  teamPlayers: 'Player 3',
  description: (<YellowCard/>),

}, {
  key: '4',
  tShirt: (<TShirt/>),
  teamPlayers: 'Player 4',
  description: null,

}, {
  key: '5',
  tShirt: (<TShirt/>),
  teamPlayers: 'Player 5',
  description: null,

}, {
  key: '6',
  tShirt: (<TShirt/>),
  teamPlayers: 'Player 6',
  description: (<RedCard/>),

}, {
  key: '7',
  tShirt: (<TShirt/>),
  teamPlayers: 'Player 7',
  description: (<Icon type="arrow-down" style={{color : 'red'}}/>),

}, {
  key: '8',
  tShirt: (<TShirt/>),
  teamPlayers: 'Player 8',
  description: (<Icon type="arrow-down" style={{color : 'red'}}/>),

}, {
  key: '9',
  tShirt: (<TShirt/>),
  teamPlayers: 'Player 9',
  description: null,

}, {
  key: '10',
  tShirt: (<TShirt/>),
  teamPlayers: 'Player 10',
  description: <Medal/>,

}, {
  key: '11',
  tShirt: (<TShirt/>),
  teamPlayers: 'Player 11',
  description: null,

}, {
  key: '12',
  tShirt: (<TShirt/>),
  teamPlayers: 'Player 12',
  description: (<Icon type="arrow-up" style={{color : 'green'}}/>),

}, , {
  key: '13',
  tShirt: (<TShirt/>),
  teamPlayers: 'Player 13',
  description: (<Icon type="arrow-up" style={{color : 'green'}}/>),

}, , {
  key: '14',
  tShirt: (<TShirt/>),
  teamPlayers: 'Player 14',
  description: (<Icon type="arrow-up" style={{color : 'green'}}/>),

},];


class GamePlayersStat extends Component<any, any> {
  public render(): React.ReactNode {
    const {classes} = this.props;
    return (
      <Grid container direction="row">
        <Grid container item xs={4} justify={'flex-start'}>
          <Table className={classes.gamePlayersStatTable}
                 rowClassName={(record, index) => {
                   if (index > 10) {
                     return classes.substitutePlayer
                   }
                 }}
                 dataSource={team1TableData}
                 columns={teamTableColumns}
                 showHeader={false}
                 pagination={false}
          />
        </Grid>
        <Grid container item xs={4}/>
        <Grid container item xs={4} justify={'flex-end'}>
          <Table className={classes.gamePlayersStatTable}
                 rowClassName={(record, index) => {
                   if (index > 10) {
                     return classes.substitutePlayer
                   }
                 }}
                 dataSource={team1TableData}
                 columns={teamTableColumns}
                 showHeader={false}
                 pagination={false}
          />
        </Grid>
      </Grid>
    );
  }

}

export default withStyles(styles)(GamePlayersStat);
