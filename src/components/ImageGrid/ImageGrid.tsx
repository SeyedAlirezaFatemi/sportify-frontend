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


function ImageGrid({ images, classes }) {
  return (
    <div className={classes.root}>
      <GridList cellHeight={250} className={classes.gridList} cols={3}>
        {images.map(tile => (
          <GridListTile key={tile.img} cols={1}>
            <img src={tile.img} alt="Image" />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}

// @ts-ignore
export default withStyles(styles)(ImageGrid);
