import './style.css';
import React, { Component } from 'react';
import logo from '../../assets/images/logo.svg';
import nav from '../../assets/images/nav.svg';
import { dispatch } from '../../store';
import { push } from 'react-router-redux';

class Nav extends Component {
  // props: {
  //   selected: {
  //     type: String
  //   },
  //   isShowNav: {
  //     type: Boolean
  //   }
  // }
  // state: {
  //   selected: {
  //     type: String
  //   }
  // }
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
  render() {
    return (
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
              onClick={() => this.handleList('basics')}
            ><a href="/#basics">基础平台</a></li>
						<li
              className={this.state.selected === 'product' ? 'tab-current' : ''}
              onClick={() => this.handleList('product')}
            ><a href="/#product">主要产品</a></li>
						<li
              className={this.state.selected === 'resolve' ? 'tab-current' : ''}
              onClick={() => this.handleList('resolve')}
            ><a href="/#resolve">解决方案</a></li>
						<li
              className={this.state.selected === 'support' ? 'tab-current' : ''}
              onClick={() => {
                this.handleList('support')
                dispatch(push('/technical-support'))
              }}
            ><a href="#">技术支持</a></li>
						<li
              className={this.state.selected === 'culture' ? 'tab-current' : ''}
              onClick={() => {
                this.handleList('culture')
                dispatch(push('/corporate-culture'))
              }}
            ><a href="#">企业文化</a></li>
						<li
              className={this.state.selected === 'contact' ? 'tab-current' : ''}
              onClick={() => this.handleList('contact')}
            ><a href="/contact-us">联系我们</a></li>
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
    					<li><a onClick={() => {this.toggleNav()}} href="/technical-support">技术支持</a></li>
    					<li><a onClick={() => {this.toggleNav()}} href="/corporate-culture">企业文化</a></li>
    					<li><a onClick={() => {this.toggleNav()}} href="/contact-us">联系我们</a></li>
    				</ul>
    			</nav>
    		</div>
			</div>
    );
  }
}
// Nav.defaultProps = {
//   selected: ''
// }
export default Nav;
