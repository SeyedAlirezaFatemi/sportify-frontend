import {Component} from "react";
import * as React from "react";
import {Bracket} from 'react-tournament-bracket';
import LeagueTableFootball from "../../components/LeagueTable/LeagueTableFootball";
import Template from "../Template/Template";


class LeaguePage extends Component {
    public render(): React.ReactNode {
        return (
            <Template>
                <LeagueTableFootball/>
                <GameSchedule/>
            </Template>
        )
    }
}

export default LeaguePage;