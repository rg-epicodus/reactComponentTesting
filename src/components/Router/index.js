import React, { Component } from 'react';
import {
  Route,
  Switch
} from 'react-router-dom';
import Home from '../Home';
import ItemList from '../ItemList';
import './styles.css';

class Router extends Component {
  render() {
    return (
      <div className="Router">
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/products" component={ItemList}/>
      </Switch>
      </div>
    );
  }
}

export default Router;
