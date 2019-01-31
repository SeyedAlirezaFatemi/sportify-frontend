import * as React from 'react';
import { Alert } from 'antd';
import { Template } from '..';
import {ConfirmedAccount, TeamInfoAPI, TeamPlayersAPI, TeamScheduleAPI} from '../../utils'
import api from "../../api";
import {AxiosResponse} from "axios";


class ConfirmAccount extends React.Component<any, any> {
  public state: any = { activate: false };

  public componentDidMount(): void {
    const { match } = this.props;
    const { params } = match;
    const { id, code } = params;
    const confirmed = ConfirmedAccount(id, code);
    api.get(confirmed).then(response => {
      console.log(response.data.activate);
      this.setState({ activate: response.data.activate })
    });
  }

  public render(): React.ReactNode {
    return this.state.activate ?
    (
      <Template>
        <Alert message="Success" description="Your account has been activated successfully!" type="success" showIcon/>
      </Template>
    ) : (
      <Template>
        <Alert message="Error" description="The link is either wrong or expired!" type="error" showIcon/>
      </Template>
      );

  }

}

export default ConfirmAccount;
