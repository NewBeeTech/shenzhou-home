import './style.css';
// import './animate.min.css';
// import './default.css';
import React, { Component } from 'react';
import bgImg1 from '../../assets/images/basics-bg.svg';
import bgImg2 from '../../assets/images/basics-bg2.png';
import arrowRight from '../../assets/images/arrow-right.svg';
import basicsImg1 from '../../assets/images/basics-img1.svg';
import basicsImg2 from '../../assets/images/basics-img2.svg';
import basicsImg3 from '../../assets/images/basics-img3.svg';

const list = [{
  title: 'MAXSim',
  img: basicsImg1,
  moreUrl: '/max-sim',
  content: 'MAXSim是我公司基于先进的GBB技术和DMAS技术的系统架构研发完成的自主可控分布式仿真平台，实现了巨大实体数量（100万个）的实时仿真，它具有精细全面的装备建模能力、可视化行为建模能力和强大的运行管理能力。MAXSim仿真平台提供了装备建模、行为建模、想定制作、运行监控、过程回放等一系列工具，支持模型建立、想定制作、仿真运行、数据分析等重要过程。',
}, {
  title: 'MagicBook',
  img: basicsImg2,
  moreUrl: '/magic-book',
  content: 'MagicBook虚拟仿真平台是一套具备高分辨率三维仿真功能的虚拟仿真制作开发、教学与管理平台。它采用开放式结构和模块化技术，提供从内容创建管理、目标规划、知识传递、实时演练到汇报总结的全生命周期训练模式和一站式虚拟实验解决方案。尤其是能为操作流程复杂的训练和意外情况处置的训练提供性价比极高的选择，它将在军事训练领域和民用领域发挥更大的作用。',
}, {
  title: 'MagicIETM',
  img: basicsImg3,
  moreUrl: '/magic-IETM',
  content: 'MagicIETM是一款我公司潜心研发的高效的交互式电子手册编辑平台。传统的设备使用手册、培训手册和维修手册等多以纸介质为主，不能满足实际需要。集数字化技术、因特网技术和人工智能技术于一体的通用交互式电子手册可以大大提高设备手册使用效率，并可与测试、虚拟维修、虚拟训练平台直接相连，成为目前发展方向。 ',
}]
class Basics extends Component {
  showLeftButton (title) {
    const view = [];
    if (title === 'MAXSim') {
      view.push(
        <div className="asics-right-more-button">
            <div className="asics-right-more-button1">免费试用</div>
            <div className="asics-right-more-button2">教程与讨论</div>
        </div>
      );
    }
    return view;
  }
  renderList () {
    const view = [];
    list.map((item, index) => {
      view.push(
        <div key={index} className="Basics-item animated bounceIn" style={{backgroundImage: `url(${index % 2 ? bgImg2 : bgImg1})`, backgroundSize: 'cover'}}>
          <div className="Basics-item-left">
            <div className="Basics-item-left-img" style={{backgroundImage: `url(${item.img})`, backgroundSize: 'cover'}}>
            </div>
          </div>
          <div className="Basics-item-right">
            <div className="Basics-right-title">{item.title}</div>
            <div className="Basics-right-content">
              {item.content}
            </div>
            <div className="Basics-right-more-div">
              {this.showLeftButton(item.title)}
              <a
                className="Basics-right-more"
                href={item.moreUrl}
                // onClick={() => this.getMore(item.moreUrl)}
              >查看更多 <img src={arrowRight} alt="arrow-right"/></a>
            </div>
          </div>
        </div>
      )
      return item;
    })
    return view;
  }
  render() {
    return (
      <div className="Basics">
        {this.renderList()}
      </div>
    );
  }
}

export default Basics;
