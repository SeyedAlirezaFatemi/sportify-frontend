import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import * as React from 'react';
import { Template } from '..';
import { GamesList, NewsList } from "../../components";


const styles = theme => ({
  root: {
    flexGrow: 1,
  },
});

class HomePage extends React.Component<any, any> {

  public render(): React.ReactNode {
    const { classes } = this.props;
    return (
      <Template>
        <Grid container className={classes.root} direction="row" spacing={24}>
          <Grid item xs={4}>
            <GamesList />
          </Grid>
          <Grid item xs={8}>
            <NewsList />
          </Grid>
        </Grid>
      </Template>
    )
  }
}

export default withStyles(styles)(HomePage);
