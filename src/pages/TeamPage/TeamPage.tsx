import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import { Tabs } from 'antd';
import * as React from 'react';
import { Template } from '..';
import { GameSchedule, NewsList, TeamHeader, TeamPlayersList } from '../../components';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
});

const TabPane = Tabs.TabPane;

class TeamPage extends React.Component<any, any> {
  public render(): React.ReactNode {
    const { classes } = this.props;
    const { params } = this.props.match;
    console.log(params.id);
    return (
      <Template>
        <TeamHeader />
        {/*<Divider>Game Schedule</Divider>*/}
        {/*<Grid container justify="center">*/}
        {/*<GameSchedule />*/}
        {/*</Grid>*/}
        {/*<Divider>Team Players</Divider>*/}
        {/*<TeamPlayersList />*/}
        {/*<Divider>Related News</Divider>*/}
        {/*<NewsList />*/}
        <Tabs defaultActiveKey="1">
          <TabPane tab="Team Game Schedule" key="1">
            <Grid container justify="center">
              <GameSchedule />
            </Grid>
          </TabPane>
          <TabPane tab="Team Players" key="2">
            <TeamPlayersList />
          </TabPane>
          <TabPane tab="Team News" key="3">
            <NewsList />
          </TabPane>
        </Tabs>
      </Template>
    )
  }
}

export default withStyles(styles)(TeamPage);
