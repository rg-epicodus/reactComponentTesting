import React, { Component } from 'react';
import './styles.css';

import Second from '../Second';
import Third from '../Third';

class Home extends Component {
  render() {
    return (
      <div>
        <h1>Here is my React App again!</h1>
        <Second />
        <Third />
        <a href="/products"><h2>link to products</h2></a>
        <a href="/seeds"><h2>link to seeds</h2></a>
      </div>
    );
  }
}

export default Home;
