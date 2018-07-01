import './style.css';
import React, { Component } from 'react';

//  animated bounceIn
class TopImgForMagic extends Component {
  render() {
    return (
      <div className="TopImgForMagic-img" style={{backgroundImage: `url(${this.props.topImg})`, backgroundSize: 'cover'}}>
        <div className="TopImgForMagic-img-title">
          <div>{this.props.title}</div>
          <div>{this.props.subTitle}</div>
        </div>
      </div>
    );
  }
}

export default TopImgForMagic;
