import {Component} from "react";
import * as React from "react";
import './Headline.css';
import {Divider} from 'antd';

class Headline extends Component<any,any> {
    public render(): React.ReactNode {
        return (
            <div>
                <h1 className="headline">{this.props.headlineText}</h1>
                <Divider className="divider"/>
                <h3>{this.props.source}</h3>
                <h4 className="source">{this.props.date}</h4>
            </div>
        )
    }
}

export default Headline