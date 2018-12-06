import { Tag } from "antd";
import * as React from "react";
import { Component } from "react";


class TagList extends Component<any, any> {
  public render(): React.ReactNode {
    console.log(this.props.tags);
    let color = "green";
    if (this.props.sport === ("Basketball" || "basketball")) {
      color = "orange";
    } else if (this.props.sport === ("Football" || "football")) {
      color = "blue";
    }
    return (
      this.props.tags.map((tag) => <Tag key={tag} color={color}>{tag}</Tag>)
    )
  }
}

export default TagList;
