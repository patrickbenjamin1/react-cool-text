import * as React from 'react';

import { Route, BrowserRouter } from 'react-router-dom';

import Home from './views/home';

export const RoutePaths = {
  home: () => `/`,
};

export const Router: React.FunctionComponent = props => {
  return (
    <BrowserRouter>
      <Route path={RoutePaths.home()} exact component={Home} />
    </BrowserRouter>
  );
};
