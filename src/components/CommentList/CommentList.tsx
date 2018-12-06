import { Comment, List, Tooltip, } from 'antd';
import * as moment from 'moment';
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
            // actions={item.actions}
            author={comment.author}
            avatar={comment.avatarSource}
            content={comment.content}
            datetime={
              <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
                <span>{moment().fromNow()}</span>
              </Tooltip>
            }
          />
        )}
      />
    );
  }
}

export default CommentList;
