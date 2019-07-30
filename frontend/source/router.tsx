import * as React from 'react';

import { Route, BrowserRouter } from 'react-router-dom';

import Shell from './components/ui/shell/shell';
import Home from './views/home';

export const RoutePaths = {
  home: () => `/`
}

export const Router: React.FunctionComponent = props => {
  return (
    <BrowserRouter>
      <Shell>
        <Route path={RoutePaths.home()} exact component={Home} />
      </Shell>
    </BrowserRouter>
  )
}