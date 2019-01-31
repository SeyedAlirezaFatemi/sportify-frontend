import { Table } from 'antd';
import { AxiosResponse } from 'axios';
import * as React from 'react';
import { Component } from 'react';
import api from '../../../api';
import { Sports } from '../../../utils';
import './PlayerStatistics.css';

const soccerColumns = [{
  title: 'Start',
  dataIndex: 'beginning',
  // render: (text: string) => text.slice(0, 4),
}, {
  title: 'End',
  dataIndex: 'end',
}, {
  title: 'Goals',
  dataIndex: 'goals',
}, {
  title: 'Assists',
  dataIndex: 'assists',
}, {
  title: 'Reds',
  dataIndex: 'reds',
}, {
  title: 'Yellows',
  dataIndex: 'yellows',
},];

const basketballColumns = [{
  title: 'Start',
  dataIndex: 'beginning',
}, {
  title: 'End',
  dataIndex: 'end',
}, {
  title: 'Twos',
  dataIndex: 'twos',
}, {
  title: 'Threes',
  dataIndex: 'threes',
}, {
  title: 'Minutes Played',
  dataIndex: 'minutes_played',
}, {
  title: 'Rebounds',
  dataIndex: 'rebounds',
}, {
  title: 'Fouls',
  dataIndex: 'fouls',
},];


class PlayerStatistics extends Component<any, any> {
  public state = { data: [] };

  public componentDidMount(): void {
    const { url } = this.props;
    api.get(url).then((response: AxiosResponse) => {
      this.setState({ data: response.data.seasons })
    })
  }

  public render(): React.ReactNode {
    const { sport } = this.props;
    const { data } = this.state;
    return (
      <Table dataSource={data} columns={sport === Sports.SOCCER ? soccerColumns : basketballColumns}
             rowClassName={(record, index) => (index % 2 ? 'even' : 'odd')} />
    )
  }
}

export default PlayerStatistics;
