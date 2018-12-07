import Grid from "@material-ui/core/Grid/Grid";
import withStyles from "@material-ui/core/styles/withStyles";
import {Tabs} from "antd";
import * as React from "react";
import {Component} from "react";
import {GameHeader, GameStat, GameTimeLine, NewsList} from "../../components";
import {Template} from "../index";
import Carousel from "antd/lib/carousel";
import Card from "antd/es/card";

const TabPane = Tabs.TabPane;

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  game_timeline: {
    paddingTop: "20px",
  }
});

class GamePage extends Component<any, any> {
  public render(): React.ReactNode {
    const { classes } = this.props;

    return (
      <Template>
        <GameHeader />
        <Grid container direction="row" className={classes.root}>
          <Grid item container>
            <Grid item xs={8}>
              <Tabs defaultActiveKey="1">
                <TabPane tab="Game Statistics" key="1">
                  <GameStat />
                </TabPane>
                <TabPane tab="Game News" key="2">
                  <NewsList />
                </TabPane>
                <TabPane tab="Game Photos" key="3">
                  Content of Game Photos
                  <Carousel autoplay>
                    <div><h3>
                      <Card/> 1
                    </h3></div>
                    <div><h3>
                      <Card/> 2
                    </h3></div>
                    <div><h3>
                      <Card/> 3
                    </h3></div>
                    <div><h3>
                      <Card/> 4
                    </h3></div>
                  </Carousel>,
                </TabPane>
                <TabPane tab="Game Videos" key="4">
                  Content of Game Videos
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

export default withStyles(styles)(GamePage);
