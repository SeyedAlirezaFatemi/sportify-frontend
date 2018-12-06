import * as React from "react";
import {Component} from "react";
import Timeline from "antd/es/timeline/Timeline";
import {Icon} from "antd";
import withStyles from "@material-ui/core/es/styles/withStyles";
import {Simulate} from "react-dom/test-utils";
import progress = Simulate.progress;


const styles = theme => ({
  root: {
    marginTop: "50px",
  },
});


class GameTimeLine extends Component<any,any> {
  public render(): React.ReactNode {
    const {classes} = this.props;
    return (
      <Timeline className={classes.root} mode="alternate">
        <Timeline.Item dot={<Icon type="sync" spin/>}>Last data refresh
          for {(new Date()).getHours() + ":" + (new Date()).getMinutes() + "'"}</Timeline.Item>
        <Timeline.Item color="green">Some great thing</Timeline.Item>
        <Timeline.Item dot={"69'"}>Something happen </Timeline.Item>
        <Timeline.Item dot={"37'"} color="red">Red Card for CR7 </Timeline.Item>
        <Timeline.Item dot={"23'"}>Corner for Chelsea</Timeline.Item>
        <Timeline.Item dot={<Icon type="clock-circle-o" style={{fontSize: '16px'}}/>}>Game Started
          2015-09-01</Timeline.Item>
      </Timeline>
    );
  }

}

export default withStyles(styles)(GameTimeLine);
