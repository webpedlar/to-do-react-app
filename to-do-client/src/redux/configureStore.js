import { combineReducers, createStore, applyMiddleware } from 'redux';
import bucketReducer from './reducers/bucketReducer';
import todoListReducer from './reducers/todoListReducer';

import createSagaMiddleware from 'redux-saga'
import MainSaga from './reduxSaga/mainSaga';


const sagaMiddleware = createSagaMiddleware()

const appReducer = combineReducers({
    bucketReducer,todoListReducer
});

let store = createStore(appReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(MainSaga);

export default store;