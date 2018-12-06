import * as React from "react";
import { Component } from "react";
import './NewsContent.css';

class NewsContent extends Component<any, any> {
  public render(): React.ReactNode {
    return (
      <div>
        <img src={this.props.picSource} className="pic" />
        <p>{this.props.content}</p>
      </div>
    )
  }
}

export default NewsContent;
