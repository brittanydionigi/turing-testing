import React, { Component } from 'react';
import './App.css';

import GroceryList from './GroceryList'
import AddGroceryForm from './AddGroceryForm'

class App extends Component {
  constructor() {
    super();
    this.state = {
      groceries: []
    }
  }

  componentDidMount() {
    fetch('/api/v1/groceries')
      .then(response => response.json())
      .then(groceries => {
        this.setState({groceries});
      })
      .catch(error => console.log('Error fetching groceries: ', error));
  }

  updateGroceryList(groceries) {
    this.setState({ groceries });
  }

  render() {
    return (
      <div id="app">
        <AddGroceryForm updateGroceryList={this.updateGroceryList.bind(this)} />
        <h2>Groceries:</h2>
        <GroceryList groceries={this.state.groceries} />
      </div>
    );
  }
}

export default App;