import React, { useEffect, useRef, useState } from 'react';
import './styles.scss';
import Footer from 'containers/Footer';
import Menu from 'containers/Menu';
import { IPageContent } from './interface';

function PageContent({ children }: IPageContent) {
    return (
        <div className='page-content'>
            <Menu />
            <div className='page-content__body'>{children}</div>
            <Footer />
        </div>
    );
}

export default PageContent;
