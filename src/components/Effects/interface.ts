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
    /** content to animate */
    children: ReactNode;
    /** animation duration */
    duration: number;
    /** animation delay */
    delay?: number;
    /** indicates if content should be wrapped by an internal container or not */
    asWrapper?: boolean;
    /** type of effect to add (ease, ease-in, ease-out, ease-in-out, linear, etc...) */
    effect?: string;
    /** indicates if animation should be triggered by a specific scroll position */
    triggerOnScrollPosition?: number; // scrollTop
    /** indicates if animation should be triggered by a specific position on the screen */
    triggerOnElementPositionOnScreen?: number; // 50 for element on the middle of the screen (top pixels)
    scrollConstant?: IScrollConstant;
    /** indicates initial state for the content to animate */
    initialState?: IEffectState;
    /** indicates final state for the content to animate */
    finalState: IEffectState;
}
