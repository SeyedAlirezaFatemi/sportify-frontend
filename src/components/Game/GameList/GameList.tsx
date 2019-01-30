import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListSubheader from '@material-ui/core/ListSubheader';
import { withStyles } from '@material-ui/core/styles';
import { Tabs } from 'antd';
import { AxiosResponse } from 'axios';
import classnames from 'classnames';
import * as React from 'react';
import { Link, Route, withRouter } from 'react-router-dom';
import api from '../../../api';
import { TodayGamesAPI, TomorrowGamesAPI, YesterdayGamesAPI } from '../../../utils';

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
    api.get(TodayGamesAPI(sport)).then((response: AxiosResponse) => {
      this.setState({ today: response.data });
    });
    api.get(YesterdayGamesAPI(sport)).then((response: AxiosResponse) => {
      this.setState({ yesterday: response.data });
    });
    api.get(TomorrowGamesAPI(sport)).then((response: AxiosResponse) => {
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
    return (
      <React.Fragment>
        <List
          subheader={<ListSubheader
            component="div"
            className={classnames(classes.subheader, classes.yesterday)}
          >Yesterday</ListSubheader>}
        >
          {this.state.yesterday.map(game => this.renderGame(game))}
        </List>
        <List
          subheader={<ListSubheader
            component="div"
            className={classnames(classes.subheader, classes.today)}
          >Today</ListSubheader>}
        >
          {this.state.today.map(game => this.renderGame(game))}
        </List>
        <List
          subheader={<ListSubheader
            component="div"
            className={classnames(classes.subheader, classes.yesterday)}
          >Tomorrow</ListSubheader>}
        >
          {this.state.tomorrow.map(game => this.renderGame(game))}
        </List>
      </React.Fragment>
    )
  }

  private renderGame(game) {
    const { sport, history } = this.props;
    const { home_score, away_score, home, away } = game;
    const homeId = home.id;
    const homeName = home.team.name;
    const awayId = away.id;
    const awayName = away.team.name;
    return (
      <React.Fragment>
        <Divider />
        <ListItem style={{ justifyContent: 'center' }} dense button>
          <tr>
            <td style={{ textAlign: 'left' }}>
              <Link to={`/team/${sport}/${homeId}`}>
                {homeName}
              </Link>
            </td>
            <td style={{ textAlign: 'center', whiteSpace: 'nowrap', padding: '0 6px' }}
                onClick={() => history.push(`/game/${game.id}`)}>
              {home_score} - {away_score}
            </td>
            <td style={{ textAlign: 'right' }}>
              <Link to={`/team/${sport}/${awayId}`}>
                {awayName}
              </Link>
            </td>
          </tr>
        </ListItem>
      </React.Fragment>
    )
  }
}

// @ts-ignore
export default withRouter(withStyles(styles)(GameList));
