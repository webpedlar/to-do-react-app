import * as action_type from './../actions/action_types';
const initialState = {
 bucketList:[],
 isFetching:false
}
const bucketReducer = (state = initialState, action) => {
    switch (action.type) {
        case action_type.ADD_BUCKET_REQUEST:
                return Object.assign({}, state, {
                    isFetching: true
                });
        case action_type.ADD_BUCKET_SUCCESS:
            return Object.assign({}, state, {
                bucketList: [...state.bucketList,action.data.data],
                isFetching:false
            });
            case action_type.GET_BUCKET_SUCCESS:
            case action_type.DELETE_BUCKET_SUCCESS:
                    return Object.assign({}, state, {
                        bucketList: action.data.data,
                        isFetching:false
                    });
        default:
            return state;
    }
}

export default bucketReducer;