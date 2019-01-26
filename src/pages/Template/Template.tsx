import { withStyles } from '@material-ui/core/styles';
import { BackTop, Drawer, Layout, Menu, } from 'antd';
import * as React from 'react';
import { Link, Route } from 'react-router-dom';
import './Template.css';
import { LoginForm } from '../../components';

const { Header, Content, Footer } = Layout;

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  auth: {
    float: 'right',
  },
});

class Template extends React.Component<any, any> {

  public state = { visible: false, };

  public render(): React.ReactNode {
    const { classes } = this.props;
    const { visible } = this.state;
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
            <Menu.Item key="2"><Link to="/team/soccer/1">Team</Link></Menu.Item>
            <Menu.Item key="3"><Link to="/league">League</Link></Menu.Item>
            <Menu.Item key="4"><Link to="/player/soccer/1">Player</Link></Menu.Item>
            <Menu.Item key="5"><Link to="/news/1">News</Link></Menu.Item>
            <Menu.Item key="6"><Link to="/game">Game</Link></Menu.Item>
            <Menu.Item className={classes.auth} key="7" onClick={() => this.showDrawer()}>
              Sign In
            </Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: '0 50px', margin: '16px 0' }}>
          <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
            {this.props.children}
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          ©2018
        </Footer>
        <BackTop />
        <Drawer
          title="Authentication"
          placement="bottom"
          closable={true}
          onClose={this.onClose}
          visible={visible}
        >
          <LoginForm />
        </Drawer>
      </Layout>
    )
  }

  private showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  private onClose = () => {
    this.setState({
      visible: false,
    });
  };
}

// @ts-ignore
export default withStyles(styles)(Template);
