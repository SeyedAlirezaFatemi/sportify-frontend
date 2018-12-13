import Grid from '@material-ui/core/Grid/Grid';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import withStyles from '@material-ui/core/styles/withStyles';
import { Tabs } from 'antd';
import * as React from 'react';
import { Component } from 'react';
import { GameHeader, GamePlayersStat, GameStat, GameTimeLine, NewsList } from '../../components';
import { Template } from '../index';

const TabPane = Tabs.TabPane;

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  grid: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 500,
    height: 450,
  },
  tabsStyles: {
    marginTop: '20px',
  },
});
const tileData = [{
  img: 'https://sport360.com/wp-content/uploads/2017/12/Messi-RealMadrid-Bernabeu.jpg',
  title: 'Image',
  author: 'author',
  cols: 2,
}, {
  img: 'https://www.hindustantimes.com/rf/image_size_960x540/HT/p2/2017/12/23/Pictures/barcelona-liga-santander-real-madrid-vs-fc_544bbc3e-e7e9-11e7-b094-c21f82b60b0b.jpg',
  title: 'Image',
  author: 'author',
  cols: 1,
}, {
  img: 'https://sport360.com/wp-content/uploads/2017/12/Messi-RealMadrid-Bernabeu.jpg',
  title: 'Image',
  author: 'author',
  cols: 1,
}, {
  img: 'https://sport360.com/wp-content/uploads/2017/12/Messi-RealMadrid-Bernabeu.jpg',
  title: 'Image',
  author: 'author',
  cols: 2,
}, {
  img: 'https://sport360.com/wp-content/uploads/2017/12/Messi-RealMadrid-Bernabeu.jpg',
  title: 'Image',
  author: 'author',
  cols: 2,
},
];

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
                  <div className={classes.grid}>
                    <GridList cellHeight={160} className={classes.gridList} cols={3}>
                      {tileData.map(tile => (
                        <GridListTile key={tile.img} cols={tile.cols || 1}>
                          <img src={tile.img} alt={tile.title} />
                        </GridListTile>
                      ))}
                    </GridList>
                  </div>
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
