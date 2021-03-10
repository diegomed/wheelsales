import React from 'react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
    const {t, i18n } = useTranslation();

    return (
        <footer className="fixed w-100 bottom-0">
            <p className="tc">{t('WheelSales. All rights reserved.')}</p>
        </footer>
    );
};

export default Footer;