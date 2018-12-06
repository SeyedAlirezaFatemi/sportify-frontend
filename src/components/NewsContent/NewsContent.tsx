import {Component} from "react";
import * as React from "react";
import './NewsContent.css';
import TagsList from "../TagsList/TagsList";

class NewsContent extends Component<any, any> {
    public render(): React.ReactNode {
        return (
            <div>
                <img src={this.props.picSource} className="pic"/>
                <p>{this.props.content}</p>
            </div>
        )
    }
}

export default NewsContent