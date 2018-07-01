import React, { Component } from 'react';
import email from '../../assets/images/email-icon.svg';
import phone from '../../assets/images/phone-icon.svg';
import address from '../../assets/images/address-icon.svg';
import homepage from '../../assets/images/homepage-index-icon.svg';

class ContactUsInfo extends Component {
  render() {
    return (
      <div className="ContactUsInfo-body">
         <div className="ContactUsInfo-item left-cord">
             <div className="ContactUsInfo-item-img"><img src={address} className="ContactUsInfo-item-img" alt="" /></div>
             <div className="ContactUsInfo-item-text"><span>地址</span><br />北京市海淀区昆明湖南路51号中关村军民融合（四季青）产业园B座一层</div>
         </div>

         <div className="ContactUsInfo-item">
             <div className="ContactUsInfo-item-img"><img src={phone} className="ContactUsInfo-item-img" alt="" /></div>
             <div className="ContactUsInfo-item-text"><span>电话/传真</span><br />010-88437188</div>
         </div>

         <div className="ContactUsInfo-item left-cord">
             <div className="ContactUsInfo-item-img"><img src={email} className="ContactUsInfo-item-img" alt="" /></div>
             <div className="ContactUsInfo-item-text"><span>E-MAIL</span><br />info@magicode.cn</div>
         </div>

         <div className="ContactUsInfo-item">
             <div className="ContactUsInfo-item-img"><img src={homepage} className="ContactUsInfo-item-img" alt=""/></div>
             <div className="ContactUsInfo-item-text"><span>公司主页</span><br />http://www.magicode.cn/</div>
         </div>
      </div>
    );
  }
}

export default ContactUsInfo;
