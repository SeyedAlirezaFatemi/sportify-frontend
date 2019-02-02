import { Typography } from '@material-ui/core'
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import { Avatar } from 'antd';
import * as React from 'react';
import { Component } from 'react';
import api from '../../../api'
import { GameStatisticsAPI } from '../../../utils';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
});

class GameHeader extends Component<any, any> {

  componentDidMount(): void {
    const { sport, gameId } = this.props;
    api.get(GameStatisticsAPI(sport, gameId)).then(response => {
      console.log('respon', response);

    });
  }

  public render(): React.ReactNode {
    const { classes } = this.props;
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
            {} - 2
          </Typography>
          <Typography align="center" color="primary" variant="h5">
            00 : 23
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
