import { Tabs } from 'antd';
import * as React from 'react';
import { Template } from '..';
import { NewsList, PlayerHeader, PlayerStatistics } from '../../components';
import ImageGrid from '../../components/ImageGrid/ImageGrid';


const TabPane = Tabs.TabPane;

const PlayerPage: React.FunctionComponent = () => (
  <Template>
    <PlayerHeader />
    <Tabs defaultActiveKey="1">
      <TabPane tab="Player Statistics" key="1">
        <PlayerStatistics />
      </TabPane>
      <TabPane tab="Player News" key="2">
        <NewsList />
      </TabPane>
      <TabPane tab="Player Photos" key="3">
        <ImageGrid />
      </TabPane>
      <TabPane tab="Player Videos" key="4">
        Content of Player Videos
      </TabPane>
    </Tabs>
  </Template>
);

export default PlayerPage;
