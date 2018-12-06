import {Component} from "react";
import * as React from "react";
import LeagueTableFootball from "../../components/LeagueTable/LeagueTableFootball";
import Template from "../Template/Template";
import GameSchedule from "../../components/GameSchedule/GameSchedule";


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