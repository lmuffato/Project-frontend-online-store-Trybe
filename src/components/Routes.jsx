import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import SearchBar from './SearchBar';

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={ SearchBar } />
      </Switch>
    );
  }
}
// xablau
export default Routes;
