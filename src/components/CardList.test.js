import { shallow, mount, render } from 'enzyme';
import React from 'react';
import CardList from './CardList';

it('expect to render CardList component', () => {
    const mockRobots = [
        {
            id: 1,
            name: 'Olga',
            username: 'OlgaF',
            email: 'olga@mail.com'
        }
    ];

    expect(shallow(<CardList robots={mockRobots} />)).toMatchSnapshot();
});