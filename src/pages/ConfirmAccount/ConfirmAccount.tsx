import { Alert } from 'antd';
import { AxiosResponse } from 'axios';
import * as React from 'react';
import { Template } from '..';
import api from '../../api';
import { ConfirmAccountAPI } from '../../utils'


class ConfirmAccount extends React.Component<any, any> {
  public state: any = { activate: false };

  public componentDidMount(): void {
    const { match } = this.props;
    const { params } = match;
    const { id, code } = params;
    const confirmed = ConfirmAccountAPI(id, code);
    api.get(confirmed).then((response: AxiosResponse) => {
      this.setState({ activate: response.data.activate })
    });
  }

  public render(): React.ReactNode {
    return this.state.activate ?
      (
        <Template>
          <Alert message="Success" description="Your account has been activated successfully!" type="success"
                 showIcon />
        </Template>
      ) : (
        <Template>
          <Alert message="Error" description="The link is either wrong or expired!" type="error" showIcon />
        </Template>
      );
  }
}

export default ConfirmAccount;
