import * as action from './action_types';

export function addBucket(bucketData) {
    return {
        type: action.ADD_BUCKET_REQUEST,
        bucketData:bucketData
    }
};

export function getBuckets() {
    return {
        type: action.GET_BUCKET_REQUEST,
    }
};

export function deleteBucket(data) {
    return {
        type: action.DELETE_BUCKET_REQUEST,
        data
    }
};