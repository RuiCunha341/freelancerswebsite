import { IEffectState, IScrollConstant } from './interface';

function hexToRgb(hexstr: string) {
    let a: any = [];
    const hexstrVal = hexstr.replace(/[^0-9a-f]+/gi, '');
    if (hexstrVal.length === 3) {
        a = hexstrVal.split('');
    } else if (hexstrVal.length === 6) {
        a = hexstrVal.match(/(\w{2})/g);
    } else {
        // eslint-disable-next-line no-throw-literal
        throw 'invalid input, hex string must be in the format #FFFFFF or #FFF';
    }
    return a.map((x: string) => {
        return parseInt(x, 16);
    });
}

function getWeightValue(value1: number, value2: number, weight: number) {
    if (value2 > value1) {
        return (value2 - value1) * weight + value1;
    }
    if (value1 > value2) {
        return (value2 - value1) * weight + value1;
    }
    return value1;
}

function intToHex(i: number) {
    let hex = i.toString(16);
    if (hex.length === 1) hex = `0${hex}`;
    return hex;
}

export function hexMix(colorA: string, colorB: string, weight: number) {
    const rgbColorA = hexToRgb(colorA);
    const rgbColorB = hexToRgb(colorB);

    const r = Math.round(getWeightValue(rgbColorA[0], rgbColorB[0], weight));
    const g = Math.round(getWeightValue(rgbColorA[1], rgbColorB[1], weight));
    const b = Math.round(getWeightValue(rgbColorA[2], rgbColorB[2], weight));

    return `#${intToHex(r)}${intToHex(g)}${intToHex(b)}`;
}

export function getUnit(value: string | number | undefined) {
    let unit = 'px';
    if (typeof value === 'string') {
        const match = value.match(/[a-z%]+/);
        if (match) [unit] = match;
    }
    return unit;
}

export function removeUnit(value: string | number) {
    if (typeof value === 'string') {
        const match = value.match(/[-\d.]+/);
        if (match) return parseInt(match[0], 10);
    }
    return (value || 0) as number;
}

export function effectStateToStyle(effectState: IEffectState) {
    const { opacity, positionX, positionY, color, backgroundColor, scale } =
        effectState;

    const positionIsValid =
        positionX || positionX === 0 || positionY || positionY === 0;

    const xVal = removeUnit(positionX || 0);
    const yVal = removeUnit(positionY || 0);
    const xUnit = getUnit(positionX);
    const yUnit = getUnit(positionY);

    return {
        opacity,
        transform: `${
            positionIsValid
                ? `translate3d(${xVal}${xUnit}, ${yVal}${yUnit}, 0)`
                : ''
        } ${scale ? `scale(${scale})` : ''}`,
        color,
        backgroundColor,
    };
}

export function effectStateToStyleOnScroll(
    initialEffectState: IEffectState,
    finalEffectState: IEffectState,
    scrollConstant: IScrollConstant,
    positionOnScreen: number,
) {
    const { scrollStart, scrollEnd } = scrollConstant;

    const weight =
        1 - (positionOnScreen - scrollEnd) / (scrollStart - scrollEnd);
    const { opacity, positionX, positionY, color, backgroundColor, scale } =
        initialEffectState;

    const {
        opacity: opacityF,
        positionX: positionXF,
        positionY: positionYF,
        color: colorF,
        backgroundColor: backgroundColorF,
        scale: scaleF,
    } = finalEffectState;

    const newEffectState: IEffectState = {
        opacity: opacityF && getWeightValue(opacity || 0, opacityF, weight),
        positionX:
            positionXF &&
            getWeightValue(
                removeUnit(positionX || 0),
                removeUnit(positionXF),
                weight,
            ) + getUnit(positionXF),
        positionY:
            positionYF &&
            getWeightValue(
                removeUnit(positionY || 0),
                removeUnit(positionYF),
                weight,
            ) + getUnit(positionYF),
        color: colorF && hexMix(color || '#000', colorF, weight),
        backgroundColor:
            backgroundColorF &&
            hexMix(backgroundColor || '#000', backgroundColorF, weight),
        scale: scaleF && getWeightValue(scale || 1, scaleF, weight),
    };

    return effectStateToStyle(newEffectState);
}
