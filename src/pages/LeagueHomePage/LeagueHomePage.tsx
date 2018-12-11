import { Grid } from '@material-ui/core';
import { Card, Input, Tabs } from 'antd';
import * as React from 'react';
import { Component } from 'react';
import { Template } from '../';
import './LeaugeHomePage.css';


const Search = Input.Search;
const TabPane = Tabs.TabPane;

class LeagueHomePage extends Component {
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
            <Grid container direction="row" justify="space-evenly">
              <Grid item>
                <Card
                  title="Football"
                  style={{ width: 300 }}
                >
                  <p>Premier League</p>
                  <p>Laliga League</p>
                </Card>
              </Grid>
              <Grid item>
                <Card
                  title="Basketball"
                  style={{ width: 300 }}
                >
                  <p>NBA League</p>
                  <p>WNBA League</p>
                </Card>
              </Grid>
            </Grid>
          </TabPane>
          <TabPane tab="Old Leagues" key="2">
            <Card
              title="Premier League Archive"
              style={{ width: 300 }}
            >
              <p></p>
            </Card>
          </TabPane>
        </Tabs>
      </Template>
    )
  }

  private handleSearch = (searchText: string) => {

  }
}

export default LeagueHomePage;
