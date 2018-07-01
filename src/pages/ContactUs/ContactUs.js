import React, { Component } from 'react';
import Nav from '../../components/Nav';
import TopImg from '../../components/TopImg';
import Footer from '../../components/Footer';
import ContactUsInfo from './ContactUsInfo';
import AddressList from './AddressList';

import topImg from '../../assets/images/join_us_bg.png';
import mapImg from '../../assets/images/join-us-map.jpeg';

class ContactUs extends Component {
  render() {
    return (
      <div className="JoinUs">
        <div className="JoinUs-header animated bounceInDown">
          <Nav selected="contact" />
        </div>
        <div className="JoinUs-body">
          <TopImg topImg={topImg} title="联系我们" subTitle="CONTACT US" />
          <div className="JoinUs-content">
             <div className="contact-us-title">北京神舟智汇科技有限公司</div>
             <ContactUsInfo />
             <AddressList />
          </div>
          <div className="contact-us-map">
            <img src={mapImg} className="contact-us-map" alt="" />
          </div>
          <Footer name="contact" />
        </div>
      </div>
    );
  }
}

export default ContactUs;
