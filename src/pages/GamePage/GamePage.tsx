import Grid from "@material-ui/core/Grid/Grid";
import withStyles from "@material-ui/core/styles/withStyles";
import {Tabs} from "antd";
import * as React from "react";
import {Component} from "react";
import {GameHeader, GameStat, GameTimeLine, NewsList} from "../../components";
import {Template} from "../index";
import Carousel from "antd/lib/carousel";
import GamePlayersStat from "../../components/Game/GamePlayersStat/GamePlayersStat";

const TabPane = Tabs.TabPane;

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  tabsStyles: {
    marginTop: "20px",
  }
});

const imageSrcs : string[] = [
  "https://sport360.com/wp-content/uploads/2017/12/Messi-RealMadrid-Bernabeu.jpg",
  "https://www.hindustantimes.com/rf/image_size_960x540/HT/p2/2017/12/23/Pictures/barcelona-liga-santander-real-madrid-vs-fc_544bbc3e-e7e9-11e7-b094-c21f82b60b0b.jpg",
  "https://static.independent.co.uk/s3fs-public/thumbnails/image/2017/04/09/13/ronaldo-neymar.jpg?w968h681",
  "https://static.independent.co.uk/s3fs-public/thumbnails/image/2017/04/23/21/navas.jpg?width=1000&height=614&fit=bounds&format=pjpg&auto=webp&quality=70&crop=16:9,offset-y0.5",
  ];

class GamePage extends Component<any, any> {
  public render(): React.ReactNode {
    const {classes} = this.props;

    return (
      <Template>
        <GameHeader/>
        <Grid container direction="row" className={classes.root}>
          <Grid item container className={classes.tabsStyles}>
            <Grid item xs={8}>
              <Tabs defaultActiveKey="1">
                <TabPane tab="Game Statistics" key="1">
                  <GameStat/>
                </TabPane>
                <TabPane tab="Game News" key="2">
                  <NewsList/>
                </TabPane>
                <TabPane tab="Game Players Stat" key="3">
                  <GamePlayersStat/>
                </TabPane>
                <TabPane tab="Game Photos" key="4">
                  <Carousel autoplay>
                    <div>
                      <h3>
                        <img src={imageSrcs[0]}/>
                      </h3>
                    </div>
                    <div>
                      <h3>
                        <img src={imageSrcs[1]}/>
                      </h3>
                    </div>
                    <div>
                      <h3>
                        <img src={imageSrcs[2]}/>
                      </h3>
                    </div>
                    <div>
                      <h3>
                        <img src={imageSrcs[3]}/>
                      </h3>
                    </div>
                  </Carousel>
                </TabPane>
                <TabPane tab="Game Videos" key="5">
                  content of Game video
                </TabPane>
              </Tabs>
            </Grid>
            <Grid item xs={4}>
              <GameTimeLine/>
            </Grid>
          </Grid>
        </Grid>
      </Template>
    );
  }
}

export default withStyles(styles)(GamePage);
