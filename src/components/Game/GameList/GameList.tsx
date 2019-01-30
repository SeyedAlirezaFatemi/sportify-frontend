import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListSubheader from '@material-ui/core/ListSubheader';
import { withStyles } from '@material-ui/core/styles';
import { Tabs } from 'antd';
import { AxiosResponse } from 'axios';
import classnames from 'classnames';
import * as _ from 'lodash';
import * as React from 'react';
import { Link, Route } from 'react-router-dom';
import api from '../../../api';
import { TodayGames, TomorrowGames, YesterdayGames } from '../../../utils';

const TabPane = Tabs.TabPane;

const styles = theme => ({
  root: {
    flexGrow: 1,
    justifyContent: 'center',
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  subheader: {
    color: '#fff',
    textAlign: 'center',
  },
  today: {
    background: 'green',
  },
  yesterday: {
    background: '#666',
  },
});

class GameList extends React.Component<any, any> {

  public state = {
    today: [],
    yesterday: [],
    tomorrow: [],
  };

  public componentDidMount(): void {
    const { sport } = this.props;
    api.get(TodayGames(sport)).then((response: AxiosResponse) => {
      this.setState({ today: response.data });
    });
    api.get(YesterdayGames(sport)).then((response: AxiosResponse) => {
      this.setState({ yesterday: response.data });
    });
    api.get(TomorrowGames(sport)).then((response: AxiosResponse) => {
      this.setState({ tomorrow: response.data });
    });
  }

  public render(): React.ReactNode {
    return (
      <div style={{ padding: '8px' }}>
        <Tabs
          defaultActiveKey="1"
          tabPosition="left"
        >
          <TabPane tab="All" key="1">
            {this.renderResults()}
          </TabPane>
          <TabPane tab="Subscribed" key="2">
            {this.renderResults()}
          </TabPane>
        </Tabs>
      </div>
    );
  }

  private renderResults() {
    const { classes } = this.props;
    const results: JSX.Element[] = [];
    _.times(5, () => results.push(this.renderGame()));
    return (
      <React.Fragment>
        <List
          subheader={<ListSubheader
            component="div"
            className={classnames(classes.subheader, classes.today)}
          >Today</ListSubheader>}
        >
          {results}
        </List>
        <List
          subheader={<ListSubheader
            component="div"
            className={classnames(classes.subheader, classes.yesterday)}
          >Yesterday</ListSubheader>}
        >
          {results}
        </List>
      </React.Fragment>
    )
  }

  private renderGame() {
    return (
      <React.Fragment>
        <Divider />
        <ListItem style={{ justifyContent: 'center' }} dense button>
          <tr style={{}}>
            <td style={{ textAlign: 'left' }}>
              <Link to="/team/1">دورتموند</Link>
            </td>
            <td style={{ textAlign: 'center', whiteSpace: 'nowrap', padding: '0 6px' }}>
              0 - 1
            </td>
            <td style={{ textAlign: 'right' }}>
              <Link to="/team/1">دورتموند</Link>
            </td>
          </tr>
        </ListItem>
      </React.Fragment>
    )
  }
}

// @ts-ignore
export default withStyles(styles)(GameList);
