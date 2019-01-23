import Typography from '@material-ui/core/Typography/Typography';
import { Card, Icon, Row } from 'antd';
import { AxiosResponse } from 'axios';
import * as React from 'react';
import axios from '../../../api';

class PlayerInfo extends React.Component<any, any> {
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
    return (
      <div style={{ padding: '30px', height: '100%' }}>
        <Card title={'Player Info'} bordered={false}>
          {fetched ? (
            <React.Fragment>
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
              {/*<Row>*/}
              {/*<Typography variant="subtitle2" gutterBottom>*/}
              {/*<Icon type="medicine-box" style={{ marginRight: '8px' }} />*/}
              {/*Height:*/}
              {/*</Typography>*/}
              {/*</Row>*/}
              {/*<Row>*/}
              {/*<Typography variant="subtitle2" gutterBottom>*/}
              {/*<Icon type="medicine-box" style={{ marginRight: '8px' }} />*/}
              {/*Weight:*/}
              {/*</Typography>*/}
              {/*</Row>*/}
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
            </React.Fragment>) : null}
        </Card>
      </div>
    );
  }
}

export default PlayerInfo;
