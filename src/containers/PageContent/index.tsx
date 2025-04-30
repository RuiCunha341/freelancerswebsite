import React from 'react';
import './styles.scss';
import Menu from 'containers/Menu';
import { IPageContent } from './interface';

function PageContent({ children }: IPageContent) {
    return (
        <div className='page-content'>
            <Menu />
            <div className='page-content__body'>{children}</div>
        </div>
    );
}

export default PageContent;
