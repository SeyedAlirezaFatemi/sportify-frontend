import { Carousel } from 'antd';
import * as React from "react";
import { PlayerInfo } from "../index";

const PlayerStatistics: React.FunctionComponent = () => (
  <Carousel autoplay dots>
    <div>
      <PlayerInfo />
    </div>
    <div>
      <PlayerInfo />
    </div>
    <div>
      <PlayerInfo />
    </div>
    <div>
      <PlayerInfo />
    </div>
  </Carousel>
);

export default PlayerStatistics;