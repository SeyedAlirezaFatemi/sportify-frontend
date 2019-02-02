import Grid from '@material-ui/core/Grid/Grid';
import withStyles from '@material-ui/core/styles/withStyles';
import { Tabs } from 'antd';
import * as React from 'react';
import { Component } from 'react';
import { GameHeader, GamePlayersStat, GameStat, GameTimeLine, ImageGrid, NewsList } from '../../components';
import { GameNewsAPI, GamePhotosAPI } from '../../utils';
import { Template } from '../index';

const TabPane = Tabs.TabPane;

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  tabsStyles: {
    marginTop: '20px',
  },
});

// @ts-ignore
class GamePage extends Component<any, any> {

  public render(): React.ReactNode {
    const { classes, match, sport } = this.props;
    const { params } = match;
    const { id } = params;
    const photosUrl = GamePhotosAPI(sport, id);
    const newsUrl = GameNewsAPI(sport, id);
    return (
      <Template>
        <GameHeader />
        <Grid container direction="row" className={classes.root}>
          <Grid item container className={classes.tabsStyles}>
            <Grid item xl={8} lg={8} md={8} sm={12} xs={12}>
              <Tabs defaultActiveKey="1">
                <TabPane tab="Game Statistics" key="1">
                  <GameStat gameId={id} sport={sport} />
                </TabPane>
                <TabPane tab="Game News" key="2">
                  <NewsList url={newsUrl} />
                </TabPane>
                <TabPane tab="Game Players Stat" key="3">
                  <GamePlayersStat gameId={id} sport={sport} />
                </TabPane>
                <TabPane tab="Game Photos" key="4">
                  <ImageGrid url={photosUrl} />
                </TabPane>
                <TabPane tab="Game Videos" key="5">
                  Game Videos
                </TabPane>
              </Tabs>
            </Grid>
            <Grid item xl={4} lg={4} md={4} sm={12} xs={12}>
              <GameTimeLine GameId={id} sport={sport} />
            </Grid>
          </Grid>
        </Grid>
      </Template>
    );
  }
}

// @ts-ignore
export default withStyles(styles)(GamePage);
