import React, { useEffect, useRef, useState } from 'react';
import './styles.scss';
import Footer from 'containers/Footer';
import Menu from 'containers/Menu';
import { IPageContent } from './interface';

function PageContent({ children }: IPageContent) {
    const menuRef = useRef<HTMLDivElement>(null);
    const [menuHeight, setMenuHeight] = useState(0);

    useEffect(() => {
        setMenuHeight(menuRef?.current?.offsetHeight || 0);
    }, [menuRef?.current?.offsetHeight]);

    return (
        <div className='page-content'>
            <Menu reference={menuRef} />
            <div
                className='page-content__body'
                style={{
                    paddingTop: `${menuHeight + 20}px`,
                    paddingBottom: `20px`,
                }}
            >
                {children}
            </div>
            <Footer />
        </div>
    );
}

export default PageContent;
