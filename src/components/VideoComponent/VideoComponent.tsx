import * as React from 'react';
import YouTube from 'react-youtube';

class VideoComponent extends React.Component<any, any> {
  public render() {
    const { videoId } = this.props;
    const opts = {
      height: '390',
      width: '640',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 0,
      },
    };
    return (
      <YouTube
        videoId={videoId}
        opts={opts}
        onReady={this.onReady}
      />
    );
  }

  private onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
}

export default VideoComponent;
