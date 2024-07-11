import LoadingPage from 'containers/LoadingPage';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FullPageProps, baseImagesToPreload } from './interface';
import './styles.scss';

function FullPage({ children }: FullPageProps) {
    const { ready } = useTranslation();
    const [pageReady, setPageReady] = useState(false);
    const [start, setStart] = useState(false);
    /*
    const play = () => {
        setStart(true);
    };
*/
    useEffect(() => {
        if (ready) {
            setTimeout(() => {
                baseImagesToPreload.map((imageSrc: string) => {
                    const imageObject = new Image();
                    imageObject.src = imageSrc;
                    return undefined;
                });
                setPageReady(true);
                setStart(true);
            }, 6500);
        }
    }, [ready]);

    if (!start) return <div>{!pageReady ? <LoadingPage /> : <div />}</div>;
    if (pageReady && start) return children as JSX.Element;
}

export default FullPage;
