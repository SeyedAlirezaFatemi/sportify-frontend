import * as React from 'react';
import { Component } from 'react';
import { withRouter } from 'react-router-dom';
import api from '../../api';
import { LeagueTable } from '../../components';
import { API } from '../../utils';
import Template from '../Template/Template';


class LeaguePage extends Component<any, any> {
  public state: any = { data: [] };

  public componentDidMount(): void {
    const { match, sport } = this.props;
    const { params } = match;
    const { id } = params;
    api.get(`${API.LEAGUE_TABLE_INFO}${sport}/${id}`).then(response => {
      this.setState({ data: response.data })
    });
  }

  public render(): React.ReactNode {
    const { sport } = this.props;
    const { data } = this.state;
    return (
      <Template>
        <LeagueTable tableData={data} sport={sport} />
      </Template>
    )
  }
}

export default LeaguePage;
