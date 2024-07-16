/* eslint-disable react-hooks/exhaustive-deps */
import classNames from 'classnames';
import React, {
    useEffect,
    useRef,
    useState,
    ReactElement,
    ReactNode,
} from 'react';
import { useScroll } from 'hooks/useScroll';
import { IEffectProps } from './interface';
import {
    effectStateToStyle,
    effectStateToStyleOnScroll,
    getUnit,
    removeUnit,
} from './utils';

function Effects({
    children,
    duration,
    delay = 0,
    effect = 'ease',
    asWrapper = false,
    triggerOnScrollPosition,
    triggerOnElementPositionOnScreen,
    scrollConstant,
    initialState,
    finalState,
}: IEffectProps) {
    const elementRef = useRef<HTMLDivElement>(null);
    const [listenScroll, setListenScroll] = useState(
        () =>
            !!triggerOnScrollPosition ||
            !!triggerOnElementPositionOnScreen ||
            !!scrollConstant,
    );
    const [animated, setAnimated] = useState(false);
    const [style, setStyle] = useState<React.CSSProperties>(() =>
        initialState ? effectStateToStyle(initialState) : {},
    );

    const scroll = useScroll(listenScroll);

    useEffect(() => {
        if (scrollConstant) {
            const { top } = (
                elementRef.current as HTMLElement
            ).getBoundingClientRect();

            const positionY =
                initialState &&
                initialState.positionY &&
                getUnit(initialState.positionY) === 'px'
                    ? removeUnit(initialState.positionY)
                    : 0;

            const positionOnScreen =
                ((top - positionY) / window.innerHeight) * 100;

            if (
                positionOnScreen >= scrollConstant.scrollEnd &&
                positionOnScreen <= scrollConstant.scrollStart
            ) {
                setStyle(
                    effectStateToStyleOnScroll(
                        initialState || {},
                        finalState,
                        scrollConstant,
                        positionOnScreen,
                    ),
                );
            }

            return;
        }

        if (triggerOnScrollPosition && scroll >= triggerOnScrollPosition) {
            setListenScroll(false);
            setAnimated(true);
            setStyle(effectStateToStyle(finalState));
            return;
        }

        if (triggerOnElementPositionOnScreen) {
            const { top } = (
                elementRef.current as HTMLElement
            ).getBoundingClientRect();

            const positionY =
                initialState &&
                initialState.positionY &&
                getUnit(initialState.positionY) === 'px'
                    ? removeUnit(initialState.positionY)
                    : 0;

            const positionOnScreen =
                ((top - positionY) / window.innerHeight) * 100;

            if (
                positionOnScreen >= 0 &&
                positionOnScreen <= triggerOnElementPositionOnScreen
            ) {
                setListenScroll(false);
                setAnimated(true);
                setStyle(effectStateToStyle(finalState));
            }
        }
    }, [scroll]);

    useEffect(() => {
        if (
            triggerOnScrollPosition ||
            triggerOnElementPositionOnScreen ||
            scrollConstant
        )
            return;

        setTimeout(() => {
            setStyle(effectStateToStyle(finalState));
        }, 0);
    }, []);

    const className = [
        'website-effect',
        'website-fade-effect',
        {
            'website-fade-effect--animated': animated,
        },
    ];

    if (asWrapper) {
        return (
            <div
                className={classNames(className, 'website-effect-wrapper')}
                style={{
                    transition: `all ${duration}s ${effect} ${delay}s`,
                    ...style,
                }}
                ref={elementRef}
            >
                {children}
            </div>
        );
    }

    return (
        <>
            {React.Children.map(children, (child, i) => {
                if (React.isValidElement(child)) {
                    return React.cloneElement(child as ReactElement, {
                        className: classNames(
                            child.props.className,
                            className,
                        ) as any,
                        style: {
                            transition: `all ${duration}s ${effect} ${delay}s`,
                            ...child.props.style,
                            ...style,
                        },
                        ref: i === 0 ? elementRef : undefined,
                    });
                }
                return child;
            })}
        </>
    );
}

export default Effects;
