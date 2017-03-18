import React, { Component } from 'react';
import './App.css';

import GroceryList from './GroceryList'
import AddGroceryForm from './AddGroceryForm'

class App extends Component {
  render() {
    return (
      <div id="app">
        <AddGroceryForm />
        <h2>Groceries:</h2>
        <GroceryList />
      </div>
    );
  }
}

export default App;