import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import * as React from "react";
import { Component } from "react";
import Slider from "react-slick";


import { Colors } from "../../../utils";


const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  list: {
    margin: '8px',
  },
  card: {},
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  win: {
    backgroundColor: Colors.WIN,
    padding: '24px'
  },
  lose: {
    backgroundColor: Colors.LOSE
  },
  draw: {
    backgroundColor: Colors.DRAW
  }
});

const data = [
  {
    title: 'Title 1',
    date: '2018-05-17',
  },
  {
    title: 'Title 2',
    date: '2018-05-17',
  },
  {
    title: 'Title 3',
    date: '2018-05-17',
  },
  {
    title: 'Title 4',
    date: '2018-05-17',
  },
  {
    title: 'Title 5',
    date: '2018-05-17',
  },
  {
    title: 'Title 6',
    date: '2018-05-17',
  },
];

class TeamHistory extends Component<any, any> {
  public render(): React.ReactNode {
    const { classes } = this.props;
    const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3
    };
    return (
      <div className={classes.win}>
        <Slider {...settings}>
          {data.map(this.renderItem)}
        </Slider>
      </div>
    )
  }

  private renderItem = (item) => {
    const { classes } = this.props;
    return (
      <div>
        <Card className={classes.card}>
          <CardContent>
            <Typography className={classes.title} color="textSecondary" gutterBottom>
              Word of the Day
            </Typography>
            <Typography variant="h5" component="h2">
              Win
            </Typography>
          </CardContent>
        </Card>
      </div>
    )
  }
}

export default withStyles(styles)(TeamHistory);
