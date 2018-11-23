import { Avatar, Card, Icon } from 'antd';
import * as React from 'react';

const { Meta } = Card;

const PlayerCard: React.FunctionComponent = () => (
  <Card
    cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
    actions={[<Icon key="setting" type="setting" />, <Icon key="edit" type="edit" />,
      <Icon key="ellipsis" type="ellipsis" />]}
  >
    <Meta
      avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
      title="Card title"
      description="This is the description"
    />
  </Card>
);


export default PlayerCard;
