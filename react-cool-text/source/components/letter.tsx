import * as React from 'react'

import { ICoolTextProps } from '..'
import { LetterMethodOrValue, LetterStackMethodOrValue, LetterMethodIsMethod, LetterStackMethodIsMethod } from './text'
import { TransformHelpers } from '../helpers/transform'

import './letter.scss'

const callLetterMethod = <T extends any>(method: LetterMethodOrValue<T>, letter: string, index: number) => 
    LetterMethodIsMethod(method)
        ? method(letter, index) 
        : method

const createLetterStackMethod = <T extends any>(method: LetterStackMethodOrValue<T>, letter: string, index: number): T | ((stackIndex: number) => T) => 
    LetterStackMethodIsMethod(method)
        ? (stackIndex: number) => method(stackIndex, letter, index)
        : method

const getRandomNum = (minMax: MinMax) => Math.random() * (minMax.max - minMax.min) + minMax.min;

const getRandomNumFromRange = (method: LetterMethodOrValue<MinMax>, letter: string, index: number) => 
    getRandomNum(callLetterMethod(method, letter, index))

const getRandomNumFromVector2Range = (method: LetterMethodOrValue<Vector<MinMax>>, letter: string, index: number): Vector => 
    ({
        x: getRandomNum(callLetterMethod(method, letter, index).x),
        y: getRandomNum(callLetterMethod(method, letter, index).y)
    })

export interface ICoolLetterProps extends Omit<ICoolTextProps, 'children'> {
    letter: string
    index: number
}

export const CoolLetter: React.FunctionComponent<ICoolLetterProps> = ({ 
    letter,
    index,
    letterStackCount,
    letterStackColor,
    letterStackScale,
    letterStackRotate,
    letterStackTranslate,
    letterStackZIndex,
    randomRotateRange,
    randomScaleRange,
    randomTranslateRange
}) => {
    const letterMethod = React.useCallback(<T extends any>(method: LetterMethodOrValue<T>) => callLetterMethod(method, letter, index), [letter, index])
    const randomNum = React.useCallback((method: LetterMethodOrValue<MinMax>) => getRandomNumFromRange(method, letter, index), [letter, index])
    const randomNumVector2 = React.useCallback((method: LetterMethodOrValue<Vector<MinMax>>) => getRandomNumFromVector2Range(method, letter, index), [letter, index])
    const letterStackMethodFactory = React.useCallback(<T extends any>(method: LetterStackMethodOrValue<T>) => createLetterStackMethod(method, letter, index), [letter, index])

    const stackCount = React.useMemo(() => letterMethod(letterStackCount), [letterStackCount, letterMethod])
    const stackColor = React.useMemo(() => letterStackMethodFactory(letterStackColor), [letterStackColor, letterStackMethodFactory])
    const stackScale = React.useMemo(() => letterStackMethodFactory(letterStackScale), [letterStackScale, letterStackMethodFactory])
    const stackRotate = React.useMemo(() => letterStackMethodFactory(letterStackRotate), [letterStackRotate, letterStackMethodFactory])
    const stackTranslate = React.useMemo(() => letterStackMethodFactory(letterStackTranslate), [letterStackTranslate, letterStackMethodFactory])
    const stackZIndex = React.useMemo(() => letterStackMethodFactory(letterStackZIndex), [letterStackZIndex, letterStackMethodFactory])
    
    const randomRotate = React.useMemo(() => randomNum(randomRotateRange),[randomRotateRange, letter, index])
    const randomScale = React.useMemo(() => randomNum(randomScaleRange),[randomScaleRange, letter, index])
    const randomTranslate = React.useMemo(() => randomNumVector2(randomTranslateRange),[randomTranslateRange, letter, index])

    const style = React.useMemo<React.CSSProperties>(() => ({
        transform: TransformHelpers.getTransform(randomRotate, randomScale, randomTranslate)
    }),[randomRotate, randomScale, randomTranslate])

    const stack = React.useMemo<string[]>(() => new Array<string>(stackCount).fill(letter), [stackCount, letter])

    return (
        <div className='cool-text-letter' style={style}>
            {letter}

            {stack.map((stackLetter, i) => {
                const props: ICoolLetterStackItemProps = {
                    letter: stackLetter,
                    index: i,
                    stackColor,
                    stackScale,
                    stackRotate,
                    stackTranslate,
                    stackZIndex
                }

                return (
                    <CoolLetterStackItem {...props} key={i} />
                )
            })}
        </div>
    )
}

type LetterStackItemMethod<T> = ((stackIndex: number) => T)
type LetterStackItemMethodOrValue<T> = T | LetterStackItemMethod<T>
const letterStackItemMethodIsMethod = <T extends any>(method: LetterStackItemMethodOrValue<T>): method is LetterStackItemMethod<T> => 
    typeof method === 'function'
const callLetterStackItemMethod = <T extends any>(method: LetterStackItemMethodOrValue<T>, index: number) => 
    letterStackItemMethodIsMethod(method)
        ? method(index)
        : method

interface ICoolLetterStackItemProps {
    letter: string
    index: number
    stackColor?: LetterStackItemMethodOrValue<string>
    stackScale?: LetterStackItemMethodOrValue<number>
    stackRotate?: LetterStackItemMethodOrValue<number>
    stackTranslate?: LetterStackItemMethodOrValue<Vector>
    stackZIndex?: LetterStackItemMethodOrValue<number>
}

const CoolLetterStackItem: React.FunctionComponent<ICoolLetterStackItemProps> = ({
    letter,
    index,
    stackColor,
    stackScale,
    stackRotate,
    stackTranslate,
    stackZIndex
}) => {
    const color = React.useMemo(() => callLetterStackItemMethod(stackColor, index), [index, stackColor])
    const scale = React.useMemo(() => callLetterStackItemMethod(stackScale, index), [index, stackScale])
    const rotate = React.useMemo(() => callLetterStackItemMethod(stackRotate, index), [index, stackRotate])
    const translate = React.useMemo(() => callLetterStackItemMethod(stackTranslate, index), [index, stackTranslate])
    const zIndex = React.useMemo(() => callLetterStackItemMethod(stackZIndex, index), [index, stackZIndex])

    const style = React.useMemo<React.CSSProperties>(() => ({
        transform: TransformHelpers.getTransform(rotate, scale, translate),
        color,
        zIndex
    }),[rotate, scale, translate, zIndex])

    return (
        <div className='cool-text-letter-stack-item' style={style}>
            {letter}
        </div>
    )
}