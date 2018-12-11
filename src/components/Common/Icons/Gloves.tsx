import withStyles from '@material-ui/core/styles/withStyles';
import * as React from 'react';
import {Component} from 'react';


const logo = require('../../../assets/svgs/gloves.svg') as string;

const styles = theme => ({
  imageStyle: {
    height: '20px',
    width: '20px',
  },
});

class Gloves extends Component<any, any> {
  public render(): React.ReactNode {
    const {classes} = this.props;
    return (
      <img className={classes.imageStyle} src={logo} alt="glove"/>
    )
  }
}

export default withStyles(styles)(Gloves);
