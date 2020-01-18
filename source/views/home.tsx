import * as React from 'react';

import { RandomPath } from '../components/svg/randomPath';

import './home.scss';

export const Home: React.FunctionComponent = props => {
  return (
    <div className="home">
      <svg viewBox="0 0 100 100" preserveAspectRatio="none">
        <RandomPath />
      </svg>
    </div>
  );
};

export default Home;
