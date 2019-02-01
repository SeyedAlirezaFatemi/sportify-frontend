import * as React from 'react';
import YouTube from 'react-youtube';
import { VideoComponent } from '../../components';

class VideoList extends React.Component<any, any> {
  // videoId = 'Xbu65rbtNgU';
  public render(): React.ReactNode {
    const { videosId } = this.props;
    return (
      <div>
        {videosId.map((videoId: any) => (
          <VideoComponent videoId={videoId} alt="Image" />
        ))}
      </div>
    );
  }

}
export default VideoList;
