import { withStyles } from '@material-ui/core/styles';
import * as React from 'react';
import { Template } from '..';
import TeamHeader from "../../components/TeamHeader/TeamHeader";


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
        <TeamHeader/>
      </Template>
    )
  }
}

export default withStyles(styles)(TeamPage);
