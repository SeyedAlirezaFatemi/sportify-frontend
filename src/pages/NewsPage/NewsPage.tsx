import * as React from 'react';
import { Component } from 'react';
import axios from '../../api';
import { CommentList, Headline, NewsContent, TagList } from '../../components';
import { API } from '../../utils';
import { Template } from '../index';

const sport = 'Basketball';
const picSource = 'https://s.yimg.com/ny/api/res/1.2/6lc5jurvOGmN2OdPYtQ8GA--~A/YXBwaWQ9aGlnaGxhbmRlcjtzbT0xO3c9ODAw/http://media.zenfs.com/en/homerun/feed_manager_auto_publish_494/f559367e7ef5bd7b1abd3b2e6ff0d161';

class NewsPage extends Component<any, any> {
  public state: any = { news: {} };

  public componentDidMount(): void {
    const { params } = this.props.match;
    const { id } = params;
    axios.get(`${API.NEWS_DETAILS}${id}/`).then(response => {
      this.setState({ news: response.data })
    })
  }

  public render(): React.ReactNode {
    const { news } = this.state;
    return (
      <Template>
        <Headline headlineText={news.title} source={'Sportify'} date={news.pub_date} />
        <NewsContent content={news.text} picSource={picSource} />
        <TagList tags={news.tags} sport={sport} />
        <CommentList comments={news.comments} />
      </Template>
    )
  }
}

export default NewsPage;
