import React, { Component } from 'react';

import './AddGroceryForm.css';

class AddGroceryForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      quantity: ''
    };
  }

  updateProperty(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  addGrocery(event) {
    event.preventDefault();

    fetch('/api/v1/groceries', {
      method: 'POST',
      body: JSON.stringify({ grocery: this.state }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(() => {
      this.setState({
        name: '',
        quantity: ''
      });
    })
    .catch(error => console.log(error));
  }

  render() {
    return (
      <form
        className="AddGroceryForm"
        onSubmit={event => this.addGrocery(event)}
      >
        <label>
          Name
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={this.state.name}
            onChange={event => this.updateProperty(event)}
          />
        </label>
        <label>
          Quantity
          <input
            type="text"
            name="quantity"
            placeholder="Quantity"
            value={this.state.quantity}
            onChange={event => this.updateProperty(event)}
          />
        </label>
        <input
          type="submit"
          value="Create Item"
          disabled={!this.state.name}
        />
      </form>
    );
  }
}

export default AddGroceryForm;