import * as React from 'react';

import { CoolText } from '../../../react-cool-text/source/components/text';
import { MinMax } from '../../../react-cool-text/source/types';

import './home.scss';
import '../../../react-cool-text/source/theme.css';

const getRandomNum = (minMax: MinMax) => Math.random() * (minMax.max - minMax.min) + minMax.min;

export const Home: React.FunctionComponent = () => {
    const [words, setWords] = React.useState([`react-cool-text`]);

    return (
        <div className="home">
            {words.map(word => (
                <CoolText
                    key={word}
                    letterStackItemCount={i => 1 + i * i * 2}
                    letterStackItemOpacity={i => (i === 0 ? 1 : 0.3 - i * 0.008)}
                    letterStackItemTranslate={i => ({ y: i * 4, x: 0 })}
                >
                    {word}
                </CoolText>
            ))}
        </div>
    );
};

export default Home;
