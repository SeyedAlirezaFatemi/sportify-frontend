import { Tabs } from 'antd';
import * as React from 'react';
import { Template } from '..';
import axios from '../../api';
import { ImageGrid, NewsList, PlayerHeader, PlayerStatistics } from '../../components';
import { PlayerInfoAPI, PlayerNewsAPI, PlayerPhotosAPI } from '../../utils'

const TabPane = Tabs.TabPane;

class PlayerPage extends React.Component<any, any> {
  public state: any = { images: [] };

  public componentDidMount(): void {
    const { sport, match } = this.props;
    const { params } = match;
    const { id } = params;
    axios.get(PlayerPhotosAPI(sport, id)).then(response => {
      this.setState({ images: response.data })
    });
  }

  public render(): React.ReactNode {
    const { match, sport } = this.props;
    const { params } = match;
    const { id } = params;
    const { images } = this.state;
    const infoUrl = PlayerInfoAPI(sport, id);
    const newsUrl = PlayerNewsAPI(id);
    return (
      <Template>
        <PlayerHeader url={infoUrl} />
        <Tabs defaultActiveKey="1">
          <TabPane tab="Player Statistics" key="1">
            <PlayerStatistics />
          </TabPane>
          <TabPane tab="Player News" key="2">
            <NewsList url={newsUrl} />
          </TabPane>
          <TabPane tab="Player Photos" key="3">
            <ImageGrid images={images} />
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
