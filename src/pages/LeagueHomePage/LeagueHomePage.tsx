import { Grid } from '@material-ui/core';
import { Table, Divider, Input, Tabs } from 'antd';
import * as React from 'react';
import { Component } from 'react';
import { Template } from '../';
import './LeaugeHomePage.css';


const Search = Input.Search;
const TabPane = Tabs.TabPane;

const leagues = [
  {
    key:1,
    sport: 'Basketball',
    league: 'NBA',
    year: 2018,
    status: 'new',
    country: 'USA',
  }, {
    key:2,
    sport: 'Basketball',
    league: 'WNBA',
    year: 2018,
    status: 'new',
    country: 'USA',
  }, {
    key:3,
    sport: 'Football',
    league: 'Premiere League',
    year: 2018,
    status: 'new',
    country: 'England',
  }, {
    key:4,
    sport: 'Football',
    league: 'LaLiga',
    year: 2018,
    status: 'new',
    country: 'Spain',
  }, {
    key:5,
    sport: 'Football',
    league: 'Serie A League',
    year: 2018,
    status: 'new',
    country: 'Italy',
  }, {
    key:6,
    sport: 'Basketball',
    league: 'NBA',
    year: 2017,
    status: 'old',
    country: 'USA',
  }, {
    key:7,
    sport: 'Basketball',
    league: 'WNBA',
    year: 2017,
    status: 'old',
    country: 'USA',
  }, {
    key:8,
    sport: 'Football',
    league: 'Premiere League',
    year: 2017,
    status: 'old',
    country: 'England',
  }, {
    key:9,
    sport: 'Football',
    league: 'LaLiga',
    year: 2017,
    status: 'old',
    country: 'Spain',
  }, {
    key:10,
    sport: 'Football',
    league: 'Serie A League',
    year: 2017,
    status: 'old',
    country: 'Italy',
  },
];

const columns = [{
  title: 'League',
  dataIndex: 'league',
  key: 'league',
  render: (text, id) => <a href="/team/1">{text}</a>,
}, {
  title: 'Year',
  dataIndex: 'year',
  key: 'year',
}, {
  title: 'Country',
  dataIndex: 'country',
  key: 'country',
}
];
class LeagueHomePage extends Component {

  private leagueFilter = (status, sport) => {
    return leagues.filter((league) => {
      return league.sport === sport && league.status === status;
    });
  };

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
        <Tabs defaultActiveKey="1">
          <TabPane tab="Current Leagues" key="1">
            <Tabs
              tabPosition="left"
              defaultActiveKey="1"
            >
              <TabPane tab="Football" key="1">
                <Table columns={columns} dataSource={this.leagueFilter('new', 'Football')} pagination={false} />
              </TabPane>
              <TabPane tab="Basketball" key="2">
                <Table columns={columns} dataSource={this.leagueFilter('new', 'Basketball')} pagination={false} />
              </TabPane>
            </Tabs>
          </TabPane>
          <TabPane tab="Old Leagues" key="2">
            <Tabs
              tabPosition="left"
              defaultActiveKey="1"
            >
              <TabPane tab="Football" key="1">
                <Table columns={columns} dataSource={this.leagueFilter('old', 'Football')} pagination={false} />
              </TabPane>
              <TabPane tab="Basketball" key="2">
                <Table columns={columns} dataSource={this.leagueFilter('old', 'Basketball')} pagination={false} />
              </TabPane>
            </Tabs>
          </TabPane>
        </Tabs>
      </Template>
    )
  }

  private handleSearch = (searchText: string) => {

  }
}

export default LeagueHomePage;
