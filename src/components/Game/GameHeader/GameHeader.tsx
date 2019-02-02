import { Typography } from '@material-ui/core'
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import { Avatar } from 'antd';
import * as React from 'react';
import { Component } from 'react';
import api from '../../../api'
import { GameStatisticsAPI, Sports } from '../../../utils';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
});

class GameHeader extends Component<any, any> {
  public state = {
    homeTeamLogo: '',
    awayTeamLogo: '',
    homeTeamGoals: '',
    awayTeamGoals: '',
  };

  componentDidMount(): void {
    const { sport, gameId } = this.props;
    api.get(GameStatisticsAPI(sport, gameId)).then(response => {
      if (sport === Sports.SOCCER) {
        this.setState({
          homeTeamGoals: response.data.home.goals,
          awayTeamGoals: response.data.away.goals,
        });
      } else if (sport === Sports.BASKETBALL) {
        this.setState({
          homeTeamGoals: response.data.home.points,
          awayTeamGoals: response.data.away.points,
        });
      }
    });
  }

  public render(): React.ReactNode {
    const { classes } = this.props;
    const {
      homeTeamLogo,
      awayTeamLogo,
      homeTeamGoals,
      awayTeamGoals
    } = this.state;
    return (
      <Grid container direction="row" className={classes.root} alignItems="center" justify="space-around">
        <Grid item>
          <Avatar
            size={300}
            icon={'user'}
          />
        </Grid>
        <Grid item alignContent="center">
          <Typography align="center" color="primary" variant="h1">
            {homeTeamGoals} - {awayTeamGoals}
          </Typography>
        </Grid>
        <Grid item>
          <Avatar
            size={300}
            icon={'user'}
          />
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(GameHeader);
