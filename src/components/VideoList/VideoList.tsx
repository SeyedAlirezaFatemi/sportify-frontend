import * as React from 'react';
import api from '../../api';
import { VideoComponent } from '../../components';

class VideoList extends React.Component<any, any> {
  public state = { videos: [] };

  public componentDidMount(): void {
    const { url } = this.props;
    api.get(url).then(response => {
      this.setState({ videos: response.data })
    });
  }

  public render(): React.ReactNode {
    const { videos } = this.state;
    return videos.map((videoId: any) => (
      <VideoComponent videoId={videoId} alt="Video" />
    ));
  }
}

export default VideoList;
