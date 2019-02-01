import * as React from 'react';
import YouTube from 'react-youtube';

class VideoComponent extends React.Component<any, any> {
  videoIdTest = 'Xbu65rbtNgU';
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
        videoId={this.videoIdTest}
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
