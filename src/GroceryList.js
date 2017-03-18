import React, { Component } from 'react';
import './App.css';

import Grocery from './Grocery'

class GroceryList extends Component {
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

  render() {
    let { groceries } = this.state;
    let { onPurchaseGrocery, onStarGrocery, onDeleteGrocery } = this.props;

    return (
        <ul id="groceryList">
          { (groceries).map(item => {
              return (
                <Grocery
                  key={item.id}
                  {...item}
                />
              );
            })
          }
        </ul>);

  }
}

export default GroceryList;