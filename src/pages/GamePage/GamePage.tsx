import {Tabs} from "antd";
import * as React from "react";
import GameHeader from "../../components/GameHeader/GameHeader";
import NewsList from "../../components/NewsList/NewsList";
import {Template} from "../index";
import Grid from "@material-ui/core/Grid/Grid";
import GameTimeLine from "../../components/GameTimeLine/GameTimeLine";
import withStyles from "@material-ui/core/styles/withStyles";
import {Component} from "react";

const TabPane = Tabs.TabPane;

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  game_timeline:{
    paddingTop: "20px",
  }
});

class GamePage extends Component<any, any> {
  public render(): React.ReactNode {
    const {classes} = this.props;

    return (
      <Template>
        <GameHeader/>
        <Grid container direction="row" className={classes.root}>
          <Grid item container>
            <Grid item xs={8}>
              <Tabs defaultActiveKey="1">
                <TabPane tab="Game Statistics" key="1">
                </TabPane>
                <TabPane tab="Game News" key="2">
                  <NewsList/>
                </TabPane>
                <TabPane tab="Game Photos" key="3">
                  Content of Game Photos
                </TabPane>
                <TabPane tab="Game Videos" key="4">
                  Content of Game Videos
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
