import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import promise from 'redux-promise-middleware';
import signinReducer from './reducers/signinReducer';

export default createStore(
    combineReducers({
        signinReducer,
    }),
    applyMiddleware(
        createLogger(),
        promise()
    )
);
