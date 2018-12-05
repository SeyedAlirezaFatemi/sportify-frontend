import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
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
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    marginLeft: theme.spacing.unit,
  },
  playIcon: {
    height: 38,
    width: 38,
  },
  followButton: {
    borderRadius: '100px'
  }
});

function TeamHeader(props) {
  const { classes, theme } = props;

  return (
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
          <Button color={"secondary"} variant="outlined" aria-label="Delete" className={classes.followButton}>
            Follow
          </Button>
        </div>
      </div>
    </Card>
  );
}

// @ts-ignore
export default withStyles(styles, { withTheme: true })(TeamHeader);
