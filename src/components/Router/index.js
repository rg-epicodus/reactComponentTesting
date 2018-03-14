import React, { Component } from 'react';
import {
  Route,
  Switch
} from 'react-router-dom';
import Home from '../Home';

class Router extends Component {
  render() {
    return (
      <div className="Router">
      <Switch>
        <Route exact path="/" component={Home}/>
      </Switch>
      </div>
    );
  }
}

export default Router;
