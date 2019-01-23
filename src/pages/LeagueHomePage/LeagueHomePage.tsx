import { Grid } from '@material-ui/core';
import { Input, Table, Tabs } from 'antd';
import * as React from 'react';
import { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import { Template } from '../';
import './LeaugeHomePage.css';
import axios from '../../api';
import {API} from "../../utils";


const Search = Input.Search;
const TabPane = Tabs.TabPane;


const columns = [{
  title: 'League',
  dataIndex: 'name',
  key: 'league',
  render: (text, id) => (<Link to={`league/${id}`}>{text}</Link>),
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
  public state: any = { leagues: [] };

  public componentDidMount(): void {
    axios.get(`${API.ALL_LEAGUES}`).then(response => {
      this.setState({ leagues: response.data });
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
                <Table columns={columns} dataSource={this.leagueFilter(true, 'Football')} pagination={false} />
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
                <Table columns={columns} dataSource={this.leagueFilter(false, 'Football')} pagination={false} />
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

  private leagueFilter = (status, sport) => {
    return this.state.leagues.filter((league) => {
      return league.sport === sport && league.status === status;
    });
  };

  private handleSearch = (searchText: string) => {
    return this.state.leagues.filter((league) => {
      return league.name.includes(searchText)
    });
  }
}

export default LeagueHomePage;
