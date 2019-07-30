import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './redux/core/store';

import { Router } from './router';

import './theme/theme.scss'

ReactDOM.render(
    <Provider store={store}>
        <Router />
    </Provider>,
    document.getElementById('app')
)