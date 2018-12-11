import { Avatar, Button, Icon, List, Tabs } from 'antd';
import * as React from 'react';
import { withRouter } from 'react-router-dom'

const listData: any[] = [];
for (let i = 0; i < 23; i++) {
  listData.push({
    href: 'http://ant.design',
    title: `Fatemi S3 part ${i}`,
    avatar: 'https://d9np3dj86nsu2.cloudfront.net/thumb/0c771449acaecb388c58d8805d966f61/350_403',
    description: 'A Team of strong cool guys',
    content: 'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
  });
}

const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
);

const TabPane = Tabs.TabPane;

// @ts-ignore
const NewsList: React.FunctionComponent = ({ history }) => (
  <div style={{ padding: '8px' }}>
    <Tabs defaultActiveKey="1">
      <TabPane tab="All" key="1">
        <List
          itemLayout="vertical"
          size="large"
          pagination={{
            onChange: (page) => {
              console.log(page);
            },
            pageSize: 3,
          }}
          dataSource={listData}
          renderItem={item => (
            <List.Item
              key={item.title}
              actions={[<IconText type="message" text="2" />
                , <Button htmlType="button" onClick={() => history.push('/news/1')}>More</Button>]}
              extra={<img width={272} alt="logo"
                          src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png" />}
            >
              <List.Item.Meta
                avatar={<Avatar src={item.avatar} />}
                title={<a href={item.href}>{item.title}</a>}
                description={item.description}
              />
              {item.content}
            </List.Item>
          )}
        />
      </TabPane>
      <TabPane tab="Subscribed" disabled key="2">
        {/*If user is logged in*/}
      </TabPane>
    </Tabs>
  </div>
);

export default withRouter(NewsList);
