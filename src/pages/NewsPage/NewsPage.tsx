import * as React from 'react';
import { Component } from 'react';
import { CommentList, Headline, NewsContent, TagList } from '../../components';
import { Template } from '../index';

const sport = 'Basketball';
const headlineText = 'Lebron is happy in LA!';
const source = 'ESPN';
const date = 'December 4, 2018';
const picSource = 'https://s.yimg.com/ny/api/res/1.2/6lc5jurvOGmN2OdPYtQ8GA--~A/YXBwaWQ9aGlnaGxhbmRlcjtzbT0xO3c9ODAw/http://media.zenfs.com/en/homerun/feed_manager_auto_publish_494/f559367e7ef5bd7b1abd3b2e6ff0d161';
const content = 'Lebron James is happy with his current situation!';
const tags = ['LeBron', 'LBJ', 'Los Angeles Lakers', 'NBA'];
const comments = [
  {
    key: 1,
    author: 'Alireza Fatemi',
    content: 'Lebron is awsome',
    avatarSource: 'data:image/png;base64,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',
  }, {
    key: 2,
    author: 'Mario Hernandez',
    content: 'Lebron is the goat',
    avatarSource: 'data:image/png;base64,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',
  }, {
    key: 3,
    author: 'Kevin Durant',
    content: 'Lebron is bad',
    avatarSource: 'data:image/png;base64,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',
  }, {
    key: 4,
    author: 'Spida',
    content: 'Lebron is great',
    avatarSource: 'data:image/png;base64,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',
  },
];

class NewsPage extends Component {
  public render(): React.ReactNode {
    return (
      <Template>
        <Headline headlineText={headlineText} source={source} date={date} />
        <NewsContent content={content} picSource={picSource} />
        <TagList tags={tags} sport={sport} />
        <CommentList comments={comments} />
      </Template>
    )
  }
}

export default NewsPage;
