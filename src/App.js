import React from 'react';
import { getCategories } from './services/api';

class App extends React.Component {
  render() {
    getCategories().then((categories) => { console.log(categories)});
    return (
      <h1> Hello World</h1>
    );
  }
}

export default App;
