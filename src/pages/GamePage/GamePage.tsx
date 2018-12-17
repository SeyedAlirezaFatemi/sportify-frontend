import Grid from '@material-ui/core/Grid/Grid';
import withStyles from '@material-ui/core/styles/withStyles';
import { Tabs } from 'antd';
import * as React from 'react';
import { Component } from 'react';
import { GameHeader, GamePlayersStat, GameStat, GameTimeLine, NewsList } from '../../components';
import { Template } from '../index';
import ImageGrid from '../../components/ImageGrid/ImageGrid';

const TabPane = Tabs.TabPane;

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  tabsStyles: {
    marginTop: '20px',
  },
});

class GamePage extends Component<any, any> {
  public render(): React.ReactNode {
    const { classes } = this.props;

    return (
      <Template>
        <GameHeader />
        <Grid container direction="row" className={classes.root}>
          <Grid item container className={classes.tabsStyles}>
            <Grid item xs={8}>
              <Tabs defaultActiveKey="1">
                <TabPane tab="Game Statistics" key="1">
                  <GameStat />
                </TabPane>
                <TabPane tab="Game News" key="2">
                  <NewsList />
                </TabPane>
                <TabPane tab="Game Players Stat" key="3">
                  <GamePlayersStat />
                </TabPane>
                <TabPane tab="Game Photos" key="4">
                  <ImageGrid />
                </TabPane>
                <TabPane tab="Game Videos" key="5">
                  Game Videos
                </TabPane>
              </Tabs>
            </Grid>
            <Grid item xs={4}>
              <GameTimeLine />
            </Grid>
          </Grid>
        </Grid>
      </Template>
    );
  }
}

// @ts-ignore
export default withStyles(styles)(GamePage);
