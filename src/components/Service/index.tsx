import React from 'react';
import { useTranslation } from 'react-i18next';
import { IService } from './interface';
import './styles.scss';

function Service({ icon, service }: IService) {
    const { t } = useTranslation();
    return (
        <div className='service-container'>
            <div className='service-container__icon'>
                <div className='icon-container'>{icon}</div>
            </div>
            <p className='service-container__title title'>
                {t(`services.${service}`)}
            </p>
            <p className='service-container__description'>
                {t(`services.${service}_DESCRIPTION`)}
            </p>
        </div>
    );
}

export default Service;
