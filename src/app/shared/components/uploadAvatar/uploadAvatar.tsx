import React, { useState, ChangeEvent } from 'react';
import { useTranslation } from 'react-i18next';
import { Row, Col } from 'antd';


function getBase64(img: any, callback: any) {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
}
  
function beforeUpload(file: File) {
    console.log(file);
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
        // message.error('You can only upload JPG/PNG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
        // message.error('Image must smaller than 2MB!');
    }
    return isJpgOrPng && isLt2M;
}

const UploadAvatar = (props: any) => {
    const {t, i18n } = useTranslation();

    const [loading, setLoading] = useState(false);
    const [imageUrl, setImageUrl] = useState(undefined);
    const handleChange = (info: ChangeEvent<HTMLInputElement>) => {
        let img = info.target.files?.item(0);
        getBase64(img, (imgResult: any) => {
            setImageUrl(imgResult);
        })
        // if (info.file.status === 'uploading') {
        //     setLoading(true);
        //     return;
        // }
        // if (info.file.status === 'done') {
        //     // Get this url from response in real world.
        //     getBase64(info.file.originFileObj, (imageUrl: any) => {
        //             setLoading(false);
        //             setImageUrl(imageUrl);
        //         }
        //     );
        // }
    };

    return (
        <Row>
            <Col span={24}>
                <div className="h4 w4 bg-silver relative center">
                    <input type="file" className="absolute h-100 w-100 o-0" onChange={handleChange}/>
                    { imageUrl && <img src={imageUrl} />}
                </div>
                <p className="pa2 tc">{t('Your avatar should be min 400x400 ')}</p>
            </Col>
        </Row>
    );
};

export default UploadAvatar;


