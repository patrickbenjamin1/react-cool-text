import * as React from 'react';

import { CoolLetter } from './letter';
import { ClassHelpers } from '../helpers/class';

import { Vector, MinMax } from '../types';

export type LetterMethod<T> = (letterIndex: number, letter: string) => T;
export type LetterMethodOrValue<T> = T | LetterMethod<T>;
export const LetterMethodIsMethod = <T extends any>(method: LetterMethodOrValue<T>): method is LetterMethod<T> =>
    typeof method === 'function';

export type LetterStackMethod<T> = (stackItemIndex: number, letterIndex: number, letter: string) => T;
export type LetterStackMethodOrValue<T> = T | LetterStackMethod<T>;
export const LetterStackMethodIsMethod = <T extends any>(method: LetterStackMethodOrValue<T>): method is LetterStackMethod<T> =>
    typeof method === 'function';

export interface ICoolTextProps {
    children: string;

    // PER LETTER STACK ITEM

    /* (number) The number of times to repeat and stack each letter */
    letterStackItemCount?: LetterMethodOrValue<number>;

    /* The colour to apply to each letter in the stack */
    letterStackItemColor?: LetterStackMethodOrValue<string>;

    /* The scale to apply to each letter in the stack */
    letterStackItemScale?: LetterStackMethodOrValue<number>;

    /* The translation to apply to each letter in the stack */
    letterStackItemTranslate?: LetterStackMethodOrValue<Vector>;

    /* The rotation to apply to each letter in the stack */
    letterStackItemRotate?: LetterStackMethodOrValue<number>;

    /* The opacity to apply to each letter in the stack */
    letterStackItemOpacity?: LetterStackMethodOrValue<number>;

    /* The z index to apply to each letter in the stack */
    letterStackItemZIndex?: LetterStackMethodOrValue<number>;

    /* The rotation to apply to each letter in the stack */
    letterStackItemClassName?: LetterStackMethodOrValue<string>;

    // PER LETTER RANDOM RANGE

    /* Minimum and maximum amount of random rotation per letter */
    randomRotateRange?: LetterMethodOrValue<MinMax>;

    /* Minimum and maximum amount of random rotation per letter */
    randomScaleRange?: LetterMethodOrValue<MinMax>;

    /* Minimum and maximum amount of random translation per letter */
    randomTranslateRange?: LetterMethodOrValue<Vector<MinMax>>;

    // PER LETTER

    /* Color to set each letter */
    letterColor?: LetterMethodOrValue<string>;

    /* Amount to rotate each letter by */
    letterRotate?: LetterMethodOrValue<number>;

    /* Amount to scale each letter by */
    letterScale?: LetterMethodOrValue<number>;

    /* Amount to transform each letter by */
    letterTranslate?: LetterMethodOrValue<Vector>;

    /* The Z index to apply to each letter */
    letterZIndex?: LetterMethodOrValue<number>;

    /* The ClassName to apply to each letter */
    letterClassName?: LetterMethodOrValue<string>;

    // WRAPPER

    /* className to apply to the wrapping element */
    className?: string;

    /* id to apply to the wrapping element */
    id?: string;
}

export const CoolText: React.FunctionComponent<ICoolTextProps> = ({ children, className, id, ...props }) => {
    if (typeof children !== 'string') {
        console.error('CoolText component received children props which was not a string — children must be of type string.');
    }

    const text = React.useMemo<string[]>(() => children.split(''), [children]);

    return (
        <>
            <div className={ClassHelpers.classNames('cool-text', className)} id={id}>
                {text.map((letter, i) => (
                    <CoolLetter letter={letter} index={i} key={i + letter} {...props} />
                ))}
            </div>
            <p className='cool-text-for-screen-readers'>{children}</p>
        </>
    );
};

CoolText.defaultProps = {
    letterStackItemCount: 1,
    randomRotateRange: { min: 0, max: 0 },
    randomScaleRange: { min: 1, max: 1 },
    randomTranslateRange: { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } },
};

export default CoolText;
