import React, { Component } from 'react';
import Nav from '../../components/Nav';
import TopImg from '../../components/TopImg';
import Footer from '../../components/Footer';
import CorporateCultureTitle from './CorporateCultureTitle';
import { data, synopsisData } from './CorporateCultureData';

import topImg from '../../assets/images/corporate-culture-bg.png';
import IdeaImg from '../../assets/images/corporate-culture-img10.png';
import staffPresence1 from '../../assets/images/corporate-culture-img1.png';
import staffPresence2 from '../../assets/images/corporate-culture-img2.png';
import staffPresence4 from '../../assets/images/corporate-culture-img4.png';
import staffPresence3 from '../../assets/images/corporate-culture-img3.png';

class CorporateCulture extends Component {
  showImg(datas) {
    const views = [];
    if(datas) {
      datas.map((item, key) => {
        views.push(
          <div className="core-idea-item" key={key}>
             <div className="core-idea-item-imgdiv">
               <img src={item.img} alt="" className="core-idea-img"/>
              </div>
             <div className="core-idea-item-title">{item.title}</div>
          </div>
        )
      })
    }
    return views;
  }
  showSynopsis(datas) {
    const views = [];
    if(datas) {
      datas.map((item, key) => {
        views.push(
          <div key={key} className="Corporate-synopsis-item">{item}</div>
        )
      })
    }
    return views;
  }
  render() {
    return (
      <div className="JoinUs">
        <div className="JoinUs-header animated bounceInDown">
          <Nav selected="culture" />
        </div>
        <div className="JoinUs-body">
          <TopImg topImg={topImg} title="公司文化" subTitle="ABOUT US" />

          <div className="core-idea">
             <CorporateCultureTitle title="核心理念" EnglishTitle="Core Philosophy"/>
             <div className="core-idea-content">
                <img src={IdeaImg} alt="" />
                <div className="core-idea-content-right">
                   <div className="core-idea-content-right-title">北京神舟智汇科技有限公司</div>
                   <div className="core-idea-content-right-sunTitle"><div />神舟腾飞，智汇天下</div>
                   <div className="core-idea-content-right-content">神舟走进新时代，军民融合谱华章！我们来自于国防科大，来自于中科院，来自于各军兵种，汇聚天下智慧，服务军队军工！公司立足于模拟仿真，加强武器配套，发挥科技优势，自主研发可控，以振兴国防事业为己任，乘势而上，鼎力前行！我们将不负时代重托，为实现中华民族伟大复兴的中国梦贡献全部的智慧和力量！</div>
                </div>
             </div>
          </div>

          <div className="corporate-culture">
              <CorporateCultureTitle title="公司简介" EnglishTitle="Brief Introduction"/>
              <div className="Corporate-synopsis">
                  {this.showSynopsis(synopsisData)}
              </div>
          </div>

          <div className="core-idea">
              <CorporateCultureTitle title="办公环境" EnglishTitle="Office environment"/>
              <div className="core-idea-content">
                  {this.showImg(data)}
              </div>
          </div>

          <div className="corporate-culture">
             <CorporateCultureTitle title="员工风采" EnglishTitle="Staff Presence"/>
             <div className="staff-presence1">
                <img src={staffPresence1} alt="" />
                <div className="staff-presence1-text">团日活动激发了员工饱满的工作热情</div>
             </div>

             <div className="staff-presence2-body">
               <div className="staff-presence2">
                  <img src={staffPresence2} alt="" />
                  <div className="staff-presence2-text">神舟智汇代表天津市滨海新区军民融合创新研究院出战篮球赛</div>
               </div>

               <div className="staff-presence2">
                  <img src={staffPresence4} alt="" />
                  <div className="staff-presence2-text">真人CS游戏锻炼了员工的团队协作能力</div>
               </div>
             </div>

             <div className="staff-presence1">
                <img src={staffPresence3} alt="" />
                <div className="staff-presence1-text">公司组织员工参加青年节主题活动</div>
             </div>
          </div>

          <Footer name="contact" />
        </div>
      </div>
    );
  }
}

export default CorporateCulture;
