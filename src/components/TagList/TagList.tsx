import { Tag } from 'antd';
import * as React from 'react';
import { Component } from 'react';


class TagList extends Component<any, any> {
  public render(): React.ReactNode {
    const { tags } = this.props;
    let color = 'green';
    if (this.props.sport === ('Basketball' || 'basketball')) {
      color = 'orange';
    } else if (this.props.sport === ('Soccer' || 'soccer')) {
      color = 'blue';
    }
    return (
      tags ? tags.map((tag) => <Tag key={tag.id} color={color}>{tag.title}</Tag>) : null
    )
  }
}

export default TagList;
