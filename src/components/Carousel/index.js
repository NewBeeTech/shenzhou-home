import './style.css';
import React, { Component } from 'react';

import leftImg from '../../assets/images/dynamic-date-left.svg';
import rightImg from '../../assets/images/dynamic-date-right.svg';

class Carousel extends Component {
    state = {
        num: 0,
        img: ''
    }
    showBigImg(img) {
      const views = [];
      if (img) {
        views.push(
            <div
              className="Carousel-big-img"
              onClick={() => {
                this.setState({ img: '' })
              }}
            >
              <div><img src={this.state.img} alt="" /></div>
            </div>
        )
      }
      return views;
    }  
  render() {
    const lenghtNum = this.props.data.length;
    return (
      <div className="Carousel">
        <div className="Carousel-jiantou"
           onClick={() => {
            const num = (this.state.num - 1) % lenghtNum;
            this.setState({ num })
           }}
        ><img src={leftImg}  alt=""/></div>
        <div className="Carousel-center">
            <div className="Carousel-left">
               <img src={this.state.num >= 0 ? this.props.data[this.state.num % lenghtNum] : this.props.data[lenghtNum + this.state.num]}  alt=""/>
            </div>
            <div className="Carousel-center-heightLine"
               onClick={() => {
                 const img = this.state.num >= -1 ? this.props.data[(this.state.num+1) % lenghtNum] : this.props.data[lenghtNum+1 + this.state.num];
                 this.setState({ img })
               }}
            >
               <img src={this.state.num >= -1 ? this.props.data[(this.state.num+1) % lenghtNum] : this.props.data[lenghtNum+1 + this.state.num]}  alt=""/>
            </div>
            <div className="Carousel-right">
                <img src={this.state.num >= -2 ? this.props.data[(this.state.num+2) % lenghtNum] : this.props.data[lenghtNum+2 + this.state.num]}  alt=""/>
            </div>
        </div>
        <div className="Carousel-jiantou"
           onClick={() => {
              const num = (this.state.num + 1) % lenghtNum;
              this.setState({ num })
           }}
        ><img src={rightImg}  alt=""/></div>
        {this.showBigImg(this.state.img)}
      </div>
    );
  }
}

export default Carousel;
