import React, { Component } from 'react';
import './styles.css';

import Second from '../Second';
import Third from '../Third';
import ItemList from '../ItemList';

class Home extends Component {
  render() {
    return (
      <div>
        <h1>Here is my React App again!</h1>
        <Second />
        <Third />
        <ItemList />
      </div>
    );
  }
}

export default Home;
