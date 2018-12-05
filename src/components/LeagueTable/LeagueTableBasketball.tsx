import * as React from "react";
import { Component } from "react";
import './LeagueTable.css';


import { Table } from 'antd';

const title = 'Western Conference NBA';

const columns = [{
    title: 'Rank',
    dataIndex: 'rank',
},{
    title: 'Team',
    dataIndex: 'team',
    render: text => <a href="javascript:;">{text}</a>,
}, {
    title: 'Games',
    dataIndex: 'games',
}, {
    title: 'Win',
    dataIndex: 'win',
}, {
    title: 'Percentage',
    dataIndex: 'percentage',
}];
const data = [{
    key: '1',
    rank: '1',
    team: 'Los Angeles Lakers',
    games: 52,
    win: 32,
    percentage:0.8,
}, {
    key: '2',
    rank: '2',
    team: 'Toronto Raptors',
    games: 52,
    win: 32,
    percentage:0.8,
}, {
    key: '3',
    rank: '3',
    team: 'Milwaukee Bucks',
    games: 52,
    win: 32,
    percentage:0.8,
}, {
    key: '4',
    rank: '4',
    team: 'Phoenix Suns',
    games: 52,
    win: 32,
    percentage:0.8,
}];

class LeagueTableBasketball extends Component {
    public render(): React.ReactNode {
        return (
            <Table dataSource={data} columns={columns} title={ () => (<h1 className="basket-title">{title}</h1>)}
                   rowClassName={(record, index) => (index%2 ? 'even': 'odd')}/>
        )
    }
}

export default LeagueTableBasketball



