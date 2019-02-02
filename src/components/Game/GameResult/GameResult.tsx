import { withStyles } from '@material-ui/core/styles';
import * as React from 'react';
import { Component } from 'react';
import { Card } from 'antd';
import { Grid } from '@material-ui/core';
import Typography from '@material-ui/core/es/Typography';


const styles = theme => ({
  root: {
    minHeight: '200px',
    minWidth: '300px',
  },
  homeTeam: {},
  awayTeam: {},
  gameTime: {},
});

class GameResult extends Component<any, any> {
  render(): React.ReactNode {
    const { classes, Game } = this.props;
    return <Card
      headStyle={{ textAlign: 'center' }}
      title={
        Game.play_date.substring(0, 10)
      }
      className={classes.root}>
      <Grid
        container
        direction={'row'}
        justify={'space-around'}
        alignContent={'center'}
      >
        <Grid
          item
          direction={'column'}
        >
          <Typography
            align={'left'}
            color={'primary'}
            variant={'h5'}
          >
            {Game.home.team.name}
          </Typography>
          <Typography
            align={'left'}
            color={'secondary'}
            variant={'h5'}
          >
            {Game.home_score}
          </Typography>
        </Grid>
        <Grid
          item
          direction={'column'}
        >
          <Typography
            align={'right'}
            color={'primary'}
            variant={'h5'}
          >
            {Game.away.team.name}
          </Typography>
          <Typography
            align={'right'}
            color={'secondary'}
            variant={'h5'}
          >
            {Game.away_score}
          </Typography>
        </Grid>
      </Grid>
    </Card>;

  }

}

export default withStyles(styles)(GameResult);
