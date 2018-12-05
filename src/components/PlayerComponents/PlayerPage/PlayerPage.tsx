import Typography from "@material-ui/core/Typography/Typography";
import { Tabs} from 'antd';
import * as React from "react";
import PlayerHeader from "../PlayerHeader/PlayerHeader";
import PlayerStatistics from "../PlayerStatistics/PlayerStatistics";


const TabPane = Tabs.TabPane;

const PlayerPage: React.FunctionComponent = () => (
    <div>
        <PlayerHeader/>
        <Tabs defaultActiveKey="1">
        <TabPane tab="Player Statistics" key="1">
          <PlayerStatistics/>
        </TabPane>
        <TabPane tab="Player Photos" key="2">
          Content of Player Photos
        </TabPane>
        <TabPane tab="Player Videos" key="3">
          Content of Player Videos
        </TabPane>
    </Tabs>,
    </div>
);

export default PlayerPage;
