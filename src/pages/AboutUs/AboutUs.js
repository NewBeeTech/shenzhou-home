import React, { Component } from 'react';
import Nav from '../../components/Nav';
import TopImg from '../../components/TopImg';
import Footer from '../../components/Footer';
import { data } from './AboutUsData';

import topImg from '../../assets/images/about-us-bg.png';

class AboutUs extends Component {
  showImg(datas) {
    const views = [];
    if(datas) {
      datas.map((item, key) => {
        views.push(
          <div className="about-us-item">
             <div className="about-us-item-imgdiv">
               <img src={item.img} alt="" className={ item.type === 'column' ? 'columnImg' : 'rowImg'}/>
              </div>
             <div className="about-us-item-title">{item.title}</div>
          </div>
        )
      })
    }
    return views;
  }
  render() {
    return (
      <div className="JoinUs">
        <div className="JoinUs-header animated bounceInDown">
          <Nav selected="contact" />
        </div>
        <div className="JoinUs-body">
          <TopImg topImg={topImg} title="公司资质" subTitle="Company qualification" />
          <div className="about-us">
              {this.showImg(data)}
          </div>
          <Footer name="contact" />
        </div>
      </div>
    );
  }
}

export default AboutUs;
