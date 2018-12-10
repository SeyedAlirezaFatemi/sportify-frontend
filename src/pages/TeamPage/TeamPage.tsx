import { Grid } from "@material-ui/core";
import { withStyles } from '@material-ui/core/styles';
import { Divider } from "antd";
import * as React from 'react';
import { Template } from '..';
import { GameSchedule, NewsList, TeamHeader, TeamPlayersList } from "../../components";

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
});

class TeamPage extends React.Component<any, any> {
  public render(): React.ReactNode {
    const { classes } = this.props;
    const { params } = this.props.match;
    console.log(params.id);
    return (
      <Template>
        <TeamHeader />
        <Divider>Game Schedule</Divider>
        <Grid container justify="center">
          <GameSchedule />
        </Grid>
        <Divider>Team Players</Divider>
        <TeamPlayersList />
        <Divider>Related News</Divider>
        <NewsList />
      </Template>
    )
  }
}

export default withStyles(styles)(TeamPage);
