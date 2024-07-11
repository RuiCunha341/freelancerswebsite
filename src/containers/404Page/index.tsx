import React from 'react';
import './styles.scss';
import { sectionContentMotion } from './animation';

function NotFoundPage() {
    // const { t } = useTranslation();

    return (
        <div className='page404'>
            <div {...sectionContentMotion} className='page404__content'>
                404
            </div>
        </div>
    );
}

export default NotFoundPage;
