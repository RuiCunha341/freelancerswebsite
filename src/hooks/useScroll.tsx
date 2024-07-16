import { useEffect, useRef, useState } from 'react';

export const useScroll = (active: boolean, element?: string | HTMLElement) => {
    const [scrollTop, setScrollTop] = useState(
        document.documentElement.scrollTop,
    );
    const elementRef = useRef<Element>();

    useEffect(() => {
        if (element) {
            if (typeof element === 'string')
                elementRef.current =
                    document.querySelector(element) || undefined;
            else elementRef.current = element as HTMLElement;
        }
        if (!elementRef.current) elementRef.current = document.documentElement;
    }, []);

    useEffect(() => {
        if (!active) return undefined;

        const setScrollTopFunc = () => {
            setScrollTop(elementRef.current!.scrollTop);
        };

        (element ? elementRef.current! : document).addEventListener(
            'scroll',
            setScrollTopFunc,
        );

        return () =>
            (element ? elementRef.current! : document).removeEventListener(
                'scroll',
                setScrollTopFunc,
            );
    }, [active]);

    return scrollTop;
};
