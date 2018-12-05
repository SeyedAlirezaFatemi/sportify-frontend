import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import { Layout, Menu } from 'antd';
import * as React from 'react';
import { GamesList, NewsList } from "../../components";
import './HomePage.css';

const { Header, Content, Footer } = Layout;

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing.unit * 2,
  },
});

class HomePage extends React.Component<any, any> {

  public render(): React.ReactNode {
    const { classes } = this.props;
    return (
      <Layout className="layout">
        <Header>
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['2']}
            style={{ lineHeight: '64px' }}
          >
            <Menu.Item key="1">nav 1</Menu.Item>
            <Menu.Item key="2">nav 2</Menu.Item>
            <Menu.Item key="3">nav 3</Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
            <Grid container className={classes.root} direction="row" spacing={24}>
              <Grid item xs={4}>
                <GamesList />
              </Grid>
              <Grid item xs={8}>
                <NewsList />
              </Grid>
            </Grid>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    )
  }
}

export default withStyles(styles)(HomePage);
