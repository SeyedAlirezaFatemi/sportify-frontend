import * as React from 'react';
import { Component } from 'react';
import { LeagueTable } from '../../components';
import Template from '../Template/Template';


class LeaguePage extends Component {
  public render(): React.ReactNode {
    return (
      <Template>
        <LeagueTable />
      </Template>
    )
  }
}

export default LeaguePage;
