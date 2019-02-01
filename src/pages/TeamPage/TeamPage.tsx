import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import { Tabs } from 'antd';
import * as React from 'react';
import { Template } from '..';
import api from '../../api';
import { GameGrid, ImageGrid, NewsList, TeamHeader, TeamPlayersList, VideoList } from '../../components';
import { PlayerNewsAPI, TeamInfoAPI, TeamPhotosAPI, TeamPlayersAPI, TeamScheduleAPI, TeamVideos } from '../../utils';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
});

const TabPane = Tabs.TabPane;

class TeamPage extends React.Component<any, any> {
  public state: any = { players: [], info: { name: '', logo: { address: '' } }, images: [], games: [], videos: [] };

  public componentDidMount(): void {
    const { sport, match } = this.props;
    const { params } = match;
    const { id } = params;
    api.get(TeamPlayersAPI(sport, id)).then(response => {
      this.setState({ players: response.data })
    });
    api.get(TeamInfoAPI(sport, id)).then(response => {
      this.setState({ info: response.data })
    });
    api.get(TeamScheduleAPI(sport, id)).then(response => {
      this.setState({ games: response.data })
    });
    api.get(TeamVideos(id, sport)).then(response => {
      this.setState({ videos: response.data })
    });
  }

  public render(): React.ReactNode {
    const { sport, match } = this.props;
    const { params } = match;
    const { id } = params;
    const { info, players, games, videos } = this.state;
    const newsUrl = PlayerNewsAPI(id);
    const photosUrl = TeamPhotosAPI(sport, id);
    const subscribed = TeamScheduleAPI(id, sport);
    return (
      <Template>
        <TeamHeader info={info} subscribed={subscribed} />
        <Tabs defaultActiveKey="1">
          <TabPane tab="Team Game Schedule" key="1">
            <Grid container justify="center">
              <GameGrid games={games} />
            </Grid>
          </TabPane>
          <TabPane tab="Team Players" key="2">
            <TeamPlayersList players={players} />
          </TabPane>
          <TabPane tab="Team News" key="3">
            <NewsList url={newsUrl} />
          </TabPane>
          <TabPane tab="Team Photos" key="4">
            <ImageGrid url={photosUrl} />
          </TabPane>
          <TabPane tab="Team Videos" key="5">
            <VideoList videosId={videos} />
          </TabPane>
        </Tabs>
      </Template>
    )
  }
}

export default withStyles(styles)(TeamPage);
