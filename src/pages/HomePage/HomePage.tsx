import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import * as React from 'react';
import { Template } from '..';
import { GamesList, NewsList } from '../../components';


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
          <Grid item xl={4} lg={4} md={4} sm={12} xs={12}>
            <GamesList />
          </Grid>
          <Grid item xl={8} lg={8} md={8} sm={12} xs={12}>
            <NewsList />
          </Grid>
        </Grid>
      </Template>
    )
  }
}

export default withStyles(styles)(HomePage);
