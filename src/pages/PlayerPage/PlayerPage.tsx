import { Tabs } from 'antd';
import * as React from 'react';
import { Template } from '..';
import { ImageGrid, NewsList, PlayerHeader, PlayerStatistics } from '../../components';
import { PlayerInfoAPI } from '../../utils'

const TabPane = Tabs.TabPane;

class PlayerPage extends React.Component<any, any> {
  public render(): React.ReactNode {
    const { match, sport } = this.props;
    const { params } = match;
    const { id } = params;
    const url = PlayerInfoAPI(sport, id)
    return (
      <Template>
        <PlayerHeader url={url} />
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
  }

}

export default PlayerPage;
