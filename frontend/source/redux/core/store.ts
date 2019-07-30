import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootSaga from './sagas';
import rootReducer from './reducers';

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = typeof window === 'undefined' ? compose : (window as any)['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] || compose;

const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(sagaMiddleware))
)

sagaMiddleware.run(rootSaga);

export default store;

export type IState = ReturnType<typeof store["getState"]>