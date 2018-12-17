import Typography from '@material-ui/core/Typography/Typography';
import { Button, Card, Icon, Row } from 'antd';
import * as React from 'react';

const TeamInfo: React.FunctionComponent = () => (
  <div style={{ padding: '30px', height: '100%' }}>
    <Card title={'Team Info'} bordered={false} extra={<Button type="primary">Subscribe</Button>}>
      <Row>
        <Typography variant="subtitle2" gutterBottom>
          <Icon type="idcard" style={{ marginRight: '8px' }} />
          Team name:
        </Typography>
      </Row>
      <Row>
        <Typography variant="subtitle2" gutterBottom>
          <Icon type="medicine-box" style={{ marginRight: '8px' }} />
          Since:
        </Typography>
      </Row>
    </Card>
  </div>
);

export default TeamInfo;
