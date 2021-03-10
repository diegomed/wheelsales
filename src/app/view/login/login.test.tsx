import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Form, Input, Button, Row, Col } from 'antd';

import { Login } from './login';

configure({ adapter: new Adapter() });

describe('<Login />', () => {
    it('should render a Form component', () => {
        const wrapper = shallow(<Login />);
        expect(wrapper.find(Form)).toHaveLength(1);
    });

    it('should render two Input components', () => {
        const wrapper = shallow(<Login />);
        expect(wrapper.find(Input)).toHaveLength(2);
    });

    it('should render one Button component', () => {
        const wrapper = shallow(<Login />);
        expect(wrapper.find(Button)).toHaveLength(1);
    });

    // it('should call props.login when Log in is clicked', () => {
    //     const wrapper = shallow(<Login />);
    //     wrapper.setProps({ login: () => {} });

    //     wrapper.find(Button).simulate('click');

    //     expect(wrapper.prop('login')).toHaveBeenCalled();
    // });
});