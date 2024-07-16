import { ReactNode } from 'react';

export interface IScrollConstant {
    scrollStart: number;
    scrollEnd: number;
}

export interface IEffectState {
    opacity?: number;
    positionX?: number | string;
    positionY?: number | string;
    color?: string;
    backgroundColor?: string;
    scale?: number;
}

export interface IEffectProps {
    children: ReactNode;
    duration: number;
    delay?: number;
    asWrapper?: boolean;
    effect?: string;
    triggerOnScrollPosition?: number; // scrollTop
    triggerOnElementPositionOnScreen?: number; // 50 for element on the middle of the screen (top pixels)
    scrollConstant?: IScrollConstant;
    initialState?: IEffectState;
    finalState: IEffectState;
}
