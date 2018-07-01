import './style.css';
import React, { Component } from 'react';

class CompositionBody extends Component {
  render() {
    console.log(this.props.islast)
    return (
      <div className="CompositionBody">
        <div><img src={this.props.leftImg} alt="" /></div>
        <div className={this.props.islast ? 'compositionBody-right' : 'compositionBody-right islast'}>
            <div className="compositionBody-right-title"><div />{this.props.title}</div>
            <div className="compositionBody-right-content">{this.props.content}</div>
        </div>
      </div>
    );
  }
}

export default CompositionBody;
