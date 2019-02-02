import { Typography } from '@material-ui/core'
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import { Avatar } from 'antd';
import * as React from 'react';
import { Component } from 'react';
import api from '../../../api'
import { GameStatisticsAPI, Sports, TeamInfoAPI } from '../../../utils';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
});

class GameHeader extends Component<any, any> {
  public state = {
    homeTeamLogo: '',
    awayTeamLogo: '',
    homeTeamId: 0,
    awayTeamId: 0,
    homeTeamGoals: '',
    awayTeamGoals: '',
  };

  private injectLogoToState(sport: string) {
    api.get(TeamInfoAPI(sport, this.state.homeTeamId)).then(response => {
      this.setState({
        homeTeamLogo: response.data.logo.address,
      });
    });

    api.get(TeamInfoAPI(sport, this.state.awayTeamId)).then(response => {
      this.setState({
        awayTeamLogo: response.data.logo.address,
      });
    });
  }

  componentDidMount(): void {
    const { sport, gameId } = this.props;
    api.get(GameStatisticsAPI(sport, gameId)).then(response => {
      if (sport === Sports.SOCCER) {
        this.setState({
          homeTeamId: response.data.home.id,
          awayTeamId: response.data.away.id,
          homeTeamGoals: response.data.home.goals,
          awayTeamGoals: response.data.away.goals,
        });
      } else if (sport === Sports.BASKETBALL) {
        this.setState({
          homeTeamId: response.data.home.id,
          awayTeamId: response.data.away.id,
          homeTeamGoals: response.data.home.points,
          awayTeamGoals: response.data.away.points,
        });
      }
      this.injectLogoToState(sport);
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
            src={homeTeamLogo}
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
            src={awayTeamLogo}
          />
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(GameHeader);
