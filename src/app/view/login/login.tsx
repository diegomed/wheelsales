import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Form, Input, Button, Row, Col } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import * as actionCreators from '../../store/actions/index';
import Header from '../../shared/components/header/header'
import Footer from '../../shared/components/footer/footer';
import { LoginFormValues, RootState } from '../../../interfaces';


export const Login = ({ login, loginError, is_loading_request }: LoginProps) => {
    const {t, i18n } = useTranslation();
    
    useEffect(() => {
        
    }, []);

    const onFinishHandler = (values: LoginFormValues) => {
        login(values);
    };

    return (
        <>
            <Header title="CompanyName" />
            <div className="pv6 h-100 absolute overflow-hidden-x w-100 top-0" style={{ backgroundColor: '#F9FBFF' }}>
                <Row justify="center">
                    <h1 className="tc">{t('Log in')}</h1>
                </Row>
                <Row justify="center">
                    <Col xl={6} lg={6} md={12} sm={18} xs={22}>
                        <Form 
                            name="horizontal_login" 
                            layout="vertical" 
                            onFinish={(values) => onFinishHandler(values as unknown as LoginFormValues)}
                        >
                            <Form.Item
                                name="email"
                                rules={[
                                    { 
                                        required: true,
                                        message: t('Please input your email!')
                                    },
                                    {
                                        type: 'email',
                                        message: t('Please enter a valid email!')
                                    }
                                ]}
                            >
                                <Input
                                    disabled={is_loading_request} 
                                    prefix={<UserOutlined className="site-form-item-icon" />} 
                                    placeholder={t('Email')} 
                                />
                            </Form.Item>
                            <Form.Item
                                name="password"
                                rules={[
                                    {
                                        required: true,
                                        message: t('Please input your password!')
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
                                    {t('Log in')}
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

interface LoginProps {
    login: (arg0: LoginFormValues) => void;
    loginError: string;
    is_loading_request: boolean;

}

const mapStateToProps = (state: RootState) => {
    return {
        loginError: state.user.loginError,
        is_loading_request: state.request.is_loading_request
    }
};

const mapDispatchToProps = (dispatch: (arg: any) => any) => {
    return {
        login: (values: LoginFormValues) => dispatch(actionCreators.sendLogin(values))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);