import React, { Component } from 'react';
import Nav from '../../components/Nav';
import TopImg from '../../components/TopImg';
import Footer from '../../components/Footer';

import leftImg from '../../assets/images/corporate-culture-left-icon.png';

class CorporateCultureTitle extends Component {
  render() {
    return (
      <div className="corporate-culture-title">
          <div className="corporate-culture-title-first">
            <img src={leftImg} alt="" />
            <div>{this.props.title}</div>
          </div>
          <div>{this.props.EnglishTitle}</div>
      </div>

    );
  }
}

export default CorporateCultureTitle;
