import React from 'react';
import { shallow, mount } from 'enzyme';

import Grocery from './Grocery';

describe('Grocery', () => {

  it('renders the name of the grocery in <h3> tags', () => {
    const groceryName = "Bananas";
    const wrapper = shallow(<Grocery name={groceryName} />);

    console.log(wrapper.text());

    const expected = expect.stringContaining('Bananas');

    expect(wrapper.text()).toEqual(expected);

    // expect(wrapper.contains(title)).toEqual(true);
    //expect(wrapper.text().toContain(groceryName));
  });

  it('should have a p.Grocery-quantity element if a quantity is passed as a prop', () => {
    const wrapper = shallow(
      <Grocery name="Bananas" quantity={'17 bunches'} />
    );

    expect(wrapper.find('.Grocery-quantity').length).toEqual(1);
  });

});


describe('.Grocery-purchase button', () => {

  it('should have a text of "Purchase" if purchased is false', () => {
    const wrapper = shallow(
      <Grocery name="Bananas" purchased={undefined} />
    );

    expect(wrapper.find('.Grocery-purchase').text()).toEqual('Purchase');
  });

  it('should have a text of "Unpurchase" if purchased is true', () => {
    const wrapper = shallow(
      <Grocery name="Bananas" purchased={true} />
    );

    expect(wrapper.find('.Grocery-purchase').text()).toEqual('Unpurchase');
  });

});