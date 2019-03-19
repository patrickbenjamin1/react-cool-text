import * as React from 'react';

import { Route, BrowserRouter } from 'react-router-dom';

import Shell from './components/ui/shell/shell';
import Home from './views/home';

export const Routes: React.FunctionComponent = props => {
  return (
    <BrowserRouter>
      <Shell>
        <Route path='/' exact component={Home} />
      </Shell>
    </BrowserRouter>
  )
}