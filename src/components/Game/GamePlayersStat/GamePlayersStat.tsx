import Grid from '@material-ui/core/Grid/Grid';
import withStyles from '@material-ui/core/styles/withStyles';
import Table from 'antd/es/table/Table';
import * as React from 'react';
import { Component } from 'react';
import TShirt from '../../Common/Icons/TShirt';
import axios from '../../../api';
import { API } from '../../../utils';

const styles = theme => ({
  gamePlayersStatTable: {
    width: '100%',
  },
  substitutePlayer: {
    backgroundColor: '#F9F3DC',
  },
});

function GetPlayers(gameType: string, teamId: string) {
  let players: any = [];

  axios.get(`${API.TEAM_PLAYERS}${gameType}/${teamId}/`).then(response => {
    for (let i = 0; i < response.data.length; i++) {
      players.push({
        key: i,
        tShirt: <TShirt />,
        teamPlayers: response.data[i].name,
        description: '',
      })
    }
  });
  return players;
}

class GamePlayersStat extends Component<any, any> {
  public state = {
    homePlayersData: [],
    awayPlayersData: [],
    columns: [{
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
    }]
  };

  componentDidMount(): void {
    const { GameType, GameId } = this.props;
    if (GameType === 'soccer') {
      axios.get(`${API.SOCCER_GAME_STATISTICS}${GameId}/`).then(statResponse => {
        const homeTeamId = statResponse.data.home.id;
        const awayTeamId = statResponse.data.away.id;

        let homePlayersData = GetPlayers(GameType, homeTeamId);
        let awayPlayersData = GetPlayers(GameType, awayTeamId);

        this.setState(prevState => {
          return ({
            homePlayersData: homePlayersData,
            awayPlayersData: awayPlayersData,
            columns: [
              {
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
              }
            ],
          });
        })
      });
    } else if (GameType === 'basketball') {

    }
  }

  public render(): React.ReactNode {
    const { classes } = this.props;
    const { homePlayersData, awayPlayersData, columns } = this.state;
    console.log('state', this.state);

    return (
      <Grid container direction="row">
        <Grid container item xs={4} justify={'flex-start'}>
          <Table className={classes.gamePlayersStatTable}
                 rowClassName={(record, index) => {
                   if (index > 10) {
                     return classes.substitutePlayer
                   }
                 }}

                 dataSource={homePlayersData}
                 columns={columns}
                 showHeader={false}
                 pagination={false}
          />
        </Grid>
        <Grid container item xs={4} />
        <Grid container item xs={4} justify={'flex-end'}>
          <Table className={classes.gamePlayersStatTable}
                 rowClassName={(record, index) => {
                   if (index > 10) {
                     return classes.substitutePlayer
                   }
                 }}
                 dataSource={awayPlayersData}
                 columns={columns}
                 showHeader={false}
                 pagination={false}
          />
        </Grid>
      </Grid>
    );
  }

}

export default withStyles(styles)(GamePlayersStat);
