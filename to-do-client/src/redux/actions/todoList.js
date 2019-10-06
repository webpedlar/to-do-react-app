import * as action from './action_types';

export function addToDo(data) {
    return {
        type: action.ADD_TODO_REQUEST,
        data
    }
};
export function getToDoList(id) {
    return {
        type: action.GET_TODO_REQUEST,
        id
    }
};

export function deleteToDo(data) {
    return {
        type: action.DELETE_TODO_REQUEST,
        data
    }
};
export function updateToDo(data) {
    return {
        type: action.UPDATE_TODO_REQUEST,
        data
    }
};

export function updateStatus(data) {
    return {
        type: action.UPDATE_TODO_STATUS_REQUEST,
        data
    }
};