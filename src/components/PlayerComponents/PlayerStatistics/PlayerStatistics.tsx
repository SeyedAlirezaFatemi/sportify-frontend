import * as React from "react";
import { Table } from 'antd';
import {Component} from "react";
import "./PlayerStatistics.css";


const title = 'Premier League';

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

function onChange(pagination, filters, sorter) {
  console.log('params', pagination, filters, sorter);
}


class PlayerStatistics extends Component {
  public render(): React.ReactNode {
    return (
      <Table dataSource={data} columns={columns} onChange={onChange} title={() => (<h1 className="foot-title">{title}</h1>)}
             rowClassName={(record, index) => (index % 2 ? 'even' : 'odd')}/>
    )
  }
}

export default PlayerStatistics;



