import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Form, Input, Button, Row, Col, Select } from 'antd';
import { UserOutlined, LockOutlined, MailOutlined, PhoneOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import * as actionCreators from '../../store/actions/index';
import Header from '../../shared/components/header/header'
import Footer from '../../shared/components/footer/footer';
import { LoginFormValues, RootState, RegisterFormValues } from '../../../interfaces';


export const Register = ({ sendRegister, registerError, is_loading_request }: RegisterProps) => {
    const {t, i18n } = useTranslation();
    const { Option } = Select;
    const prefixSelector = (
        <Form.Item 
            required
            name="prefix" 
            rules={[
                { 
                    required: true,
                    message: '*'
                }
            ]}
            noStyle>
            <Select disabled={is_loading_request} placeholder="+00" style={{ width: 70 }}>
                
                <Option value="86">+86</Option>
                <Option value="87">+87</Option>
            </Select>
        </Form.Item>
    );
    
    useEffect(() => {
        
    }, []);

    const onFinishHandler = (values: RegisterFormValues) => {
        console.log(values, sendRegister)
        sendRegister(values);
    };

    return (
        <>
            <Header title="CompanyName" />
            <div className="pv6 h-100 absolute overflow-hidden-x w-100 top-0" style={{ backgroundColor: '#F9FBFF' }}>
                <Row justify="center">
                    <h1 className="tc">{t('Sign Up')}</h1>
                </Row>
                <Row justify="center">
                    <Col xl={6} lg={6} md={12} sm={18} xs={22}>
                        <Form name="horizontal_login" layout="vertical" onFinish={(values) => onFinishHandler(values as unknown as RegisterFormValues)}>
                            <Form.Item
                                name="name"
                                rules={[
                                    {
                                        required: true,
                                        message: t('Please enter your name!')
                                    }
                                ]}
                            >
                                <Input
                                    disabled={is_loading_request}
                                    prefix={<UserOutlined  className="site-form-item-icon" />}
                                    type="test"
                                    placeholder={t('Name')}
                                />
                            </Form.Item>
                            <Form.Item
                                name="password"
                                rules={[
                                    {
                                        required: true,
                                        message: t('Please enter your password!')
                                    },
                                    {
                                        min: 6,
                                        message: t('Password too short')
                                    }
                                ]}
                            >
                                <Input
                                    disabled={is_loading_request}
                                    prefix={<LockOutlined className="site-form-item-icon" />}
                                    type="password"
                                    placeholder={t('Password')}
                                />
                            </Form.Item>
                            <Form.Item
                                name="email"
                                rules={[
                                    { 
                                        required: true,
                                        message: t('Please enter your email!')
                                    },
                                    {
                                        type: 'email',
                                        message: t('Please enter a valid email!')
                                    }
                                ]}
                            >
                                <Input
                                    disabled={is_loading_request} 
                                    prefix={<MailOutlined  className="site-form-item-icon" />} 
                                    placeholder={t('Email')} 
                                />
                            </Form.Item>
                            <Form.Item
                                name="country"
                                rules={[
                                    { 
                                        required: true,
                                        message: t('Please select your country!')
                                    }
                                ]}
                            >
                                <Select 
                                    disabled={is_loading_request}
                                    placeholder={t('Select your country')}>
                                    <Option value="AR">Argentina</Option>
                                    <Option value="CL">Chile</Option>
                                    <Option value="US">United States</Option>
                                    <Option value="UY">Uruguay</Option>
                                    <Option value="VE">Venezuela</Option>
                                </Select>
                            </Form.Item>
                            <Form.Item
                                name="phone"
                                rules={[
                                    { 
                                        required: true, 
                                        message: t('Please enter your phone number!')
                                    },
                                    {
                                        pattern: /^\d{10}$/,
                                        message: t('Please insert a valid phone number!')
                                    }
                                ]}
                            >
                                <Input
                                    disabled={is_loading_request}
                                    prefix={<PhoneOutlined className="site-form-item-icon" />} 
                                    addonBefore={prefixSelector} style={{ width: '100%' }} />
                            </Form.Item>
                            <Form.Item shouldUpdate={true}>
                                <Button
                                    block
                                    type="primary"
                                    htmlType="submit"
                                    disabled={is_loading_request}
                                    // disabled={
                                    // !form.isFieldsTouched(true) ||
                                    // form.getFieldsError().filter(({ errors }) => errors.length).length
                                    // }
                                >
                                    {t('Sign Up')}
                                </Button>
                            </Form.Item>
                        </Form>
                    </Col>
                </Row>
            </div>
            <Footer />
        </>
    );
}

interface RegisterProps {
    sendRegister: (arg0: RegisterFormValues) => void;
    registerError: string;
    is_loading_request: boolean;

}

const mapStateToProps = (state: RootState) => {
    return {
        registerError: state.user.registerError,
        is_loading_request: state.request.is_loading_request
    }
};

const mapDispatchToProps = (dispatch: (arg: any) => any) => {
    return {
        sendRegister: (values: RegisterFormValues) => dispatch(actionCreators.sendRegister(values))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);