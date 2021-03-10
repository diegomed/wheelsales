import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Header from './header';

configure({ adapter: new Adapter() });

describe('<Header />', () => {
    it('should render a header container', () => {
        const wrapper = shallow(<Header />);
        expect(wrapper.exists('header')).toBeTruthy();
    });

    it('should render a header container with the title prop as text', () => {
        const wrapper = shallow(<Header />);
        wrapper.setProps({ title: 'Test' });
        expect(wrapper.text()).toEqual('Test');
    });
});