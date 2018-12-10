import withStyles from "@material-ui/core/styles/withStyles";
import * as React from 'react';
import {Component} from 'react';


const logo = require('../../../assets/svgs/red-card.svg') as string;

const styles = theme => ({
  imageStyle : {
    height : "20px",
    width : "20px",
  }
});

class RedCard extends Component<any,any>{
  public render(): React.ReactNode {
    const {classes} = this.props;
    return (
      <img className={classes.imageStyle} src={logo} alt="red-card"/>
    )
  }
}

export default withStyles(styles)(RedCard);
