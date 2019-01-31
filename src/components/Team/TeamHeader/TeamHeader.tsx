import Grid from '@material-ui/core/Grid';
import { Avatar } from 'antd';
import * as React from 'react';
import { TeamInfo } from '../index';

function TeamHeader({ info }) {
  const { name, logo } = info;
  return (
    <Grid container direction="row" justify="center" alignItems="center">
      <Grid item container justify="center" alignItems="center" xs={12} xl={6} sm={12} md={6} lg={6}>
        <Avatar size={250} src={logo.address} icon="user" />
      </Grid>
      <Grid item xs={12} xl={6} sm={12} md={6} lg={6}>
        <TeamInfo name={name} />
      </Grid>
    </Grid>
  );
}

// @ts-ignore
export default TeamHeader;
