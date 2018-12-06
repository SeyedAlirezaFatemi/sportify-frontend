import MaterialCard from '@material-ui/core/Card';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Card } from 'antd';
import * as React from "react";
import { Component } from "react";
import Slider from "react-slick";
import './GameSchedule.css';

import { Grid } from "@material-ui/core";
import { Colors } from "../../utils";


const styles = theme => ({
  container: {
    flexGrow: 1,
    marginTop: '8px',
    marginBottom: '8px',
    padding: '48px',
    maxWidth: '750px',
    backgroundColor: Colors.DEEP_BLUE,
  },
  card: {
    maxWidth: '125px',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  win: {
    backgroundColor: Colors.WIN,
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

class GameSchedule extends Component<any, any> {
  public render(): React.ReactNode {
    const { classes } = this.props;
    const settings = {
      infinite: false,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1280,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 3,
          }
        },
        {
          breakpoint: 960,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <MaterialCard className={classes.container}>
        <Slider {...settings}>
          {data.map(this.renderItem)}
        </Slider>
      </MaterialCard>
    )
  }

  private renderItem = (item) => {
    const { classes } = this.props;
    return (
      <div>
        <Card
          title="1397/06/02"
          className={classes.card}
          headStyle={{
            fontSize: 12,
            backgroundColor: Colors.WIN,
            maxHeight: '20px',
            minHeight: '20px',
          }}
        >
          <Grid container direction="column">
            <Grid container>
              {this.renderResult()}
              {this.renderResult()}
              {this.renderResult()}
            </Grid>
          </Grid>
        </Card>
      </div>
    )
  };

  private renderResult() {
    return (
      <Grid item container direction="row">
        <Grid item container justify="flex-start" xs={6}>
          <Typography>
            0
          </Typography>
        </Grid>
        <Grid item container justify="flex-end" xs={6}>
          <Typography>
            پدیده
          </Typography>
        </Grid>
      </Grid>
    )
  }
}

export default withStyles(styles)(GameSchedule);
