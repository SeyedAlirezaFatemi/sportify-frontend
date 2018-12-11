import { Card } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import * as React from 'react';

const styles = theme => ({
  card: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 151,
    zIndex: 2,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    alignSelf: 'center',
    paddingBottom: theme.spacing.unit,
  },
  playIcon: {
    height: 38,
    width: 38,
  },
  followButton: {
    marginLeft: '8px',
    borderRadius: '100px',
  },
  container: {
    position: 'relative',
    textAlign: 'center',
    color: 'white',
  },
  centered: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
  back: {
    height: '300px',
    backgroundImage: 'url("https://static.farakav.com/files/pictures/01322975.jpg")',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '50% 50%',
  },
});

function TeamHeader(props) {
  const { classes, theme } = props;

  return (
    <div className={classes.container}>
      <div className={classes.back} />
      <div className={classes.centered}>
        <Card className={classes.card}>
          <CardMedia
            className={classes.cover}
            image="https://cdn.vox-cdn.com/thumbor/4kmxDWeZ5S60eW8PdfI0jvVS3hg=/0x106:2040x1254/1200x675/filters:format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/62400111/akrales_181129_3105_0023_collage_nw.1543248007.jpg"
            title="Live from space album cover"
          />
          <div className={classes.details}>
            <CardContent className={classes.content}>
              <Typography component="h5" variant="h5">
                Live From Space
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                Mac Miller
              </Typography>
            </CardContent>
            <div className={classes.controls}>
              <Button color={'secondary'} variant="outlined" aria-label="Delete" className={classes.followButton}>
                Follow
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}

// @ts-ignore
export default withStyles(styles, { withTheme: true })(TeamHeader);
