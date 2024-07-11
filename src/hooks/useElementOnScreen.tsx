import { useEffect, useState } from 'react';

const useElementOnScreen = (
    elementRef: any,
    offset: number,
    removeListenerOnVisible: boolean,
) => {
    const [isIntersecting, setIntersecting] = useState(false);
    let positionOnScreen = 0;

    const scrollHandler = () => {
        const { top } = (elementRef.current as any).getBoundingClientRect();
        positionOnScreen = (top / window.innerHeight) * 100;
        if (
            positionOnScreen + offset <= 100 &&
            positionOnScreen - offset >= 0
        ) {
            setIntersecting(true);
        } else {
            setIntersecting(false);
        }
    };
    useEffect(() => {
        window.addEventListener('scroll', scrollHandler, true);
        return () => {
            window.removeEventListener('scroll', scrollHandler, true);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        if (isIntersecting && removeListenerOnVisible) {
            window.removeEventListener('scroll', scrollHandler, true);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isIntersecting]);

    return isIntersecting;
};

export default useElementOnScreen;
