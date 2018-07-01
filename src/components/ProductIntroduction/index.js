import './style.css';
import React, { Component } from 'react';
import CommonTitle from '../../components/CommonTitle';


class ProductIntroduction extends Component {
  showContent(data) {
    const views = [];
    if(data) {
        data.map((item, key) => {
            views.push(<div className="ProductIntroduction-item" key={key}>{item}</div>);
        })
    }
    return views;
  }
  render() {
    return (
      <div className="ProductIntroduction">
          <CommonTitle title={this.props.title} />
          <div className="ProductIntroduction-content">{this.showContent(this.props.content)}</div>
      </div>
    );
  }
}

export default ProductIntroduction;
