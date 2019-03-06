import { shallow } from 'enzyme';
import React from 'react';
import App from '../containers/App';

it('expect to render App component', () => {
    expect(shallow(<App />)).toM atchSnapshot();
});

it('correctly increments the counter', () => {
    const mockStore = {
        robots: [],
        searchField: ''
    }
    const wrapper = shallow(<App store={mockStore} />);

    // expect(wrapper).toMatchSnapshot();
});

