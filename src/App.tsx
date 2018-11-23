import { Col, Layout, Menu, Row } from 'antd';
import * as React from 'react';
import './App.css';
import { NewsList, PlayerCard, PlayerInfo, PlayersList, PlayerStatistics } from "./components";

const { Header, Content } = Layout;

class App extends React.Component {
  public render() {
    return (
      <Layout>
        <Header className="header">
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['1']}
            style={{ lineHeight: '64px' }}
          >
            <Menu.Item key="1">Home</Menu.Item>
          </Menu>
        </Header>
        <Layout>
          <Layout style={{ padding: '0 24px 24px' }}>
            <Content style={{ background: '#364d79;', padding: 24, margin: 0, minHeight: 280 }}>
              <Row type="flex">
                <Col span={8}>
                  <PlayerCard />
                </Col>
                <Col span={8}>
                  <PlayerInfo />
                </Col>
                <Col span={8}>
                  <PlayerStatistics />
                </Col>
              </Row>
              <Row style={{ margin: '24px'}}>
                <Col span={12}>
                  <PlayersList />
                </Col>
              </Row>
              <Row>
                <NewsList />
              </Row>
            </Content>
          </Layout>
        </Layout>
      </Layout>
    );
  }
}

export default App;
