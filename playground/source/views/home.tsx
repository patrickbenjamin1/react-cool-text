import * as React from 'react';

import { CoolText } from '../../../react-cool-text/source/components/text';
import { MinMax } from '../../../react-cool-text/source/types';

import './home.scss';
import '../../../react-cool-text/source/theme.module.css';

const getRandomNum = (minMax: MinMax) => Math.random() * (minMax.max - minMax.min) + minMax.min;

export const Home: React.FunctionComponent = () => {
    const [words, setWords] = React.useState([`react-cool-text`]);

    return (
        <div className="home">
            {words.map(word => (
                <CoolText
                    key={word}
                    letterStackItemCount={1}
                    // letterStackItemColor="red"
                    randomScaleRange={{ min: 0.2, max: 2 }}
                    randomRotateRange={{ min: -20, max: 20 }}
                    randomTranslateRange={{ x: { min: -10, max: 10 }, y: { min: -10, max: 10 } }}
                    // letterStackItemTranslate={stackItemIndex => ({
                    //     y: stackItemIndex * 2,
                    //     x: 1,
                    // })}
                    // {...CoolExamples.drunk}
                >
                    {word}
                </CoolText>
            ))}
        </div>
    );
};

export default Home;
