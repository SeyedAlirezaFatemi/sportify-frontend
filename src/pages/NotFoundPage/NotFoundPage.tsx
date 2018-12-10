import { Alert } from 'antd';
import * as React from 'react';
import { Template } from "..";

const NotFoundPage = () => (
  <Template>
    <Alert
      message="Error"
      description="Page not found."
      type="error"
      showIcon
    />
  </Template>
);

export default NotFoundPage;
