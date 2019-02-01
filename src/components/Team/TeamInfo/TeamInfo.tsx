import Typography from '@material-ui/core/Typography/Typography';
import { Button, Card, Icon, Row } from 'antd';
import * as React from 'react';
import { connect } from 'react-redux';
import api from '../../../api';
import { TeamIsSubscribedAPI, TeamSubscribAPI } from '../../../utils';

class TeamInfo extends React.Component<any, any> {
  public state = { subscribed: false, };

  public componentDidMount(): void {
    const { sport, teamId, token } = this.props;
    if (token) {
      api.get(TeamIsSubscribedAPI(sport, teamId)).then(response => {
        this.setState({ subscribed: response.data.is_subscribed })
      });
    }
  }

  public render(): React.ReactNode {
    const { name, token } = this.props;
    const { subscribed } = this.state;
    const extra = subscribed ? <Button type="ghost" color="green" onClick={this.onSubscribe}>Subscribed</Button> :
      <Button type="primary" onClick={this.onSubscribe}>Subscribe</Button>;
    return (
      <div style={{ padding: '30px', height: '100%' }}>
        <Card title={'Team Info'} bordered={false}
              extra={token ? extra : null}>
          <Row>
            <Typography variant="subtitle2" gutterBottom>
              <Icon type="idcard" style={{ marginRight: '8px' }} />
              {name}
            </Typography>
          </Row>
          <Row>
            <Typography variant="subtitle2" gutterBottom>
              <Icon type="medicine-box" style={{ marginRight: '8px' }} />
              Since 1998
            </Typography>
          </Row>
        </Card>
      </div>
    )
  }

  private onSubscribe = () => {
    const { teamId, token, sport } = this.props;
    api.post(TeamSubscribAPI(sport), {
      team_id: teamId,
    }, { headers: { Authorization: `Token ${token}` } }).then(response => {
      this.setState({ subscribed: response.data.is_subscribed })
    })
  }
}

const mapStateToProps = state => ({
  token: state.auth.token,
});

export default connect(mapStateToProps, null)(TeamInfo);
