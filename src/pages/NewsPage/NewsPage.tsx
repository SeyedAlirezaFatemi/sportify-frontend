import {Component} from "react";
import * as React from "react";
import './NewsPage.css';
import Headline from "../../components/Headline/Headline";
import NewsContent from "../../components/NewsContent/NewsContent";
import TagsList from "../../components/TagsList/TagsList";
import CommentList from "../../components/CommentList/CommentList";

const sport = 'Basketball';
const headlineText = 'We have news that alireza fatemi is a bitch!';
const source = 'Jendekhoone';
const date = 'December 4, 2018';
const picSource = 'https://s.yimg.com/ny/api/res/1.2/6lc5jurvOGmN2OdPYtQ8GA--~A/YXBwaWQ9aGlnaGxhbmRlcjtzbT0xO3c9ODAw/http://media.zenfs.com/en/homerun/feed_manager_auto_publish_494/f559367e7ef5bd7b1abd3b2e6ff0d161';
const content = "kos sher";
const tags = ['Basketball', 'Los Angeles Lakers', 'NBA'];
const comments = [
    {
        content: 'Lebron is awsome',
        like: 3,
        dislike: 0,
    }, {
        content: 'Lebron is great',
        like: 32,
        dislike: 3,
    }, {
        content: 'Lebron is the goat',
        like: 13,
        dislike: 1,
    }, {
        content: 'Lebron is a bitch',
        like: 3,
        dislike: 133,
    }
];

class NewsPage extends Component {
    public render(): React.ReactNode {
        return (
            <div className="box">
                <Headline headlineText={headlineText} source={source} date={date}/>
                <NewsContent content={content} picSource={picSource}/>
                <TagsList tags={tags} sport={sport}/>
                <CommentList/>
            </div>
        )
    }
}

export default NewsPage