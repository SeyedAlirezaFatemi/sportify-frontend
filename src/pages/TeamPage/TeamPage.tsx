import { withStyles } from '@material-ui/core/styles';
import * as React from 'react';
import { Template } from '..';
import { TeamHeader, TeamHistory } from "../../components";
// @ts-ignore
import { Comment } from 'antd/lib/c'


const styles = theme => ({
  root: {
    flexGrow: 1,
  },
});

class TeamPage extends React.Component<any, any> {

  public render(): React.ReactNode {
    const { classes } = this.props;
    return (
      <Template>
        <TeamHeader />
        <TeamHistory />
        <Comment />
      </Template>
    )
  }
}

export default withStyles(styles)(TeamPage);
