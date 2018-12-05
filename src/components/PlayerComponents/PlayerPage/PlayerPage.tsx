import Typography from "@material-ui/core/Typography/Typography";
import { Tabs} from 'antd';
import * as React from "react";
import PlayerHeader from "../PlayerHeader/PlayerHeader";


const TabPane = Tabs.TabPane;

const PlayerPage: React.FunctionComponent = () => (
    <div>
        <PlayerHeader/>
        <Tabs defaultActiveKey="1">
        <TabPane tab="Tab 1" key="1">

        </TabPane>
        <TabPane tab="Tab 2" key="2">Content of Tab Pane 2</TabPane>
        <TabPane tab="Tab 3" key="3">Content of Tab Pane 3</TabPane>
    </Tabs>,
    </div>
);

export default PlayerPage;
