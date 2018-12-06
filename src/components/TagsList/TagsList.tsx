import {Component} from "react";
import * as React from "react";
import {Tag} from "antd";


class TagsList extends Component<any, any> {
    public render(): React.ReactNode {
        console.log(this.props.tags);
        var color = "green";
        if (this.props.sport == ("Basketball" || "basketball"))
            color = "orange";
        else if (this.props.sport == ("Football" || "football"))
            color = "blue";
        return (
            this.props.tags.map((tag) => <Tag key={tag} color={color}>{tag}</Tag>)
        )
    }
}

export default TagsList