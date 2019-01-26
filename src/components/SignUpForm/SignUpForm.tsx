import { Button, Form, Icon, Input, Modal, } from 'antd';
import { AxiosResponse } from 'axios';
import * as React from 'react';
import { connect } from 'react-redux';
import { setUserInfo } from '../../actions';
import api from '../../api';
import { API } from '../../utils';


function error() {
  Modal.error({
    title: 'Wrong Information',
    content: 'Something is wrong with the info you entered.',
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


class VerticalSignUpForm extends React.Component<any, any> {
  public componentDidMount() {
    // To disabled submit button at the beginning.
    this.props.form.validateFields();
  }

  public handleSubmit = (e) => {
    e.preventDefault();
    const { form, onLoginSuccess } = this.props;
    form.validateFields((err, values) => {
      if (!err) {
        api.post(API.SIGN_UP, {
          email: values.email,
          password: values.password,
        }).then((response: AxiosResponse) => {
          success();
          api.post(API.SIGN_IN, {
            username: values.email,
            password: values.password,
          }).then((response: AxiosResponse) => {
            const { token, email, userId } = response.data;
            onLoginSuccess(token, email, userId);
          }).catch(error)
        }).catch(error)
      }
    });
  };

  public render() {
    const {
      getFieldDecorator, getFieldsError, getFieldError, isFieldTouched,
    } = this.props.form;

    // Only show error after a field is touched.
    const emailError = isFieldTouched('email') && getFieldError('email');
    const passwordError = isFieldTouched('password') && getFieldError('password');
    return (
      <Form layout="vertical" onSubmit={this.handleSubmit}>
        <Form.Item
          validateStatus={emailError ? 'error' : ''}
          help={emailError || ''}
        >
          {getFieldDecorator('email', {
            rules: [{ required: true, message: 'Please input your email!' }],
          })(
            <Input prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Email" />
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
            Sign Up
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

// @ts-ignore
const SignUpForm = Form.create({ name: 'sign_up' })(VerticalSignUpForm);


const mapDispatchToProps = dispatch => {
  return {
    onLoginSuccess: (token, email, userId) => {
      dispatch(setUserInfo(token, email, userId))
    },
  }
};

export default connect(null, mapDispatchToProps)(SignUpForm);
