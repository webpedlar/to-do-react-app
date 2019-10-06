import { combineReducers, createStore, applyMiddleware } from 'redux';
import WeatherReducer from './reducers/weatherReducer';

import createSagaMiddleware from 'redux-saga'
import MainSaga from './reduxSaga/mainSaga';


const sagaMiddleware = createSagaMiddleware()

const appReducer = combineReducers({
    WeatherReducer
});

let store = createStore(appReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(MainSaga);

export default store;