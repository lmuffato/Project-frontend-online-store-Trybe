import React from 'react';
import './App.css';
import Input from './services/input';
import ListCategories from './components/ListCategories';

class App extends React.Component {
  render() {
    return (
      <div>
        <Input />
        <aside>
          <ListCategories />
        </aside>
      </div>
    );
  }
}

export default App;
