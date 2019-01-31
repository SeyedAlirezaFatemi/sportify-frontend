import * as React from 'react';
import { Template } from '..';
import { ConfirmedAccount } from '../../utils'


class ConfirmAccount extends React.Component<any, any> {
  public state: any = { images: [] };

  public render(): React.ReactNode {
    const { match } = this.props;
    const { params } = match;
    const { id, code } = params;
    const confirmed = ConfirmedAccount(id, code);
    return (
      <Template>
      </Template>
    );
  }

}

export default ConfirmAccount;
