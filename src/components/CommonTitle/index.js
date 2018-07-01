import './style.css';
import React, { Component } from 'react';

class CommonTitle extends Component {
  render() {
    return (
      <div className="CommonTitle">
          <div className="CommonTitle-title" style={{ color: this.props.color }}>{this.props.title}</div>
          <div className="CommonTitle-border"/>
      </div>
    );
  }
}

export default CommonTitle;
