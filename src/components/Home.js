import React, { Component } from 'react';
import Header from './Header';

class Home extends Component {
  render() {
    return (
      <div data-testid="home-initial-message">
        <Header />
      </div>
    );
  }
}

export default Home;
