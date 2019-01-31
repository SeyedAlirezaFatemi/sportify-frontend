import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography/Typography';
import { Avatar, Card, Icon, Row } from 'antd';
import { AxiosResponse } from 'axios';
import * as React from 'react';
import axios from '../../../api';

class PlayerHeader extends React.Component<any, any> {
  public state: any = {
    info: {},
    fetched: false,
  };

  public componentDidMount(): void {
    const { url } = this.props;
    axios.get(url).then((response: AxiosResponse) => {
      this.setState({ info: response.data, fetched: true })
    })
  }

  public render(): React.ReactNode {
    const { info, fetched } = this.state;
    return (fetched ?
      <Grid container direction="row" justify="center" alignItems="center">
        <Grid item container justify="center" alignItems="center" xs={12} xl={6} sm={12} md={6} lg={6}>
          <Avatar size={250} src={info.avatar.address} icon="user" />
        </Grid>
        <Grid item xs={12} xl={6} sm={12} md={6} lg={6}>
          <div style={{ padding: '30px', height: '100%' }}>
            <Card title={'Player Info'} bordered={false}>
              <Row>
                <Typography variant="subtitle2" gutterBottom>
                  <Icon type="idcard" style={{ marginRight: '8px' }} />
                  Player name: {info.name}
                </Typography>
              </Row>
              <Row>
                <Typography variant="subtitle2" gutterBottom>
                  <Icon type="medicine-box" style={{ marginRight: '8px' }} />
                  Age: {info.age}
                </Typography>
              </Row>
              <Row>
                <Typography variant="subtitle2" gutterBottom>
                  <Icon type="team" style={{ marginRight: '8px' }} />
                  Team: {info.team.name}
                </Typography>
              </Row>
              <Row>
                <Typography variant="subtitle2" gutterBottom>
                  <Icon type="flag" style={{ marginRight: '8px' }} />
                  Nationality: {info.nationality}
                </Typography>
              </Row>
              <Row>
                <Typography variant="subtitle2" gutterBottom>
                  <Icon type="skin" style={{ marginRight: '8px' }} />
                  Position: {info.position}
                </Typography>
              </Row>
            </Card>
          </div>
        </Grid>
      </Grid> : null);
  }
}

export default PlayerHeader;
