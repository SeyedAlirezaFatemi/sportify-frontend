import * as React from "react";
import { Table } from 'antd';
import {Component} from "react";
import "./PlayerStatistics.css";


// TODO using icon instead of string for player card

const columns = [{
  title: 'Year',
  dataIndex: 'year',
}, {
  title: 'Team',
  dataIndex: 'team',
}, {
  title: 'Goals',
  dataIndex: 'goals',
}, {
  title: 'Goal pass',
  dataIndex: 'goal_pass',
  render: text => <a href="javascript:;">{text}</a>,
}, {
  title: 'Cards',
  dataIndex: 'cards',
},
];

const data = [{
  key: '1',
  year: '2011',
  team: 'Arsenal',
  goals: 5,
  goal_pass: 3,
  cards: "red",
},{
  key: '1',
  year: '2011',
  team: 'Arsenal',
  goals: 5,
  goal_pass: 3,
  cards: "red",
},{
  key: '1',
  year: '2011',
  team: 'Arsenal',
  goals: 5,
  goal_pass: 3,
  cards: "red",
},{
  key: '1',
  year: '2011',
  team: 'Arsenal',
  goals: 5,
  goal_pass: 3,
  cards: "red",
},];

class PlayerStatistics extends Component {
  public render(): React.ReactNode {
    return (
      <Table dataSource={data} columns={columns}
             rowClassName={(record, index) => (index % 2 ? 'even' : 'odd')}/>
    )
  }
}

export default PlayerStatistics;



