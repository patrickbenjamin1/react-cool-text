import { ICoolTextProps } from '../../react-cool-text/source';
import { MinMax } from '../../react-cool-text/source/types';

const getRandomNum = (minMax: MinMax) => Math.random() * (minMax.max - minMax.min) + minMax.min;

type CoolExample = Omit<ICoolTextProps, 'children'>;

export namespace CoolExamples {
    /** used for MXLX/TCT/Genghis Cohn poster, for LLI */
    export const fadeyBubbleText: CoolExample = {
        letterStackItemCount: () => Math.floor(getRandomNum({ min: 1, max: 15 })),
        letterStackItemScale: (stackIndex: number) => 1 + stackIndex * 0.3,
        letterStackItemColor: (stackIndex: number) =>
            stackIndex === 0 ? 'black' : `rgb(${stackIndex * 20}, ${stackIndex * 20}, ${stackIndex * 20})`,
        letterStackItemZIndex: (stackIndex: number) => 2000 - stackIndex,
    };
    /** used for image in MXLX/TCT/Genghis Cohn poster, for LLI */
    export const fadeyBubbleTextBigBoy: CoolExample = {
        letterStackItemCount: () => Math.floor(getRandomNum({ min: 40, max: 80 })),
        letterStackItemScale: (stackIndex: number) => 1 + stackIndex * 0.1,
        letterStackItemColor: (stackIndex: number) =>
            stackIndex === 0 ? 'black' : `rgb(${stackIndex * 4}, ${stackIndex * 4}, ${stackIndex * 4})`,
        letterStackItemZIndex: (stackIndex: number) => 2000 - stackIndex,
        randomTranslateRange: { x: { min: -40, max: 40 }, y: { min: -40, max: 40 } },
        randomRotateRange: { min: -40, max: 40 },
    };

    export const drunk: CoolExample = {
        randomRotateRange: { min: -20, max: 20 },
        letterStackItemCount: 10,
        letterStackItemTranslate: stackIndex => ({
            x: stackIndex * -9,
            y: Math.sin(stackIndex * 0.5) * 10 - 9 * stackIndex,
        }),
        letterColor: (_, index) => (index % 2 === 0 ? 'red' : 'brown'),
        letterStackItemOpacity: stackIndex => 1 / (stackIndex + 1),
    };

    export const coolFadedText: CoolExample = {
        randomRotateRange: { min: -30, max: 30 },
        letterStackItemCount: 40,
        letterStackItemOpacity: i => (i === 0 ? 1 : 0.4 - i * 0.01),
        letterStackItemTranslate: i => ({ x: i * 1, y: i * 1 }),
    };
}
