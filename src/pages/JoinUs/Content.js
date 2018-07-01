import React, { Component } from 'react';
import Nav from '../../components/Nav';
import TopImg from '../../components/TopImg';
import Footer from '../../components/Footer';

import topImg from '../../assets/images/join_us_bg.png';

class Content extends Component {
  render() {
    return (
      <div className="Home">
        <div className="Home-header animated bounceInDown">
          <Nav selected="home" />
        </div>
        <div className="Home-body">
          <TopImg topImg={topImg} title="加入我们" subTitle="JOIN US" />

          <Footer name="contact" />
        </div>
      </div>
    );
  }
}

export default Content;
