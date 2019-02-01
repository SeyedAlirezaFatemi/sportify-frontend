import { Avatar, Button, Comment, Form, Input, List, Tooltip, } from 'antd';
import * as moment from 'moment';
import * as React from 'react';
import { connect } from 'react-redux';
import api from '../../api';
import { API } from '../../utils';

const TextArea = Input.TextArea;

const CommentList = ({ comments }) => (
  <List
    dataSource={comments}
    header={<h2>{`${comments.length} ${comments.length > 1 ? 'replies' : 'reply'}`}</h2>}
    itemLayout="horizontal"
    renderItem={comment => (
      <Comment
        author={comment.author.email}
        content={comment.text}
        datetime={
          <Tooltip title={comment.pub_date}>
            <span>{comment.pub_date}</span>
          </Tooltip>
        }
      />)}
  />
);

const Editor = ({
                  onChange, onSubmit, submitting, value,
                }) => (
  <div>
    <Form.Item>
      <TextArea rows={4} onChange={onChange} value={value} />
    </Form.Item>
    <Form.Item>
      <Button
        htmlType="submit"
        loading={submitting}
        onClick={onSubmit}
        type="primary"
      >
        Add Comment
      </Button>
    </Form.Item>
  </div>
);

class Commenter extends React.Component<any, any> {
  public state = {
    comments: [],
    submitting: false,
    value: '',
  };

  public componentWillReceiveProps(nextProps, nextContext): void {
    this.setState({ comments: nextProps.comments })
  }

  public handleSubmit = () => {
    const { value } = this.state;
    const { newsId, token, email } = this.props;
    if (!value) {
      return;
    }

    this.setState({
      submitting: true,
    });

    api.post(API.COMMENT, {
      news_id: newsId,
      comment_text: value,
    }, { headers: { Authorization: `Token ${token}` } }).then(() => {
      setTimeout(() => {
        this.setState(prevSate => ({
          submitting: false,
          value: '',
          comments: [
            {
              author: { email },
              avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
              text: value,
              pub_date: moment().fromNow(),
            },
            ...prevSate.comments,
          ],
        }));
      }, 1000);
    })
  };

  public handleChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  };

  public render() {
    const { comments, submitting, value } = this.state;
    const { token, email } = this.props;

    return (
      <div>
        {comments.length > 0 && <CommentList comments={comments} />}
        {token ?
          <Comment
            avatar={(
              <Avatar
                src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                alt={email}
              />
            )}
            content={
              <Editor
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}
                submitting={submitting}
                value={value}
              />
            }
          /> : null}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    token: state.auth.token,
    email: state.auth.email,
  }
};

export default connect(mapStateToProps, null)(Commenter);
