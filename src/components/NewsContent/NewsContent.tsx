import * as React from 'react';
import { Component } from 'react';
import './NewsContent.css';

class NewsContent extends Component<any, any> {
  public render(): React.ReactNode {
    const { picSource, content } = this.props;
    return (
      <div>
        <img src={picSource} className="pic" />
        <p>{content}</p>
      </div>
    )
  }
}

export default NewsContent;
