import { withStyles } from '@material-ui/core/styles';
import { BackTop, Drawer, Icon, Layout, Menu } from 'antd';
import * as React from 'react';
import { connect } from 'react-redux'
import { Link, Route } from 'react-router-dom';
import { SignInForm, SignUpForm } from '../../components';
import './Template.css';

const { Header, Content, Footer } = Layout;
const SubMenu = Menu.SubMenu;


const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  auth: {
    float: 'right',
  },
});

class Template extends React.Component<any, any> {

  public state = { visible: false, which: '' };

  public render(): React.ReactNode {
    const { classes, email } = this.props;
    const { visible, which } = this.state;
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
            {email ?
              <Menu.Item className={classes.auth} key="9">
                Sign Out
              </Menu.Item> :
              <SubMenu className={classes.auth}
                       title={<span className="submenu-title-wrapper"><Icon
                         type="login" />Authentication</span>}>
                <Menu.Item key="7" onClick={() => this.showDrawer('IN')}>
                  Sign In
                </Menu.Item>
                <Menu.Item key="8" onClick={() => this.showDrawer('UP')}>
                  Sign Up
                </Menu.Item>
              </SubMenu>}
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
          visible={visible && !email}
        >
          {which === 'IN' ? <SignInForm /> : <SignUpForm />}
        </Drawer>
      </Layout>
    )
  }

  private showDrawer = (which: string) => {
    this.setState({
      visible: true,
      which,
    });
  };

  private onClose = () => {
    this.setState({
      visible: false,
    });
  };
}

const mapStateToProps = state => {
  return {
    email: state.auth.email,
  }
};

// @ts-ignore
export default connect(mapStateToProps, null)(withStyles(styles)(Template));
