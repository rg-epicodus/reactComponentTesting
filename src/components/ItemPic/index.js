import React, { Component } from 'react';
import './styles.css';
import defaultPic from '../../img/default.jpg';

class ItemPic extends Component {
  render() {
    return (
      <img className="ItemPic" src={this.props.pic} alt={this.props.name}/>
    );
  }
}

ItemPic.defaultProps = {
  name : "Default Picture",
  pic : defaultPic,
}

export default ItemPic;
