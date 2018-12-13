import Grid from '@material-ui/core/Grid';
import { Avatar } from 'antd';
import * as React from 'react';
import { PlayerInfo } from '..';


const PlayerHeader: React.FunctionComponent = () => (
  <Grid container direction="row" justify="center" alignItems="center">
    <Grid item container justify="center" alignItems="center" xs={12} xl={6} sm={12} md={6} lg={6}>
      <Avatar size={250} icon="user" />
    </Grid>
    <Grid item xs={12} xl={6} sm={12} md={6} lg={6}>
      <PlayerInfo />
    </Grid>
  </Grid>
);

export default PlayerHeader;
