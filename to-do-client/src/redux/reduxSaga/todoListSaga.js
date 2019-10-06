import * as action_type from './../actions/action_types';
import { put, takeEvery } from 'redux-saga/effects';
import API from './../../lib/api';


function* addToDo(action) {
    try {
        const data = yield API.addToDo(action.data);
        yield put({ type: action_type.ADD_TODO_SUCCESS, data })
    }
    catch (e) {
        console.log(e);
        yield put({ type: action_type.ADD_TODO_FAIL, e })

    }
}
function* getToDoList(action) {
    try {
        const data = yield API.getToDoList(action.id);
        yield put({ type: action_type.GET_TODO_SUCCESS, data })
    }
    catch (e) {
        console.log(e);
        yield put({ type: action_type.GET_TODO_FAIL, e })

    }
}
function* deleteToDo(action) {
    try {
        const data = yield API.deleteToDo(action.data);
        yield put({ type: action_type.DELETE_TODO_SUCCESS, data })
    }
    catch (e) {
        console.log(e);
        yield put({ type: action_type.DELETE_TODO_FAIL, e })

    }
}

function* updateToDo(action) {
    try {
        const data = yield API.updateToDo(action.data);
        yield put({ type: action_type.UPDATE_TODO_SUCCESS, data })
    }
    catch (e) {
        console.log(e);
        yield put({ type: action_type.UPDATE_TODO_FAIL, e })

    }
}
function* updateStatus(action) {
    try {
        const data = yield API.updateStatus(action.data);
        yield put({ type: action_type.UPDATE_TODO_STATUS_SUCCESS, data })
    }
    catch (e) {
        console.log(e);
        yield put({ type: action_type.UPDATE_TODO_FAIL, e })

    }
}
export const toDoListSaga = [
    takeEvery(action_type.ADD_TODO_REQUEST, addToDo),
    takeEvery(action_type.GET_TODO_REQUEST, getToDoList),
    takeEvery(action_type.DELETE_TODO_REQUEST, deleteToDo),
    takeEvery(action_type.UPDATE_TODO_REQUEST, updateToDo),
    takeEvery(action_type.UPDATE_TODO_STATUS_REQUEST, updateStatus)
]