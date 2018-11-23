import * as React from "react";
import { Card, Icon, Row } from 'antd';

const PlayerInfo: React.FunctionComponent = () => (
  <div style={{ background: '#ECECEC', padding: '30px' }}>
    <Card title={`Player Info`} bordered={false} style={{ width: 300 }}>
      <Row>
        <Icon type="idcard" />
        <text>  Player name:</text>
      </Row>
      <Row>
        <Icon type="medicine-box" />
      </Row>
      <Row>
        <Icon type="team" />
      </Row>
    </Card>
  </div>
);

export default PlayerInfo;