import './style.css';
import React, { Component } from 'react';


class Title extends Component {
  render() {
    return (
      <div className="Title">
        <a name={this.props.name} id={this.props.name}> </a>
        <span className="Title-text">
          {this.props.title}
        </span>
      </div>
    );
  }
}

export default Title;
