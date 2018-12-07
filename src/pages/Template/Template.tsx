import { withStyles } from '@material-ui/core/styles';
import { Layout, Menu } from 'antd';
import * as React from 'react';
import { Link, Route } from "react-router-dom";
import './Template.css';

const { Header, Content, Footer } = Layout;

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
});

class Template extends React.Component<any, any> {

  public render(): React.ReactNode {
    const { classes } = this.props;
    return (
      <Layout className="layout">
        <Header>
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            style={{ lineHeight: '64px' }}
          >
            <Menu.Item key="1"><Link to="/">Home</Link></Menu.Item>
            <Menu.Item key="2"><Link to="/team">Team</Link></Menu.Item>
            <Menu.Item key="3"><Link to="/league">League</Link></Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: '0 50px', margin: '16px 0' }}>
          <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
            {this.props.children}
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Ahmad Zowghi Production ©2018 Created by Some Bitches
        </Footer>
      </Layout>
    )
  }
}

export default withStyles(styles)(Template);
