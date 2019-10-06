import * as action_type from './../actions/action_types';
import { connect } from 'react-redux';
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import API from './../../lib/api';


function* addBucket(action) {
    try {
        const data = yield API.addBucket(action.bucketData);
        yield put({ type: action_type.ADD_BUCKET_SUCCESS, data })
    }
    catch (e) {
        console.log(e);
        yield put({ type: action_type.ADD_BUCKET_FAIL, e })

    }
}
function* getBuckets(action) {
    try {
        const data = yield API.getBuckets();
        yield put({ type: action_type.GET_BUCKET_SUCCESS, data })
    }
    catch (e) {
        console.log(e);
        yield put({ type: action_type.GET_BUCKET_FAIL, e })

    }
}
function* deleteBucket(action) {
    try {
        const data = yield API.deleteBucket(action.data);
        yield put({ type: action_type.DELETE_BUCKET_SUCCESS, data })
    }
    catch (e) {
        console.log(e);
        yield put({ type: action_type.DELETE_BUCKET_FAIL, e })

    }
}

export const bucketSaga = [
    takeEvery(action_type.ADD_BUCKET_REQUEST, addBucket),
    takeEvery(action_type.GET_BUCKET_REQUEST, getBuckets),
    takeEvery(action_type.DELETE_BUCKET_REQUEST, deleteBucket)
]