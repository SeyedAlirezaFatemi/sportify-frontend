import Grid from "@material-ui/core/Grid/Grid";
import withStyles from "@material-ui/core/styles/withStyles";
import Table from "antd/es/table/Table";
import * as React from "react";
import {Component} from "react";
import Icon from "semantic-ui-react/dist/commonjs/elements/Icon/Icon";
import TShirt from "../../Common/Icons/TShirt";

const styles = theme => ({
  team2Style : {
    alignSelf: 'right',
  }
});



const teamTableColumns = [{
  dataIndex: 'tShirt',
  align: 'left' as 'left',
}, {
  dataIndex: 'teamPlayers',
  align: 'left' as 'left',
}, {
  dataIndex: 'replacement',
  align: 'right' as 'right',
}];

const team1TableData = [{
  key: '1',
  tShirt: (<TShirt />),
  teamPlayers: 'Player 1',
  replacement: (<Icon name="arrow up" color="green" />),

},{
  key: '2',
  tShirt: (<TShirt />),
  teamPlayers: 'Player 2',
  replacement: null,

},{
  key: '3',
  tShirt: (<TShirt />),
  teamPlayers: 'Player 3',
  replacement: null,

},{
  key: '4',
  tShirt: (<TShirt />),
  teamPlayers: 'Player 4',
  replacement: (<Icon name="arrow down" color="red" />),

},{
  key: '5',
  tShirt: (<TShirt />),
  teamPlayers: 'Player 5',
  replacement: null,

},{
  key: '6',
  tShirt: (<TShirt />),
  teamPlayers: 'Player 6',
  replacement: null,

},{
  key: '7',
  tShirt: (<TShirt />),
  teamPlayers: 'Player 7',
  replacement: (<Icon name="arrow down" color="red" />),

},{
  key: '8',
  tShirt: (<TShirt />),
  teamPlayers: 'Player 8',
  replacement: (<Icon name="arrow up" color="green" />),

},{
  key: '9',
  tShirt: (<TShirt />),
  teamPlayers: 'Player 9',
  replacement: null,

},{
  key: '10',
  tShirt: (<TShirt />),
  teamPlayers: 'Player 10',
  replacement: null,

},{
  key: '11',
  tShirt: (<TShirt />),
  teamPlayers: 'Player 11',
  replacement: null,

},];


class GamePlayersStat extends Component<any, any> {
  public render(): React.ReactNode {
    const {classes} = this.props;
    return (
      <Grid container direction="row">
        <Grid container item xs={5}>
          <Table dataSource={team1TableData} showHeader={false} columns={teamTableColumns} pagination={false}/>
        </Grid>
        <Grid container item xs={2}/>
        <Grid container item xs={5}>
          <Table className={classes.team2Style} dataSource={team1TableData} showHeader={false} columns={teamTableColumns} pagination={false}/>
        </Grid>
      </Grid>
    );
  }

}

export default withStyles(styles)(GamePlayersStat);
