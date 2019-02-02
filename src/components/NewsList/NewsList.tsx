import { Avatar, Button, Icon, List, Tabs } from 'antd';
import * as React from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';
import axios from '../../api';

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
    const { url } = this.props;
    axios.get(url).then(response => {
      this.setState({ news: response.data })
    })
  }

  public render(): React.ReactNode {
    const { subscribed, token } = this.props;
    return (
      <div style={{ padding: '8px' }}>
        {subscribed ?
          <Tabs defaultActiveKey="1">
            <TabPane tab="All" key="1">
              {this.renderNewsList()}
            </TabPane>
            <TabPane tab="Subscribed" disabled={!Boolean(token)} key="2">
              {/*If user is logged in*/}
            </TabPane>
          </Tabs> :
          this.renderNewsList()}
      </div>
    )
  }

  private renderNewsList() {
    const { history } = this.props;
    const { news } = this.state;
    return (
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
            actions={[<IconText type="message" text={item.comments.length} />
              , <Button htmlType="button" onClick={() => history.push(`/news/${item.id}`)}>More</Button>]}
            extra={<img width={272} alt="logo"
                        src={item.image_address} />}
          >
            <List.Item.Meta
              avatar={<Avatar src={"https://i.guim.co.uk/img/media/cb11a8712d24f20990c7148c252cad6c6bdd3290/0_0_1645_2165/master/1645.jpg?width=300&quality=45&auto=format&fit=max&dpr=2&s=d116aa2a0b89426fdb2e0e5514f42e23"} />}
              title={<a>{item.title}</a>}
              description={item.pub_date}
            />
            {item.brief}
          </List.Item>
        )}
      />
    )
  }
}

const mapStateToProps = state => ({
  token: state.auth.token,
});

export default connect(mapStateToProps, null)(withRouter(NewsList));
