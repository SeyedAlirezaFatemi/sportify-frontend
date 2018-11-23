import Typography from "@material-ui/core/Typography/Typography";
import { Card, Icon, Row } from 'antd';
import * as React from "react";

const PlayerInfo: React.FunctionComponent = () => (
  <div style={{ background: '#ECECEC', padding: '30px' }}>
    <Card title={`Player Info`} bordered={false}>
      <Row>
        <Typography variant="subtitle2" gutterBottom>
          <Icon type="idcard" style={{ marginRight: '8px' }} />
          Player name:
        </Typography>
      </Row>
      <Row>
        <Typography variant="subtitle2" gutterBottom>
          <Icon type="medicine-box" style={{ marginRight: '8px' }} />
          Age:
          Height:
          Weight:
        </Typography>
      </Row>
      <Row>
        <Typography variant="subtitle2" gutterBottom>
          <Icon type="team" style={{ marginRight: '8px' }} />
          Team:
        </Typography>
      </Row>
      <Row>
        <Typography variant="subtitle2" gutterBottom>
          <Icon type="flag" style={{ marginRight: '8px' }} />
          Nationality:
        </Typography>
      </Row>
      <Row>
        <Typography variant="subtitle2" gutterBottom>
          <Icon type="skin" style={{ marginRight: '8px' }} />
          Position:
        </Typography>
      </Row>
    </Card>
  </div>
);

export default PlayerInfo;