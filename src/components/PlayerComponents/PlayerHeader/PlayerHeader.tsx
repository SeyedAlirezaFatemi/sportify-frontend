import {Avatar} from "antd";
import * as React from "react";
import PlayerInfo from "../PlayerInfo/PlayerInfo";
import './PlayerHeader.css'


const PlayerHeader: React.FunctionComponent = () => (
    <div id={"container-div"}>
        <div id={"avatar-info-div"}>
            <Avatar size={250} icon="user"/>
            <PlayerInfo/>
        </div>
    </div>
);

export default PlayerHeader;
