import Grid from '@material-ui/core/Grid';
import {withStyles} from '@material-ui/core/styles';
import {Avatar} from "antd";
import * as React from "react";
import {Component} from "react";
import "./GameHeader.css";
import GameTimeLine from "../GameTimeLine/GameTimeLine";

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  game_result: {
    alignContent: "center",
  }
});

class GameHeader extends Component<any, any> {
  public render(): React.ReactNode {
    const {classes} = this.props;
    return (
      <Grid container direction="row" className={classes.root} alignItems="center" justify="space-around">
        <Grid item>
          <Avatar size={300} icon={"user"}/>
        </Grid>
        <Grid item>
          <text className={classes.game_result}>
            1 - 2
            <br/>
            00 : 23
          </text>
        </Grid>
        <Grid item>
          <Avatar size={300} icon={"user"}/>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(GameHeader);
