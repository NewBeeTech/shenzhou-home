import './style.css';
import React, { Component } from 'react';

class Characteristics extends Component {
  render() {
    return (
      <div className="Characteristics">
          <div className="characteristics-no">{this.props.num}</div>
          {this.props.subTitle ? 
          <div className="characteristics-subTitle">{this.props.subTitle}</div> : 
          <div /> }
          <div className="characteristics-content">{this.props.content}</div>
      </div>
    );
  }
}

export default Characteristics;
