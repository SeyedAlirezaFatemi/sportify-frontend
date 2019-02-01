import * as React from 'react';
import YouTube from 'react-youtube';

class VideoComponent extends React.Component<any, any> {
  // videoId = 'Xbu65rbtNgU';
  public render() {
    const opts = {
      height: '390',
      width: '640',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 0,
      },
    };

    return (
      <YouTube
        videoId={this.props.videoId}
        opts={opts}
        onReady={this._onReady}
      />
    );
  }

  public _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
}
export default VideoComponent;
