import { Grid } from '@material-ui/core';
import { Input, Table, Tabs } from 'antd';
import * as React from 'react';
import { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import { Template } from '../';
import api from '../../api';
import { API } from '../../utils';
import './LeaugeHomePage.css';


const Search = Input.Search;
const TabPane = Tabs.TabPane;


const columns = [{
  title: 'League',
  dataIndex: 'name',
  key: 'league',
  render: (text, item) => (<Link to={`league/${item.sport}/${item.id}`}>{text}</Link>),
}, {
  title: 'Year',
  dataIndex: 'beginning_year',
  key: 'year',
}, {
  title: 'Country',
  dataIndex: 'country',
  key: 'country',
},
];

class LeagueHomePage extends Component {
  public state: any = { allLeagues: [], leagues: [] };

  public componentDidMount(): void {
    api.get(`${API.ALL_LEAGUES}`).then(response => {
      const allLeagues = response.data;
      this.setState({ allLeagues, leagues: allLeagues });
    });
  }

  public render(): React.ReactNode {
    return (
      <Template>
        <Grid container justify="center">
          <Search
            placeholder="Search Leagues"
            onSearch={this.handleSearch}
            style={{ width: 200 }}
          />
        </Grid>
        <Tabs defaultActiveKey="1" tabBarStyle={{ textAlign: 'center' }}>
          <TabPane tab="Current Leagues" key="1">
            <Tabs
              tabPosition="left"
              defaultActiveKey="1"
            >
              <TabPane tab="Soccer" key="1">
                <Table columns={columns} dataSource={this.leagueFilter(true, 'Soccer')} pagination={false} />
              </TabPane>
              <TabPane tab="Basketball" key="2">
                <Table columns={columns} dataSource={this.leagueFilter(true, 'Basketball')} pagination={false} />
              </TabPane>
            </Tabs>
          </TabPane>
          <TabPane tab="Old Leagues" key="2">
            <Tabs
              tabPosition="left"
              defaultActiveKey="1"
            >
              <TabPane tab="Soccer" key="1">
                <Table columns={columns} dataSource={this.leagueFilter(false, 'Soccer')} pagination={false} />
              </TabPane>
              <TabPane tab="Basketball" key="2">
                <Table columns={columns} dataSource={this.leagueFilter(false, 'Basketball')} pagination={false} />
              </TabPane>
            </Tabs>
          </TabPane>
        </Tabs>
      </Template>
    )
  }

  private leagueFilter = (current: boolean, sport: string) => {
    return this.state.leagues.filter((league) => {
      return league.sport === sport && league.status === current;
    });
  };

  private handleSearch = (searchText: string) => {
    this.setState((prevState: any) => (
      { leagues: prevState.allLeagues.filter(league => league.name.toLowerCase().includes(searchText.toLowerCase())) }
    ))
  }
}

export default LeagueHomePage;
