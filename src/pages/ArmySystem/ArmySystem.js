import React, { Component } from 'react';
import Nav from '../../components/Nav';
import TopImgForMagic from '../../components/TopImgForMagic';
import Footer from '../../components/Footer';
import ProductIntroduction from '../../components/ProductIntroduction';
import CommonTitle from '../../components/CommonTitle';
import { compositionData, gongnengDataTitle, gongnengData } from './ArmySystemData'
import topImg from '../../assets/images/army-system-bg.png';
import magicImg1 from '../../assets/images/army-system-img1.png';
import magicImg2 from '../../assets/images/army-system-img2.png';

class ArmySystem extends Component {
  showDataList (data) {
    const views = [];
    if(data) {
      data.map((item, key) => {
        views.push(
          <div key={key} className="max-sim-system-item">
            <div className="max-sim-system-title">
              <div className="army-system-red-div"/>
              <div>{item.title}</div>
            </div>
            <div className="max-sim-system-content">{item.content}</div>
          </div>
        )
      })
    }
    return views;
  }
  showGongnengData(data) {
    const views = [];
    if(data) {
      data.map((item, key) => {
        views.push(
          <div className="army-system-gongneng-right-item">
              <div className="army-system-gongneng-right-no">{item.no}</div>
              <div>{item.content}</div> 
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
          <Nav selected="resolve" />
        </div>
        <div className="JoinUs-body">
          <TopImgForMagic topImg={topImg} title="陆军兵种战术对抗训练模拟系统" subTitle="ARMY TACTICAL CONFRONTATION TRAINING SIMULATION SYSTEM" />
          <ProductIntroduction 
            title="产品简介" 
            content={
              ['陆军兵种战术对抗训练模拟系统用于陆军合同作战训练中指挥员带兵种分队（模拟器）进行训练，既可训练指挥员的指挥筹划能力，也可训练战斗员的战术能力，是当前陆军模拟训练中的一种非常典型的训练模式，也适用于其它军兵种模拟训练。']}
          />
          
          <div className="magic-st-system-composition army-system-composition">
             <CommonTitle title="系统组成" />

             <div className="max-sim-system-body army-system-body">
                {this.showDataList(compositionData)}
            </div>

            
             <div className="magic-st-system-composition-img army-system-composition-img">
               <img src={magicImg1} alt="" />
             </div>
          </div>

          <div className="magic-wg-product-img">
            <CommonTitle title="系统功能" color="#fff"/>

            <div className="army-system-gongneng">
               <div className="army-system-gongneng-img">
                 <img src={magicImg2} alt="" />
               </div>
               <div className="army-system-gongneng-right">
                  <div>{gongnengDataTitle}</div>
                  {this.showGongnengData(gongnengData)}
               </div>

            </div>
          </div>

          <div className="magic-st-technical" />
          
          <Footer name="contact" />
        </div>
      </div>
    );
  }
}

export default ArmySystem;
