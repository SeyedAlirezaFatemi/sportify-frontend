import Grid from '@material-ui/core/Grid/Grid';
import withStyles from '@material-ui/core/styles/withStyles';
import Table from 'antd/es/table/Table';
import * as React from 'react';
import { Component } from 'react';
import axios from '../../../api';
import { API, Sports } from '../../../utils';
import TShirt from '../../Common/Icons/TShirt';

const styles = theme => ({
  gamePlayersStatTable: {
    width: '100%',
  },
  substitutePlayer: {
    backgroundColor: '#F9F3DC',
  },
});

function GetPlayers(sport: string, teamId: string) {
  const players: any = [];

  axios.get(`${API.TEAM_PLAYERS}${sport}/${teamId}/`).then(response => {
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
    }],
  };

  public componentDidMount(): void {
    const { sport, GameId } = this.props;
    if (sport === Sports.SOCCER) {
      axios.get(`${API.SOCCER_GAME_STATISTICS}${GameId}/`).then(statResponse => {
        const homeTeamId = statResponse.data.home.id;
        const awayTeamId = statResponse.data.away.id;

        const homePlayersData = GetPlayers(sport, homeTeamId);
        const awayPlayersData = GetPlayers(sport, awayTeamId);

        this.setState(prevState => {
          return ({
            homePlayersData,
            awayPlayersData,
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
              },
            ],
          });
        })
      });
    } else if (sport === Sports.BASKETBALL) {

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
