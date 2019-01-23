import * as React from 'react';
import { Component } from 'react';
import { LeagueTable } from '../../components';
import Template from '../Template/Template';
import axios from "../../api";
import {API} from "../../utils";
import {withRouter} from 'react-router-dom';


class LeaguePage extends Component<any, any> {
  public state: any = { data: [] };

  public componentDidMount() :void {
    const { params } = this.props.match;
    const { id } = params;
    axios.get(`${API.LEAGUE_TABLE_INFO}${this.props.sport}/${id}`).then(response => {
      this.setState({ data: response.data })
    });
  }

  public render(): React.ReactNode {

    return (
      <Template>
        <LeagueTable tableData ={this.state.data} sport={this.props.sport} />
      </Template>
    )
  }
}

export default LeaguePage;
