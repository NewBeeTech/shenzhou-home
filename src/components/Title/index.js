import './style.css';
import React, { Component } from 'react';


class Title extends Component {
  render() {
    return (
      <div>
        <a name={this.props.name} id={this.props.name} className="title-target"> 
           <span className="title-placeholder"></span>
        </a>
        <div className="Title">
          <span className="Title-text">
            {this.props.title}
          </span>
        </div>
      </div>
    );
  }
}

export default Title;
