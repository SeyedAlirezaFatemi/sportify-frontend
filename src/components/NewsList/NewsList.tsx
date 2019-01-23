import { Avatar, Button, Icon, List, Tabs } from 'antd';
import * as React from 'react';
import { withRouter } from 'react-router-dom';
import axios from '../../api';
import { API } from '../../utils';

const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
);

const TabPane = Tabs.TabPane;

class NewsList extends React.Component<any, any> {
  public state = {
    news: [],
  };

  public componentDidMount(): void {
    axios.get(API.LATEST_NEWS).then(response => {
      this.setState({ news: response.data })
    })
  }

  public render(): React.ReactNode {
    const { history } = this.props;
    const { news } = this.state;
    return (
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
              dataSource={news}
              renderItem={item => (
                <List.Item
                  key={item.id}
                  actions={[<IconText type="message" text="2" />
                    , <Button htmlType="button" onClick={() => history.push(`/news/${item.id}`)}>More</Button>]}
                  extra={<img width={272} alt="logo"
                              src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png" />}
                >
                  <List.Item.Meta
                    avatar={<Avatar src={item.avatar} />}
                    title={<a>{item.title}</a>}
                    description={item.pub_date}
                  />
                  {item.brief}
                </List.Item>
              )}
            />
          </TabPane>
          <TabPane tab="Subscribed" disabled key="2">
            {/*If user is logged in*/}
          </TabPane>
        </Tabs>
      </div>
    )
  }
}

export default withRouter(NewsList);
