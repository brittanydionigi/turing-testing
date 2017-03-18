import React from 'react';
import { shallow, mount } from 'enzyme';

import AddGroceryForm from './AddGroceryForm';

describe('AddGroceryForm', () => {

  it('adds a new grocery on submit', () => {
    const wrapper = shallow(<AddGroceryForm />);
  });
});