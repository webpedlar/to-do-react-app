import { connect } from 'react-redux';
import { call, put, takeEvery, takeLatest, all } from 'redux-saga/effects';
import { bucketSaga } from './bucketSaga';
import { toDoListSaga } from './todoListSaga';

export default function* MainSaga() {
    try {
        yield all([
            ...bucketSaga,...toDoListSaga])
    }
    catch (error) {
    }
}