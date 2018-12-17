import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import { withStyles } from '@material-ui/core/styles';
import * as React from 'react';

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

function ImageGrid(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <GridList cellHeight={250} className={classes.gridList} cols={3}>
        {tileData.map(tile => (
          <GridListTile key={tile.img} cols={tile.cols || 1}>
            <img src={tile.img} alt={tile.title} />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}

// @ts-ignore
export default withStyles(styles)(ImageGrid);
