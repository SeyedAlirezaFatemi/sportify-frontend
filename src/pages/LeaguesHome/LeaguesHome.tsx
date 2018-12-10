import {Card, Input, Tabs} from 'antd';
import * as React from "react";
import {Component} from "react";
import {Template} from "../";
import './LeaugesHome.css';
import Row from "antd/es/grid/row";
import Col from "antd/es/grid/col";
import GamesList from "../../components/GameComponents/GamesList/GamesList";


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

const footballLeagueArchives = [{
  title: 'Premier League Archive',
  years: ['2017', '2016', '2015'],
}, {
  title: 'Laliga League Archive',
  years: ['2017', '2016', '2015'],
}, {
  title: 'Serie A Archive',
  years: ['2017', '2016', '2015'],
}
];

const basketballLeagueArchives = [{
  title: 'NBA',
  years: ['2017', '2016', '2015'],
}, {
  title: 'WNBA',
  years: ['2017', '2016', '2015'],
},
];


class LeaguesHome extends Component {
  public render(): React.ReactNode {
    function callback(key) {
      console.log(key);
    }

    return (
      <Template>
        <GamesList/>
      {/*<Search*/}
        {/*placeholder="search league"*/}
        {/*onSearch={value => console.log(value)}*/}
        {/*className="search-box"*/}
      {/*/>*/}
      {/*<Tabs defaultActiveKey="1" onChange={callback}>*/}
        {/*<TabPane tab="Current Leagues" key="1">*/}
              {/*<Card*/}
                {/*title="Football"*/}
                {/*className="league-table"*/}
              {/*>*/}
                {/*{footballLeague.map((league) => <div><a>{league}</a> <br/></div>)}*/}
              {/*</Card>*/}
              {/*<Card*/}
                {/*title="Basketball"*/}
                {/*className="league-table"*/}
              {/*>*/}
                {/*{basketballLeague.map((league) => <div><a>{league}</a> <br/></div>)}*/}
              {/*</Card>*/}
        {/*</TabPane>*/}

        {/*<TabPane tab="Old Leagues" key="2">*/}
          {/*{footballLeagueArchives.map((league) => <Card className="league-table" title={league.title}>*/}
            {/*{league.years.map((years) => <div><a>{years}</a> <br/></div>)}*/}
          {/*</Card>)}*/}
          {/*{basketballLeagueArchives.map((league) => <Card className="league-table" title={league.title}>*/}
            {/*{league.years.map((years) => <div><a>{years}</a> <br/></div>)}*/}
          {/*</Card>)}*/}
        {/*</TabPane>*/}

      {/*</Tabs>*/}
    </Template>
    )
  }
}

export default LeaguesHome;