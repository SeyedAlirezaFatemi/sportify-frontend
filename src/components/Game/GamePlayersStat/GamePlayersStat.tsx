import Grid from '@material-ui/core/Grid/Grid';
import withStyles from '@material-ui/core/styles/withStyles';
import Table from 'antd/es/table/Table';
import * as React from 'react';
import { Component } from 'react';
import Icon from 'semantic-ui-react/dist/commonjs/elements/Icon/Icon';
import RedCard from '../../Common/Icons/RedCard';
import TShirt from '../../Common/Icons/TShirt';
import YellowCard from '../../Common/Icons/YellowCard';

const styles = theme => ({
  gamePlayersStatTable: {
    width: '100%',
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
  tShirt: (<TShirt />),
  teamPlayers: 'Player 1',
  description: (<Icon name="arrow up" color="green" />),

}, {
  key: '2',
  tShirt: (<TShirt />),
  teamPlayers: 'Player 2',
  description: null,

}, {
  key: '3',
  tShirt: (<TShirt />),
  teamPlayers: 'Player 3',
  description: (<YellowCard />),

}, {
  key: '4',
  tShirt: (<TShirt />),
  teamPlayers: 'Player 4',
  description: (<Icon name="arrow down" color="red" />),

}, {
  key: '5',
  tShirt: (<TShirt />),
  teamPlayers: 'Player 5',
  description: null,

}, {
  key: '6',
  tShirt: (<TShirt />),
  teamPlayers: 'Player 6',
  description: (<RedCard />),

}, {
  key: '7',
  tShirt: (<TShirt />),
  teamPlayers: 'Player 7',
  description: (<Icon name="arrow down" color="red" />),

}, {
  key: '8',
  tShirt: (<TShirt />),
  teamPlayers: 'Player 8',
  description: (<Icon name="arrow up" color="green" />),

}, {
  key: '9',
  tShirt: (<TShirt />),
  teamPlayers: 'Player 9',
  description: null,

}, {
  key: '10',
  tShirt: (<TShirt />),
  teamPlayers: 'Player 10',
  description: null,

}, {
  key: '11',
  tShirt: (<TShirt />),
  teamPlayers: 'Player 11',
  description: null,

},];


class GamePlayersStat extends Component<any, any> {
  public render(): React.ReactNode {
    const { classes } = this.props;
    return (
      <Grid container direction="row">
        <Grid container item xs={4} justify={'flex-start'}>
          <Table className={classes.gamePlayersStatTable} dataSource={team1TableData} showHeader={false}
                 columns={teamTableColumns} pagination={false} />
        </Grid>
        <Grid container item xs={4} />
        <Grid container item xs={4} justify={'flex-end'}>
          <Table className={classes.gamePlayersStatTable} dataSource={team1TableData} showHeader={false}
                 columns={teamTableColumns} pagination={false} />
        </Grid>
      </Grid>
    );
  }

}

export default withStyles(styles)(GamePlayersStat);
