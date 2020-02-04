import * as React from 'react';

import { ICoolTextProps } from '..';
import { LetterMethodOrValue, LetterStackMethodOrValue, LetterMethodIsMethod, LetterStackMethodIsMethod } from './text';
import { TransformHelpers } from '../helpers/transform';
import { ClassHelpers } from '../helpers/class';
import { MinMax, Vector } from '../types';

const callLetterMethod = <T extends any>(method: LetterMethodOrValue<T>, letter: string, index: number) =>
    LetterMethodIsMethod(method) ? method(letter, index) : method;

const createLetterStackMethod = <T extends any>(
    method: LetterStackMethodOrValue<T>,
    letter: string,
    index: number,
): T | ((stackIndex: number) => T) =>
    LetterStackMethodIsMethod(method) ? (stackIndex: number) => method(stackIndex, letter, index) : method;

const getRandomNum = (minMax: MinMax) => Math.random() * (minMax.max - minMax.min) + minMax.min;

const getRandomNumFromRange = (method: LetterMethodOrValue<MinMax>, letter: string, index: number) =>
    getRandomNum(callLetterMethod(method, letter, index));

const getRandomNumFromVector2Range = (method: LetterMethodOrValue<Vector<MinMax>>, letter: string, index: number): Vector => ({
    x: getRandomNum(callLetterMethod(method, letter, index).x),
    y: getRandomNum(callLetterMethod(method, letter, index).y),
});

export interface ICoolLetterProps extends Omit<ICoolTextProps, 'children'> {
    letter: string;
    index: number;
}

export const CoolLetter: React.FunctionComponent<ICoolLetterProps> = ({
    letter,
    index,
    letterStackItemCount,
    letterStackItemColor,
    letterStackItemScale,
    letterStackItemRotate: letterStackItetmRotate,
    letterStackItemTranslate,
    letterStackItemZIndex,
    letterStackItemClassName,
    letterStackItemOpacity,
    randomRotateRange,
    randomScaleRange,
    randomTranslateRange,
    letterColor,
    letterScale,
    letterRotate,
    letterTranslate,
    letterZIndex,
    letterClassName,
}) => {
    const letterMethod = React.useCallback(<T extends any>(method: LetterMethodOrValue<T>) => callLetterMethod(method, letter, index), [
        letter,
        index,
    ]);
    const randomNum = React.useCallback((method: LetterMethodOrValue<MinMax>) => getRandomNumFromRange(method, letter, index), [
        letter,
        index,
    ]);
    const randomNumVector2 = React.useCallback(
        (method: LetterMethodOrValue<Vector<MinMax>>) => getRandomNumFromVector2Range(method, letter, index),
        [letter, index],
    );
    const letterStackMethodFactory = React.useCallback(
        <T extends any>(method: LetterStackMethodOrValue<T>) => createLetterStackMethod(method, letter, index),
        [letter, index],
    );

    const stackCount = React.useMemo(() => letterMethod(letterStackItemCount), [letterStackItemCount, letterMethod]);
    const stackColor = React.useMemo(() => letterStackMethodFactory(letterStackItemColor), [
        letterStackItemColor,
        letterStackMethodFactory,
    ]);
    const stackScale = React.useMemo(() => letterStackMethodFactory(letterStackItemScale), [
        letterStackItemScale,
        letterStackMethodFactory,
    ]);
    const stackRotate = React.useMemo(() => letterStackMethodFactory(letterStackItetmRotate), [
        letterStackItetmRotate,
        letterStackMethodFactory,
    ]);
    const stackTranslate = React.useMemo(() => letterStackMethodFactory(letterStackItemTranslate), [
        letterStackItemTranslate,
        letterStackMethodFactory,
    ]);
    const stackOpacity = React.useMemo(() => letterStackMethodFactory(letterStackItemOpacity), [
        letterStackItemOpacity,
        letterStackMethodFactory,
    ]);
    const stackZIndex = React.useMemo(() => letterStackMethodFactory(letterStackItemZIndex), [
        letterStackItemZIndex,
        letterStackMethodFactory,
    ]);
    const stackClassName = React.useMemo(() => letterStackMethodFactory(letterStackItemClassName), [
        letterStackItemClassName,
        letterStackMethodFactory,
    ]);

    const color = React.useMemo(() => letterMethod(letterColor), [letterColor, letterMethod]);
    const scale = React.useMemo(() => letterMethod(letterScale), [letterScale, letterMethod]);
    const rotate = React.useMemo(() => letterMethod(letterRotate), [letterRotate, letterMethod]);
    const translate = React.useMemo(() => letterMethod(letterTranslate), [letterTranslate, letterMethod]);
    const zIndex = React.useMemo(() => letterMethod(letterZIndex), [letterZIndex, letterMethod]);
    const className = React.useMemo(() => letterMethod(letterClassName), [letterClassName, letterMethod]);

    const randomRotate = React.useMemo(() => (randomRotateRange ? randomNum(randomRotateRange) : 0), [randomRotateRange, letter, index]);
    const randomScale = React.useMemo(() => (randomScaleRange ? randomNum(randomScaleRange) : 1), [randomScaleRange, letter, index]);
    const randomTranslate = React.useMemo(() => (randomRotateRange ? randomNumVector2(randomTranslateRange) : { x: 0, y: 0, z: 0 }), [
        randomTranslateRange,
        letter,
        index,
    ]);

    const style = React.useMemo<React.CSSProperties>(
        () => ({
            transform: TransformHelpers.getTransform((rotate || 0) + randomRotate, (scale || 0) + randomScale, {
                x: (translate?.x || 0) + randomTranslate.x,
                y: (translate?.y || 0) + randomTranslate.y,
                z: (translate?.z || 0) + randomTranslate.z,
            }),
            zIndex,
            color,
        }),
        [color, rotate, scale, translate, zIndex, randomRotate, randomScale, randomTranslate],
    );

    const stack = React.useMemo<string[]>(() => new Array<string>(stackCount).fill(letter), [stackCount, letter]);

    const isReturn = letter === '\n';

    return (
        <div className={ClassHelpers.classNames('cool-text-letter', className)} style={style} data-is-return={isReturn}>
            {!isReturn &&
                stack.map((stackLetter, i) => {
                    const props: ICoolLetterStackItemProps = {
                        letter: stackLetter,
                        index: i,
                        stackColor,
                        stackScale,
                        stackRotate,
                        stackTranslate,
                        stackOpacity,
                        stackZIndex,
                        stackClassName,
                    };

                    return <CoolLetterStackItem {...props} key={i} />;
                })}
        </div>
    );
};

type LetterStackItemMethod<T> = (stackIndex: number) => T;
type LetterStackItemMethodOrValue<T> = T | LetterStackItemMethod<T>;
const letterStackItemMethodIsMethod = <T extends any>(method: LetterStackItemMethodOrValue<T>): method is LetterStackItemMethod<T> =>
    typeof method === 'function';
const callLetterStackItemMethod = <T extends any>(method: LetterStackItemMethodOrValue<T>, index: number) =>
    letterStackItemMethodIsMethod(method) ? method(index) : method;

interface ICoolLetterStackItemProps {
    letter: string;
    index: number;
    stackColor?: LetterStackItemMethodOrValue<string>;
    stackScale?: LetterStackItemMethodOrValue<number>;
    stackRotate?: LetterStackItemMethodOrValue<number>;
    stackTranslate?: LetterStackItemMethodOrValue<Vector>;
    stackOpacity?: LetterStackItemMethodOrValue<number>;
    stackZIndex?: LetterStackItemMethodOrValue<number>;
    stackClassName?: LetterStackItemMethodOrValue<string>;
}

const CoolLetterStackItem: React.FunctionComponent<ICoolLetterStackItemProps> = ({
    letter,
    index,
    stackColor,
    stackScale,
    stackRotate,
    stackTranslate,
    stackOpacity,
    stackZIndex,
    stackClassName,
}) => {
    const color = React.useMemo(() => callLetterStackItemMethod(stackColor, index), [index, stackColor]);
    const scale = React.useMemo(() => callLetterStackItemMethod(stackScale, index), [index, stackScale]);
    const rotate = React.useMemo(() => callLetterStackItemMethod(stackRotate, index), [index, stackRotate]);
    const translate = React.useMemo(() => callLetterStackItemMethod(stackTranslate, index), [index, stackTranslate]);
    const opacity = React.useMemo(() => callLetterStackItemMethod(stackOpacity, index), [index, stackOpacity]);
    const zIndex = React.useMemo(() => callLetterStackItemMethod(stackZIndex, index), [index, stackZIndex]);
    const className = React.useMemo(
        () => ClassHelpers.classNames('cool-text-letter-stack-item', callLetterStackItemMethod(stackClassName, index)),
        [index, stackClassName],
    );

    const style = React.useMemo<React.CSSProperties>(
        () => ({
            transform: TransformHelpers.getTransform(rotate, scale, translate),
            color,
            zIndex,
            opacity,
        }),
        [rotate, scale, translate, color, zIndex],
    );

    return (
        <div className={className} style={style}>
            {letter}
        </div>
    );
};

export default CoolLetter;
