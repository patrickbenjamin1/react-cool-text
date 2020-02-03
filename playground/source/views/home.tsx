import * as React from 'react';

import { CoolText } from '../../../react-cool-text/source/components/text';
import { CoolExamples } from '../coolExamples';

import './home.scss';

const getRandomNum = (minMax: MinMax) => Math.random() * (minMax.max - minMax.min) + minMax.min;

export const Home: React.FunctionComponent = () => {
    const [words, setWords] = React.useState([`TEST THE THING`]);

    return (
        <div className="home">
            {words.map(word => (
                <CoolText
                    key={word}
                    letterStackItemCount={1}
                    letterStackItemColor="red"
                    randomScaleRange={{ min: 0.2, max: 2 }}
                    randomRotateRange={{ min: -180, max: 180 }}
                    randomTranslateRange={{ x: { min: -10, max: 10 }, y: { min: -10, max: 10 } }}
                    letterStackItemTranslate={stackItemIndex => ({
                        y: stackItemIndex * 20,
                        x: 1,
                    })}
                    // {...CoolExamples.drunk}
                >
                    {word}
                </CoolText>
            ))}
        </div>
    );
};

export default Home;
