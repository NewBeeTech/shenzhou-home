import './style.css';
import React, { Component } from 'react';
import logo from '../../assets/images/logo.svg';
import nav from '../../assets/images/nav.svg';
import { dispatch } from '../../store';
import { push } from 'react-router-redux';

const basicsData = [{
  name: 'MAXSim',
  url: '/max-sim'
}, {
  name: 'MagicBook',
  url: '/magic-book'
}, {
  name: '交互式电子手册平台MagicIETM',
  url: '/magic-IETM'
}]

const productData = [{
  name: 'MagicST电子沙盘',
  url: '/magic-st'
}, {
  name: 'MagicWG兵棋推演',
  url: '/magic-wg'
}, {
  name: '模拟训练装备',
  url: '/analog-equipment'
}]


const allCaseData =  [{
  name: '陆军兵种战术对抗训练模拟系统',
  url: '/army-system'
}, {
  name: '直升机特情处置虚拟训练系统',
  url: '/helicopter-system'
}, {
  name: '坦克机动作战协同虚拟训练系统',
  url: '/tank-system'
}, {
  name: '新型编制单元作战效能仿真系统',
  url: '/simulation-system'
}, {
  name: '预警指挥平台模拟训练系统',
  url: '/early-warning'
}, {
  name: '水面舰艇损管虚拟训练系统',
  url: '/naval-vessels'
}, {
  name: '海军教练监控系统',
  url: '/coach-monitoring'
}, {
  name: '海军潜艇作战推演系统',
  url: '/submarine-system'
},{
  name: '新型作战平台作战战法研究系统',
    url: '/combat-platform'
 }, { 
    name: '空军作战指挥训练仿真系统', 
    url: '/air-force'
 }, { 
     name: '发射车虚拟操作训练',
     url: '/car-launcher' 
  }, { 
      name: '火箭军战术训练模拟系统', 
      url: '/rocket-system'
   }, { 
       name: '空间态势感知信息保障仿真系统',
       url: '/space-situation'
   }, { 
      name: '军工企业案例', 
      url: '/military-industrial-enterprises'
   }]


   const aboutusData = [ 
    { name: '企业文化', url: '/corporate-culture' },
    { name: '技术支持', url: '/technical-support' },
    { name: '加入我们', url: '/join-us' }
    ]


class Nav extends Component {
  state = {
    data: [],
    visible: false
  }
  componentWillMount() {
    this.setState({
      selected: this.props.selected
    })
  }
  handleList(type) {
    this.setState({
      selected: type
    })
  }
  toggleNav () {
    this.setState({
      isShowNav: !this.state.isShowNav
    })
  }
  showMenu (data) {
    const view = [];
    data && data.map((item, key) => {
       view.push(
           <div
              onClick={() => {
                dispatch(push(item.url))
              }}
           >{item.name}</div>
       )
    })
    return view;
  }
  setData(data, isShow) {
     this.setState({
        data,
        visible: isShow
     })
  }
  render() {
    return (
      <div>
      <div className="Nav tabs-style-linemove">
        <img className="Nav-logo" src={logo} alt="logo" />
        <span onClick={() => {this.toggleNav()}}><img className="nav-icon" src={nav} alt="nav" width="30"/></span>
				<nav>
					<ul>
            <li
              className={this.state.selected === 'home' ? 'tab-current' : ''}
              onClick={() => this.handleList('home')}
            ><a href="/#home">首页</a></li>
						<li
              className={this.state.selected === 'basics' ? 'tab-current' : ''}
              onClick={() => {
                this.handleList('basics')
                this.setData(basicsData, false)
              }}
              onMouseOver={() => this.setData(basicsData, true)}
              onMouseOut={() => this.setData(basicsData, false)}
            ><a href="/#basics">基础平台</a></li>
						<li
              className={this.state.selected === 'product' ? 'tab-current' : ''}
              onClick={() => {
                this.handleList('product')
                this.setData(basicsData, false)
              }}
              onMouseOver={() => this.setData(productData, true)}
              onMouseOut={() => this.setData(productData, false)}
            ><a href="/#product">主要产品</a></li>
						<li
              className={this.state.selected === 'resolve' ? 'tab-current' : ''}
              onClick={() => {
                this.handleList('resolve')
                this.setData(basicsData, false)
              }}
              onMouseOver={() => this.setData(allCaseData, true)}
              onMouseOut={() => this.setData(allCaseData, false)}
            ><a href="/#resolve">解决方案</a></li>
            <li
              className={this.state.selected === 'aboutus' ? 'tab-current' : ''}
              onClick={() => {
                this.handleList('aboutus')
                this.setData(aboutusData, false)
                dispatch(push('/about-us'))
              }}
              onMouseOver={() => this.setData(aboutusData, true)}
              onMouseOut={() => this.setData(aboutusData, false)}
            ><a>关于我们</a></li>
						<li
              className={this.state.selected === 'support' ? 'tab-current' : ''}
              onClick={() => {
                this.handleList('support')
                dispatch(push('/technical-support'))
              }}
            ><a>技术支持</a></li>
						<li
              className={this.state.selected === 'culture' ? 'tab-current' : ''}
              onClick={() => {
                this.handleList('culture')
                dispatch(push('/corporate-culture'))
              }}
            ><a>企业文化</a></li>
						<li
              className={this.state.selected === 'contact' ? 'tab-current' : ''}
              onClick={() => {
                this.handleList('contact')
                dispatch(push('/contact-us'))
              }}
            ><a>联系我们</a></li>
					</ul>
				</nav>
        <div
          className={`overlay overlay-contentscale ${this.state.isShowNav ? 'open' : ''}`}
        >
    			<button type="button" onClick={() => {this.toggleNav()}} className="overlay-close">Close</button>
    			<nav>
    				<ul>
    					<li><a onClick={() => {this.toggleNav()}} href="/#home">首页</a></li>
    					<li><a onClick={() => {this.toggleNav()}} href="/#basics">基础平台</a></li>
    					<li><a onClick={() => {this.toggleNav()}} href="/#product">主要产品</a></li>
    					<li><a onClick={() => {this.toggleNav()}} href="/#resolve">解决方案</a></li>
    					<li>
                 <a 
                   onClick={() => {
                      this.toggleNav()
                      dispatch(push('/technical-support'))
                    }}
                  >
                  技术支持
                  </a>
              </li>
    					<li>
                  <a 
                    onClick={() => {
                      this.toggleNav()
                      dispatch(push('/corporate-culture'))
                    }}
                  >
                  企业文化
                  </a>
               </li>
    					<li>
                  <a 
                    onClick={() => {
                      this.toggleNav()
                      dispatch(push('/contact-us'))
                    }}
                  >
                    联系我们
                  </a>
              </li>
    				</ul>
    			</nav>
    		</div>
			</div>
        <div 
           className={this.state.visible ? "nav-menu" : "nav-menu hideStyle"}
           onMouseOver={() => this.setState({
              visible: true
           })}
           onMouseOut={() => this.setState({
            visible: false
         })}
        >
           {this.showMenu(this.state.data)}
        </div>
      </div>
    );
  }
}
// Nav.defaultProps = {
//   selected: ''
// }
export default Nav;
