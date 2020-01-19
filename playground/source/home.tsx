import * as React from 'react';

import { CoolText } from '../../react-cool-text/source/components/text';

import './home.scss';

export const Home: React.FunctionComponent = () => {
  return (
    <div className="home">
      <CoolText>HELLO</CoolText>
    </div>
  );
};

export default Home;
