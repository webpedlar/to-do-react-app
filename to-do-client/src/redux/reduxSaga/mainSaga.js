import { connect } from 'react-redux';
import { call, put, takeEvery, takeLatest, all } from 'redux-saga/effects';
import { WeatherDataSaga } from './WeatherDataSaga';

export default function* MainSaga() {
    try {
        yield all([
            ...WeatherDataSaga])
    }
    catch (error) {
    }
}