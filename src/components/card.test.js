import { shallow, mount, render } from 'enzyme';
import React from 'react';
import Card from './Card';

// shallow: test only one component, no child components
// mount: test components that interact with dom, lifecycle methods, full rendering
// render: render React components in static html, uses cheerio, 
    // tests child components as well

it('expect to render Card component', () => {
    expect(shallow(<Card/>)).toMatchSnapshot();
});