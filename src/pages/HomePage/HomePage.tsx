import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import { Tabs } from 'antd';
import * as React from 'react';
import { Template } from '..';
import { GameList, NewsList } from '../../components';
import { API } from '../../utils';

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
            {this.renderContent(API.LATEST_NEWS_SOCCER)}
          </TabPane>
          <TabPane tab="Basketball" key="2">
            {this.renderContent(API.LATEST_NEWS_BASKETBALL)}
          </TabPane>
        </Tabs>
      </Template>
    )
  }

  private renderContent(url: string) {
    const { classes } = this.props;
    return (
      <Grid container className={classes.root} direction="row" spacing={24}>
        <Grid item xl={4} lg={4} md={4} sm={12} xs={12}>
          <GameList />
        </Grid>
        <Grid item xl={8} lg={8} md={8} sm={12} xs={12}>
          <NewsList url={url} />
        </Grid>
      </Grid>
    )
  }
}

export default withStyles(styles)(HomePage);
