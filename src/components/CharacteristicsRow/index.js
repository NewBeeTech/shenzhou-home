import './style.css';
import React, { Component } from 'react';

class CharacteristicsRow extends Component {
  render() {
    return (
      <div className="Characteristics-row">
          <div className="characteristics-row-no">{this.props.num}</div>
          <div className="characteristics-row-content">{this.props.content}</div>
      </div>
    );
  }
}

export default CharacteristicsRow;
