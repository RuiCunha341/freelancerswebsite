import React, { useEffect, useState } from 'react';
import './styles.scss';
import classNames from 'classnames';

const loadingBars: number[] = Array.from({ length: 10 }, () => 0);

function LoadingPage() {
    const [loadingState, setLoadingState] = useState(0);

    useEffect(() => {
        if (loadingState === 9) return;
        setTimeout(() => {
            setLoadingState(loadingState + 1);
        }, 600);
    }, [loadingState]);

    return (
        <div className='loading-page'>
            <div className='loading-page__loading-bar-container'>
                {loadingBars.map((e, i) => {
                    return (
                        <div
                            className={classNames(
                                'loading-page__loading-bar-container__bar',
                                {
                                    filled: loadingState >= i,
                                },
                            )}
                        />
                    );
                })}
            </div>
            <div className='loading-page__loading-text-container'>loading</div>
        </div>
    );
}

export default LoadingPage;
