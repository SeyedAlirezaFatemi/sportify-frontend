import { Divider } from 'antd';
import * as React from 'react';
import { Component } from 'react';
import './Headline.css';

class Headline extends Component<any, any> {
  public render(): React.ReactNode {
    const { headlineText, date } = this.props;
    return (
      <div>
        <h1 className="headline">{headlineText}</h1>
        <Divider className="divider" />
        <h3>{this.props.source}</h3>
        <h4 className="source">{date}</h4>
      </div>
    )
  }
}

export default Headline;
