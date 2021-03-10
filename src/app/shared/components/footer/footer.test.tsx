import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Footer from './footer';

configure({ adapter: new Adapter() });

describe('<Footer />', () => {
    it('should render a footer container', () => {
        const wrapper = shallow(<Footer />);
        expect(wrapper.exists('footer')).toBeTruthy();
    });
});