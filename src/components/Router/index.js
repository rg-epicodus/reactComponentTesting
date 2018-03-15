import React, { Component } from 'react';
import {
  Route,
  Switch
} from 'react-router-dom';
import Home from '../Home';
import ItemList from '../ItemList';
import NotFound from '../NotFound';
import './styles.css';

class Router extends Component {
  render() {
    return (
      <div className="Router">
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/products" component={ItemList}/>
        <Route component={NotFound} />
      </Switch>
      </div>
    );
  }
}

export default Router;
