import './style.css';
import React, { Component } from 'react';

class TopImg extends Component {
  render() {
    return (
      <div className="TopImg-img" style={{backgroundImage: `url(${this.props.topImg})`, backgroundSize: 'cover'}}>
        <div className="TopImg-img-title animated bounceIn">
          <div>{this.props.subTitle}</div>
          <div>{this.props.title}</div>
        </div>
      </div>
    );
  }
}

export default TopImg;
