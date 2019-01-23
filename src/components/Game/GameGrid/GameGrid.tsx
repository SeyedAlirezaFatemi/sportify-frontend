import { Grid } from '@material-ui/core';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import ListSubheader from '@material-ui/core/ListSubheader';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Card } from 'antd';
import * as React from 'react';
import { Colors } from '../../../utils';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    // width: 500,
    // height: 450,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
  card: {
    maxWidth: '125px',
  },
});

const tileData = [
  {
    img: 'https://sport360.com/wp-content/uploads/2017/12/Messi-RealMadrid-Bernabeu.jpg',
    title: 'Image',
    author: 'author',
    cols: 2,
  }, {
    img: 'https://www.hindustantimes.com/rf/image_size_960x540/HT/p2/2017/12/23/Pictures/barcelona-liga-santander-real-madrid-vs-fc_544bbc3e-e7e9-11e7-b094-c21f82b60b0b.jpg',
    title: 'Image',
    author: 'author',
    cols: 1,
  }, {
    img: 'https://sport360.com/wp-content/uploads/2017/12/Messi-RealMadrid-Bernabeu.jpg',
    title: 'Image',
    author: 'author',
    cols: 1,
  }, {
    img: 'https://sport360.com/wp-content/uploads/2017/12/Messi-RealMadrid-Bernabeu.jpg',
    title: 'Image',
    author: 'author',
    cols: 2,
  }, {
    img: 'https://sport360.com/wp-content/uploads/2017/12/Messi-RealMadrid-Bernabeu.jpg',
    title: 'Image',
    author: 'author',
    cols: 2,
  },
];

class GameGrid extends React.Component<any, any> {
  public render(): React.ReactNode {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <GridList cellHeight={180} className={classes.gridList}>
          <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
            <ListSubheader component="div">December</ListSubheader>
          </GridListTile>
          {tileData.map(tile => (
            <GridListTile key={tile.img}>
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
                  </Grid>
                </Grid>
              </Card>
            </GridListTile>
          ))}
        </GridList>
      </div>
    );
  }

  private renderResult() {
    return (
      <Grid item container direction="row">
        <Grid item container justify="flex-start" xs={6}>
          <Typography>
            011
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

// @ts-ignore
export default withStyles(styles)(GameGrid);
