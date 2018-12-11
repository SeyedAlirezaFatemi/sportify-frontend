import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import { Tabs } from 'antd';
import * as React from 'react';
import { Template } from '..';
import { GamesList, NewsList } from '../../components';

const TabPane = Tabs.TabPane;

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
        <Tabs defaultActiveKey="1" tabBarStyle={{ textAlign: 'center' }}>
          <TabPane tab="Soccer" key="1">
            {this.renderContent()}
          </TabPane>
          <TabPane tab="Basketball" key="2">
            {this.renderContent()}
          </TabPane>
        </Tabs>
      </Template>
    )
  }

  private renderContent() {
    const { classes } = this.props;
    return (
      <Grid container className={classes.root} direction="row" spacing={24}>
        <Grid item xl={4} lg={4} md={4} sm={12} xs={12}>
          <GamesList />
        </Grid>
        <Grid item xl={8} lg={8} md={8} sm={12} xs={12}>
          <NewsList />
        </Grid>
      </Grid>
    )
  }
}

export default withStyles(styles)(HomePage);
