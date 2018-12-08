import withStyles from "@material-ui/core/styles/withStyles";
import * as React from 'react';
import {Component} from 'react';


const logo = require('../../../assets/svgs/shirt.svg') as string;

const styles = theme => ({
  imageStyle : {
    height : "20px",
    width : "20px",
  }
});

class TShirt extends Component<any,any>{
  public render(): React.ReactNode {
    const {classes} = this.props;
    return (
      <img className={classes.imageStyle} src={logo} alt="t-shirt"/>
    )
  }
}

export default withStyles(styles)(TShirt);
