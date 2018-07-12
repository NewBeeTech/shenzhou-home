import React, { Component, PropTypes } from 'react';
import './PageConent.css';
import { Pagination } from 'antd';


class PageConent extends Component  {
  render() {
    return (
      <div className="PageConent">
        <Pagination
          // itemRender={itemRender}
          onChange={(pageNum) => {
            console.log('pageNum', pageNum)
            console.log('pageNum', pageNum+1)
            this.props.searchAction({}, pageNum+1)
          }}
          total={this.props.total}
          pageSize={this.props.pageSize}
          defaultCurrent={1}
          // showQuickJumper
          current={this.props.current}
        />
      </div>
    );
  }
};

export default PageConent;
