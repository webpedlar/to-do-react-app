import * as action_type from './../actions/action_types';
import { connect } from 'react-redux';
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import API from './../../lib/api';


function* getWheatherData(action) {
    try {
        yield put({ type: action_type.GET_WEATHER_DATA_REQUEST})

        const data = yield API.getWheatherData(action.address);
        yield put({ type: action_type.GET_WEATHER_DATA_SUCCESS, data })
    }
    catch (e) {
        console.log(e);
        yield put({ type: action_type.GET_WEATHER_DATA_FAIL, e })

    }
}

export const WeatherDataSaga = [
    takeEvery(action_type.GET_WEATHER_DATA_REQUEST, getWheatherData)
]