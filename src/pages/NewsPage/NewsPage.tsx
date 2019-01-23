import * as React from 'react';
import { Component } from 'react';
import axios from '../../api';
import { CommentList, Headline, NewsContent, TagList } from '../../components';
import { API } from '../../utils';
import { Template } from '../index';

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
        <NewsContent content={news.text} picSource={news.image} />
        <TagList tags={news.tags} sport={news.sport} />
        <CommentList comments={news.comments} />
      </Template>
    )
  }
}

export default NewsPage;
