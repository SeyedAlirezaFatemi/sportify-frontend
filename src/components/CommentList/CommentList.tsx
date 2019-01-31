import { Comment, List, Tooltip, } from 'antd';
import * as React from 'react';

class CommentList extends React.Component<any, any> {
  public render() {
    return (
      <List
        className="comment-list"
        header={<h2>Comments</h2>}
        itemLayout="horizontal"
        dataSource={this.props.comments}
        renderItem={comment => (
          <Comment
            author={comment.author.email}
            content={comment.text}
            datetime={
              <Tooltip title={comment.pub_date}>
                <span>{comment.pub_date}</span>
              </Tooltip>
            }
          />
        )}
      />
    );
  }
}

export default CommentList;
