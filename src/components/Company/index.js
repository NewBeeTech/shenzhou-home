import './style.css';
import React, { Component } from 'react';
import shiming from '../../assets/images/shiming.svg';
import jiazhi from '../../assets/images/jiazhi.svg';
import yuanjing from '../../assets/images/yuanjing.svg';
import bgImg from '../../assets/images/company-bg.svg';
import arrowRight from '../../assets/images/home-look-at-more.svg';
import close from '../../assets/images/home-take-up-icon.svg';

const list = [{
  icon: shiming,
  title: '使命',
  content: '科学为军 产业报国',
}, {
  icon: jiazhi,
  title: '核心价值观',
  content: '服务军队军工 开拓创新进取 ',
}, {
  icon: yuanjing,
  title: '愿景',
  content: '神舟走进新时代 军民融合谱华章',
}]
class Company extends Component {
  state = {
    isShowMore: false
  }
  renderItem () {
    const view = []
    list.map((item, index) => {
      view.push(
        <div key={index} className="Company-item">
          <img src={item.icon} alt="使命" />
          <div className="Company-item-title">
            <span>
              {item.title}
            </span>
          </div>
          <div className="Company-item-content">
            {item.content}
          </div>
        </div>
      )
      return item;
    })
    return view;
  }
  showContent(isShowMore) {
    const view = []
    if (isShowMore) {
      view.push(
        <div>
           <div>北京神舟智汇科技有限公司是以国防科技大学和众多科研院所技术力量为依托、以军民融合指导思想为牵引，专门从事军事模拟仿真与武器装备配套产品技术研发的高科技公司，是国家高新技术企业、中关村高新技术企业和双软企业，具备军工相关资质，并通过了IS09001/GJB9001体系认证，拥有上百项软件著作权和产品专利等。</div> 
           <div>公司总部位于北京市海淀区四季青中关村军民融合产业园B座一层，办公面积2500多平米。现有员工200多人，其中技术人员占70%，博士硕士50余名，军队转业干部40余名。公司品牌和知名度位于国内同行前列。公司还在天津、长沙、武汉、南京、青岛、西安、哈尔滨设立了分公司，为客户提供更加高效优质的服务。 </div>
           <div>公司核心产品MAXSim，是基于通用黑板（GBB）和分布式多智能体系统（DMAS）先进内核技术开发完成的具有自主知识产权的分布式仿真平台。MAXSim总体水平达到国际先进、国内领先，已在陆军、海军、空军、火箭军、战略支援部队、武警部队及国防工业部门获得了广泛应用，成为了国内军事仿真平台与仿真引擎的标杆！ </div>
           <div>公司核心产品MagicBook，是公司引进的目前国际上最先进的虚拟仿真平台。该平台将三维图形技术与训练管理完美结合，在美国、以色列等发达国家的军事训练中得到了广泛应用。该平台采用开放式体系结构和模块化建模技术，能够为用户提供虚拟训练的综合解决方案。 </div>
           <div>公司潜心研发的通用交互电子手册制作系统、电子沙盘系统、兵棋推演系统、装甲车模拟训练系统、炮兵射击模拟训练系统和直升机战术模拟训练系统等，均为长期投入使用，且获得用户肯定的成熟产品。</div>
           <div>神舟走进新时代，军民融合谱华章。公司将高举习近平新时代中国特色社会主义思想的伟大旗帜，艰苦奋斗，自主创新，依托先进科技，服务军队军工，为实现中华民族伟大复兴的中国梦贡献全部的智慧和力量！
              <span className="Company-show-more"
                  onClick={() => {
                    this.setState({ isShowMore: false })
                  }}
              >收起<img src={close} alt="arrow-right"/></span>
           </div>
        </div>
      )
    } else {
      view.push(
        <div>
           北京神舟智汇科技有限公司是以国防科技大学和众多科研院所技术力量为依托、以军民融合指导思想为牵引，专门从事军事模拟仿真与武器装备配套产品技术研发的高科技公司，是国家高新技术企业、中关村高新技术企业和双软企业，具备军工相关资质，并通过了IS09001/GJB9001体系认证，拥有上百项软件著作权和产品专利等。 
           <span className="Company-show-more"
              onClick={() => {
                 this.setState({ isShowMore: true })
              }}
           >展开<img src={arrowRight} alt="arrow-right"/></span>
        </div>
      )
    }
    return view;
  }
  render() {

    return (
      <div className="Company" style={{backgroundImage: `url(${bgImg})`, backgroundSize: 'cover'}}>
        <div className="Company-top animated fadeInDown">
          {this.renderItem()}
        </div>
        <div className="Company-bottom animated fadeInUp">
           {this.showContent(this.state.isShowMore)}
        </div>
      </div>
    );
  }
}

export default Company;
