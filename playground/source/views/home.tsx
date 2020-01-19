import * as React from 'react';

import { CoolText } from '../../../react-cool-text/source/components/text';

import './home.scss';

const getRandomNum = (minMax: MinMax) => Math.random() * (minMax.max - minMax.min) + minMax.min;

export const Home: React.FunctionComponent = () => {
  const [words, setWords] = React.useState(['oooooooooo'])

  return (
    <div className="home">
      {words.map((word) => 
        <CoolText 
          randomRotateRange={{ min: 0, max: 360 }} 
          randomScaleRange={{ min: 0.4, max: 0.6 }} 
          randomTranslateRange={{ x: { min: -10, max: 10 }, y: { min: -10, max: 10 } }}
          letterStackCount={() => Math.floor(getRandomNum({ min: 1, max: 70 }))}
          letterStackTranslate={(stackIndex) => ({
            x: stackIndex * -10,
            y: stackIndex * -10,
          })}
          letterStackScale={(stackIndex) => stackIndex * 0.9}
          letterStackColor={(stackIndex) => stackIndex === 0 ? 'red' :`rgb(${stackIndex * 6},${stackIndex * 6},${stackIndex * 6})`}
          letterStackZIndex={(stackIndex) => 2000 - stackIndex}
        >
          {word}
        </CoolText>
      )}
    </div>
  );
};

export default Home;
