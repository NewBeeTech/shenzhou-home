import React, { Component } from 'react';

import mapImg from '../../assets/images/join-us-map.jpeg';

class ContactDetails extends Component {
  render() {
    return (
      <div className="Contact-details">
         <div className="Contact-details-left">
           <div>地址：北京市海淀区昆明湖南路51号中关村军民融合（四季青）产业园B座一层</div>
           <div>联系人：冯女士</div>
           <div>联系电话：010-88506772</div>
           <div>Email: hr@magicode.cn</div>
         </div>
         <div className="Contact-details-right">
           <img src={mapImg} className="Contact-details-map" alt="" />
         </div>
      </div>
    );
  }
}

export default ContactDetails;
