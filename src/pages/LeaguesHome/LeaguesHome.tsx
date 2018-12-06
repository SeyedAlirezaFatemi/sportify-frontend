import { Card, Input, Tabs } from 'antd';
import * as React from "react";
import { Component } from "react";
import { Template } from "../";
import './LeaugesHome.css';


const Search = Input.Search;
const TabPane = Tabs.TabPane;
const footballLeague = [
  'Premiere League',
  'Laliga League',
  'Serie A League',
];
const basketballLeague = [
  'NBA',
  'WNBA',
];


class LeaguesHome extends Component {
  public render(): React.ReactNode {
    function callback(key) {
      console.log(key);
    }

    return (
      <Template>
        <Search
          placeholder="search league"
          onSearch={value => console.log(value)}
          style={{ width: 200 }}
        />
        <Tabs defaultActiveKey="1" onChange={callback}>
          <TabPane tab="Current Leagues" key="1">
            <Card
              title="Football"
              style={{ width: 300 }}
            >
              <p>Premier League</p>
              <p>Laliga League</p>
            </Card>
            <Card
              title="Basketball"
              style={{ width: 300 }}
            >
              <p>NBA League</p>
              <p>WNBA League</p>
            </Card>
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
}

export default LeaguesHome;