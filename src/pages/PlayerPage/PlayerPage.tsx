import { Tabs } from 'antd';
import * as React from 'react';
import { Template } from '..';
import { ImageGrid, NewsList, PlayerHeader, PlayerStatistics, VideoList } from '../../components';
import { PlayerInfoAPI, PlayerPhotosAPI, PlayerRelatedNewsAPI, PlayerStatisticsAPI, PlayerVideosAPI } from '../../utils'

const TabPane = Tabs.TabPane;

class PlayerPage extends React.Component<any, any> {
  public state: any = { images: [] };

  public render(): React.ReactNode {
    const { match, sport } = this.props;
    const { params } = match;
    const { id } = params;
    const infoUrl = PlayerInfoAPI(sport, id);
    const newsUrl = PlayerRelatedNewsAPI(id);
    const photosUrl = PlayerPhotosAPI(sport, id);
    const statisticsUrl = PlayerStatisticsAPI(sport, id);
    const videosUrl = PlayerVideosAPI(id);
    return (
      <Template>
        <PlayerHeader url={infoUrl} />
        <Tabs defaultActiveKey="1">
          <TabPane tab="Player Statistics" key="1">
            <PlayerStatistics url={statisticsUrl} sport={sport} />
          </TabPane>
          <TabPane tab="Player News" key="2">
            <NewsList url={newsUrl} />
          </TabPane>
          <TabPane tab="Player Photos" key="3">
            <ImageGrid url={photosUrl} />
          </TabPane>
          <TabPane tab="Player Videos" key="4">
            <VideoList url={videosUrl} />
          </TabPane>
        </Tabs>
      </Template>
    );
  }

}

export default PlayerPage;
