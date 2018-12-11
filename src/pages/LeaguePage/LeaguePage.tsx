import * as React from 'react';
import { Component } from 'react';
import { GameSchedule, LeagueTableFootball } from '../../components';
import Template from '../Template/Template';


class LeaguePage extends Component {
  public render(): React.ReactNode {
    return (
      <Template>
        <LeagueTableFootball />
        <GameSchedule />
      </Template>
    )
  }
}

export default LeaguePage;
