import * as React from 'react'

import { CoolLetter } from './letter';

import './text.scss'

export type LetterMethod<T> = ((letter: string, index: number) => T)
export type LetterMethodOrValue<T> = T | LetterMethod<T>
export const LetterMethodIsMethod = <T extends any>(method: LetterMethodOrValue<T>): method is LetterMethod<T> => typeof method === 'function'

export type LetterStackMethod<T> = ((index: number, letter: string, letterIndex: number) => T)
export type LetterStackMethodOrValue<T> = T | LetterStackMethod<T>
export const LetterStackMethodIsMethod = <T extends any>(method: LetterStackMethodOrValue<T>): method is LetterStackMethod<T> => typeof method === 'function'

export interface ICoolTextProps {
    children: string

    /* (number) The number of times to repeat and stack each letter */
    letterStackCount?: LetterMethodOrValue<number>

    /* The colour to apply to each letter in the stack */
    letterStackColor?: LetterStackMethodOrValue<string>

    /* The scale to apply to each letter in the stack */
    letterStackScale?: LetterStackMethodOrValue<number>
    
    /* The translation to apply to each letter in the stack */
    letterStackTranslate?: LetterStackMethodOrValue<Vector>
    
    /* The rotation to apply to each letter in the stack */
    letterStackRotate?: LetterStackMethodOrValue<number>
    
    /* The z index to apply to each letter in the stack */
    letterStackZIndex?: LetterStackMethodOrValue<number>

    /* Minimum and maximum amount of random rotation per letter */
    randomRotateRange?: LetterMethodOrValue<MinMax>

    /* Minimum and maximum amount of random rotation per letter */
    randomScaleRange?: LetterMethodOrValue<MinMax>
    
    /* Minimum and maximum amount of random translation per letter */
    randomTranslateRange?: LetterMethodOrValue<Vector<MinMax>>
}

export const CoolText: React.FunctionComponent<ICoolTextProps> = ({ 
    children,
    ...props
}) => {
    if (typeof children !== 'string'){
        console.error('CoolText component received children which were not string')
    }

    const Text = React.useMemo<string[]>(() =>  children.split(''),[children])

    return (
        <div className='cool-text'>
            {Text.map((letter, i) => (
                <CoolLetter 
                    letter={letter} 
                    index={i} 
                    key={i + letter} 
                    {...props}
                />
            ))}
        </div>
    )
}

CoolText.defaultProps = {
    letterStackCount: 0,
    randomRotateRange: { min: 0, max: 0 },
    randomScaleRange: { min: 0, max: 0 },
    randomTranslateRange: {x: { min: 0, max: 0 }, y: { min: 0, max: 0 }},
}