import { Button, Form, Icon, Input, Modal } from 'antd';
import { AxiosResponse } from 'axios';
import * as React from 'react';
import axios from '../../api';
import { API } from '../../utils';


function error() {
  Modal.error({
    title: 'Wrong credentials',
    content: "The email and password don't match.",
  });
}

function success() {
  Modal.success({
    title: 'Success',
    content: 'You are now logged in.',
  });
}

function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}

class HorizontalLoginForm extends React.Component<any, any> {
  public componentDidMount() {
    // To disabled submit button at the beginning.
    this.props.form.validateFields();
  }

  public handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        axios.post(API.AUTHENTICATION, {
          username: values.userName,
          password: values.password,
        }).then((response: AxiosResponse) => {
          const { token, email, userId } = response.data;
          success();
        }).catch(error)
      }
    });
  };

  public render() {
    const {
      getFieldDecorator, getFieldsError, getFieldError, isFieldTouched,
    } = this.props.form;

    // Only show error after a field is touched.
    const userNameError = isFieldTouched('userName') && getFieldError('userName');
    const passwordError = isFieldTouched('password') && getFieldError('password');
    return (
      <Form layout="inline" onSubmit={this.handleSubmit}>
        <Form.Item
          validateStatus={userNameError ? 'error' : ''}
          help={userNameError || ''}
        >
          {getFieldDecorator('userName', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
          )}
        </Form.Item>
        <Form.Item
          validateStatus={passwordError ? 'error' : ''}
          help={passwordError || ''}
        >
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password"
                   placeholder="Password" />
          )}
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            disabled={hasErrors(getFieldsError())}
          >
            Log in
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

// @ts-ignore
const LoginForm = Form.create({ name: 'horizontal_login' })(HorizontalLoginForm);

export default LoginForm;
