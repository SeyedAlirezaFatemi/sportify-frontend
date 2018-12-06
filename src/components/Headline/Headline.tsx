import { Divider } from 'antd';
import * as React from "react";
import { Component } from "react";
import './Headline.css';

class Headline extends Component<any, any> {
  public render(): React.ReactNode {
    return (
      <div>
        <h1 className="headline">{this.props.headlineText}</h1>
        <Divider className="divider" />
        <h3>{this.props.source}</h3>
        <h4 className="source">{this.props.date}</h4>
      </div>
    )
  }
}

export default Headline;
