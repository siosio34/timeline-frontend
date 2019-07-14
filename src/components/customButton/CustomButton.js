import React from 'react';
import { Button } from 'antd';

const CustomButton = ({ ...props }) => (
  <Button {...props} type="primary">
    예시
  </Button>
);
export default CustomButton;
