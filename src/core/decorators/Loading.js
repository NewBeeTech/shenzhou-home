import React from 'react';
import { Spin } from 'antd';
const Loading = (isLoading) => (Target) => {
  return class Loading extends React.PureComponent {
    render() {
      return (
        <Spin spinning={isLoading(this.props)} size="large">
          <Target { ...this.props } />
        </Spin>
      )
    }
  }
};
export default Loading;
