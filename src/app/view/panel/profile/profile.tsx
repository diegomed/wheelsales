import React, { useState } from 'react';

import { Form, Input, Button, Upload, message, Row, Col } from 'antd';
import { LoadingOutlined, PlusOutlined, ShopOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import UploadAvatar from 'src/app/shared/components/uploadAvatar/uploadAvatar';


const Profile = () => {
    const {t, i18n } = useTranslation();




    const onFinish = (values: any) => {
        console.log('Success:', values);
    };
    
    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    // const uploadButton = (
    //     <div>
    //         {loading ? <LoadingOutlined /> : <PlusOutlined />}
    //         <div style={{ marginTop: 8 }}>Upload</div>
    //     </div>
    // );

    return (
        <>
        <Row>
            <Col span={24}>
                <Form
                    layout="vertical"
                    name="basic"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                >
                    <Row>
                        <Col span={16} className="pa3">
                            <Row>
                                <Col span={24}>
                                    <h1 className="silver">{t('My profile')}</h1>
                                </Col>
                            </Row>
                                <Form.Item
                                    name="title"
                                    rules={[{ required: true, message: 'Please input your username!' }]}
                                >
                                    <Input 
                                        className="pa2"
                                        prefix={<ShopOutlined />}
                                        placeholder={t('Business name')}
                                     />
                                </Form.Item>
                                <div className="bg-white br2 pa3">


                                    <Form.Item
                                        label="Username"
                                        name="username"
                                        rules={[{ required: true, message: 'Please input your username!' }]}
                                    >
                                        <Input />
                                    </Form.Item>

                                    <Form.Item
                                        label="Username"
                                        name="username"
                                        rules={[{ required: true, message: 'Please input your username!' }]}
                                    >
                                        <Input />
                                    </Form.Item>

                                    <Form.Item
                                        label="Username"
                                        name="username"
                                        rules={[{ required: true, message: 'Please input your username!' }]}
                                    >
                                        <Input />
                                    </Form.Item>

                                    <Form.Item
                                        label="Password"
                                        name="password"
                                        rules={[{ required: true, message: 'Please input your password!' }]}
                                    >
                                        <Input.Password />
                                    </Form.Item>
                                </div>

                            <Form.Item>
                                <Button type="primary" htmlType="submit">
                                Submit
                                </Button>
                            </Form.Item>
                        </Col>
                        <Col span={8} className="pa3 flex">
                            <UploadAvatar/>
                            {/* <Upload
                                name="avatar"
                                listType="picture-card"
                               
                                showUploadList={false}
   
                                beforeUpload={beforeUpload}
                                onChange={handleChange}
                            >
                                {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
                            </Upload> */}
                            {/* <p>{t('Your avatar should be min 400x400 ')}</p> */}
                        </Col>
                    </Row>
                </Form>
            </Col>
        </Row>
        </>
    );
};

export default Profile;