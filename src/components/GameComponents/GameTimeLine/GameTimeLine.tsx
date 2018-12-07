import withStyles from "@material-ui/core/es/styles/withStyles";
import Timeline from "antd/es/timeline/Timeline";
import * as React from "react";
import { Component } from "react";
import Icon from "semantic-ui-react/dist/commonjs/elements/Icon/Icon";


const styles = theme => ({
  root: {
    marginTop: "50px",
  },
});


class GameTimeLine extends Component<any, any> {
  public render(): React.ReactNode {
    const { classes } = this.props;
    return (
      <Timeline className={classes.root} mode="alternate">
        <Timeline.Item dot={<Icon name="circle notch" loading />}>
          Last data refresh
          for {(new Date()).getHours() + ":" + (new Date()).getMinutes() + "'"}
        </Timeline.Item>
        <Timeline.Item dot="85'">
          <Icon name="meanpath" color="red" /> cristiano ronaldo
        </Timeline.Item>
        <Timeline.Item dot="79'">
          <Icon name="font awesome flag" /> Corner for real madrid
        </Timeline.Item>
        <Timeline.Item dot={"71'"}>
          <Icon name="flag checkered" /> Offside
        </Timeline.Item>
        <Timeline.Item dot={"69'"}>
          <Icon name="soccer" /> Lionel Messi
        </Timeline.Item>
        <Timeline.Item dot={"45'"}>
          <Icon name="arrow up" color="green" /> Lionel Messsi
          <br />
          <Icon name="arrow down" color="red" /> Neimaar
        </Timeline.Item>
        <Timeline.Item dot={"37'"}>
          <Icon name="soccer" /> cristiano ronaldo
        </Timeline.Item>
        <Timeline.Item dot={"23'"}>
          <Icon name="meanpath" color="yellow" />cristiano ronaldo
        </Timeline.Item>
        <Timeline.Item dot={<Icon name="clock outline" style={{ fontSize: '16px' }} />}>
          Game Started
          2015-09-01
        </Timeline.Item>
      </Timeline>
    );
  }

}

export default withStyles(styles)(GameTimeLine);
