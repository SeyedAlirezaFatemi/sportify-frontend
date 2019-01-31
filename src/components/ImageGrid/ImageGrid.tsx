import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import { withStyles } from '@material-ui/core/styles';
import { AxiosResponse } from 'axios';
import * as React from 'react';
import api from '../../api';

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


class ImageGrid extends React.Component<any, any> {
  public state = { images: [] };

  public componentDidMount(): void {
    const { url } = this.props;
    api.get(url).then((response: AxiosResponse) => {
      this.setState({ images: response.data.images })
    })
  }

  public render(): React.ReactNode {
    const { classes } = this.props;
    const { images } = this.state;
    return (
      <div className={classes.root}>
        <GridList cellHeight={250} className={classes.gridList} cols={3}>
          {images.map((image: any) => (
            <GridListTile key={image.id} cols={1}>
              <img src={image.address} alt="Image" />
            </GridListTile>
          ))}
        </GridList>
      </div>
    );
  }

}

// @ts-ignore
export default withStyles(styles)(ImageGrid);
