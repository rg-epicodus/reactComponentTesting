import React, { Component } from 'react';
import './styles.css';

import ItemPic from '../ItemPic';
import defaultPic from '../../img/default.jpg';

class Item extends Component {
  constructor(props) {
    super(props);
    this.state = { type: "" };
    this.handleEvent = this.handleEvent.bind(this);
    this.handleName = this.handleName.bind(this);
  }

  handleEvent(e) {
    this.setState({
      type: e.type
    });
  }

  handleName() {
    alert(this.props.name);
  }
  render() {
    let styles = {
      backgroundColor: "blue",
      width: "200px",
      height: "60px",
      color: "white",
      fontSize : "20px"
    };

    let innerText = this.state.type
      ? `I detect an event! Type: ${this.state.type}`
      : "No event detected";

    return (
      <div>
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
        <div>
          <button onClick={this.handleName}>{this.props.name}</button>
          <button onClick={this.handleName}>Also {this.props.name}</button>
        </div>
        <div
          style={styles}
          onMouseOver={this.handleEvent}
          onMouseOut={this.handleEvent}
          onClick={this.handleEvent}
          >
          {innerText}
        </div>
      </div>

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
