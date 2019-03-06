import { shallow } from 'enzyme';
import React from 'react';
import CounterButton from './CounterButton';

it('expect to render CounterButton component', () => {
    expect(shallow(<CounterButton />)).toMatchSnapshot();
});

it('correctly increments the counter', () => {
    const wrapper = shallow(<CounterButton />);

    wrapper.find('[id="counter"]').simulate('click');
    wrapper.find('[id="counter"]').simulate('click');
    expect(wrapper.state()).toEqual({ count: 2 });
});