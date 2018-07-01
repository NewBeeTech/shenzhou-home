import React, { Component } from 'react';
import Nav from '../../components/Nav';
import TopImgForMagic from '../../components/TopImgForMagic';
import Footer from '../../components/Footer';
import CommonTitle from '../../components/CommonTitle';

import topImg from '../../assets/images/analog-equipment-bg.png';
import img1 from '../../assets/images/analog-equipment-img1.png';
import img2 from '../../assets/images/analog-equipment-img2.png';
import img3 from '../../assets/images/analog-equipment-img3.png';

class AnalogEquipment extends Component {
  render() {
    return (
      <div className="JoinUs">
        <div className="JoinUs-header animated bounceInDown">
          <Nav selected="contact" />
        </div>
        <div className="JoinUs-body">
          <TopImgForMagic topImg={topImg} title="模拟训练装备" subTitle="EQUIPMENT SIMULATORS" />
          <div className="analog-equipment-title">
             <CommonTitle title="模拟训练装备 "/>
          </div>
          <div className="analog-equipment-div1">
              <div><img src={img3} alt="" /></div>
              <div className="analog-equipment-text-div">
                  <div className="analog-equipment-text-title">飞行模拟器</div>
                  <div className="analog-equipment-text-content">公司研制生产了包括旋转翼、固定翼、战术型、全任务型等各种飞行模拟器，能够进行战术模拟训练、飞行驾驶技术模拟训练、武器攻击模拟训练、战场环境模拟训练等，具有较高的逼真度。模拟座舱具有较为真实的仿真仪表、多功能显示器、开关、按钮、指示灯等设备界面。飞行仿真由主控计算机、视景计算机、仪表计算机等实现对装备功能和特性的模拟，为飞行员提供各种飞行任务状态的视觉、听觉、体感等感觉。</div>
              </div>
          </div>
               
          <div className="analog-equipment-div2">
             <div className="analog-equipment-text-div">
                <div className="analog-equipment-text-title2">装甲车模拟器</div>
                <div className="analog-equipment-text-content2">轮式装甲车模拟器由软件和硬件两部分构成，软件有驾驶训练、射击训练、指挥训练和编队战术训练四大功能; 硬件包括机械部分和数据采集器。已大量配发我军各部队及训练基地使用，大大降低训练费用，提高了训练效果。</div>
             </div>
             <div><img src={img2} alt="" /></div>
          </div>


          <div className="analog-equipment-div1">
             <div><img src={img1} alt="" /></div>
             <div className="analog-equipment-text-div">
                <div className="analog-equipment-text-title">迫击炮模拟训练系统</div>
                <div className="analog-equipment-text-content">迫击炮射击模拟训练系统由高级图形计算机指控台、智能瞄准镜、数字方向盘、虚拟激光测距机、高性能投影系统、特制超大银幕、高保真音响系统和全套模拟训练与显示软件组成，可构成一个完整的射击训练回路，大大提高部队训练效果。</div>
             </div>
          </div>
           <div className="analog-equipment-div3"/>
          <Footer name="contact" />
        </div>
      </div>
    );
  }
}

export default AnalogEquipment;
