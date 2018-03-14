import React, { Component } from 'react';
import './styles.css';

import Second from '../Second';
import Third from '../Third';

class Home extends Component {
  render() {
    return (
      <div>
        <h1>Here is my React App!</h1>
        <Second />
        <Third />
      </div>
    );
  }
}

export default Home;
