import * as action_type from './../actions/action_types';
const initialState = {
    todoList: [],
    isFetching: false
}
const todoLitsReducer = (state = initialState, action) => {
    switch (action.type) {
        case action_type.ADD_TODO_REQUEST:
            return Object.assign({}, state, {
                isFetching: true
            });
        case action_type.ADD_TODO_SUCCESS:
            console.log("action.data.data", action.data.data)
            return Object.assign({}, state, {
                todoList: [...state.todoList, action.data.data].reverse(),
                isFetching: false
            });
        case action_type.GET_TODO_SUCCESS:
        case action_type.DELETE_TODO_SUCCESS:
        case action_type.UPDATE_TODO_STATUS_SUCCESS:
            console.log("action.data.data", action.data.data)
            return Object.assign({}, state, {
                todoList: action.data.data.reverse(),
                isFetching: false
            });
        default:
            return state;
    }
}

export default todoLitsReducer;