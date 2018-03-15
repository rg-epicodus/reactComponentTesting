import React, { Component } from 'react';
import './styles.css';

import ItemPic from '../ItemPic';
import defaultPic from '../../img/default.jpg';

class Item extends Component {
  render() {
    return (
      <a href={this.props.link}  target="_blank">
        <div className="Item" style={this.props.styles}>
          <ItemPic pic={this.props.pic} name={this.props.name}/>
          <div className="TextBox">
            <h1>{this.props.name}</h1>
            <h2>{this.props.cultivar}</h2>
            <h2>{this.props.species}</h2>
            <h2>{this.props.source}</h2>
            <h2>{this.props.packDate}</h2>
          </div>
        </div>
      </a>

    );
  }
}

Item.defaultProps = {
  styles : {backgroundColor: 'white'},
  name : "Default Item",
  cultivar : "Default Cultivar",
  source : "Default Source",
  packDate : "Default Date",
  link : "https://www.google.com",
  pic: defaultPic,
}

export default Item;
