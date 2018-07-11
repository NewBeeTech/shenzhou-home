import React, { Component } from 'react';
import Nav from '../../components/Nav';
import TopImg from '../../components/TopImg';
import Footer from '../../components/Footer';
import DynamicContent from './DynamicContent';


import topImg from '../../assets/images/dynamic-bg.png';

class Dynamic extends Component {
  
  render() {
    return (
      <div className="JoinUs">
        <div className="JoinUs-header animated bounceInDown">
          <Nav selected="" />
        </div>
        <div className="JoinUs-body">
          <TopImg topImg={topImg} title="公司动态" subTitle="Company News" />
          <div className="JoinUs-content">
            <DynamicContent dynamicList={this.props.dynamicList}/>
          </div>
          <Footer name="contact" />
        </div>
      </div>
    );
  }
}

export default Dynamic;
