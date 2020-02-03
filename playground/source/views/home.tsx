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
                    randomRotateRange={{ min: -20, max: 20 }}
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
