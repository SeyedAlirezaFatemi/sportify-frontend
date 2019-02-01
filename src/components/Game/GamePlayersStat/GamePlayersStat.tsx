import Grid from '@material-ui/core/Grid/Grid';
import withStyles from '@material-ui/core/styles/withStyles';
import Table from 'antd/es/table/Table';
import * as React from 'react';
import { Component } from 'react';
import axios from '../../../api';
import { GameStatisticsAPI, Sports, TeamPlayersAPI } from '../../../utils';
import TShirt from '../../Common/Icons/TShirt';

const styles = theme => ({
  gamePlayersStatTable: {
    width: '100%',
  },
  substitutePlayer: {
    backgroundColor: '#F9F3DC',
  },
});


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
    const { sport, gameId } = this.props;
    const statisticsUrl = GameStatisticsAPI(sport, gameId);
    if (sport === Sports.SOCCER) {
      axios.get(statisticsUrl).then(statResponse => {
        const homeTeamId = statResponse.data.home.id;
        const awayTeamId = statResponse.data.away.id;

        this.injectPlayersIntoState(sport, homeTeamId, 'homePlayersData');
        this.injectPlayersIntoState(sport, awayTeamId, 'awayPlayersData');

        this.setState(prevState => {
          return ({
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
      axios.get(statisticsUrl).then(statResponse => {
        const homeTeamId = statResponse.data.home.id;
        const awayTeamId = statResponse.data.away.id;

        this.injectPlayersIntoState(sport, homeTeamId, 'homePlayersData');
        this.injectPlayersIntoState(sport, awayTeamId, 'awayPlayersData');

        this.setState(prevState => {
          return ({
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

  private injectPlayersIntoState(sport: string, teamId: number, field: string) {
    const players: any = [];
    axios.get(TeamPlayersAPI(sport, teamId)).then(response => {
      for (let i = 0; i < response.data.length; i++) {
        players.push({
          key: i,
          tShirt: <TShirt />,
          teamPlayers: response.data[i].name,
          description: '',
        })
      }
      this.setState({ [field]: players })
    });
  }
}

export default withStyles(styles)(GamePlayersStat);
