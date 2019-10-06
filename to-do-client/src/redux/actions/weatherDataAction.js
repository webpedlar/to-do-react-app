import * as action from './action_types';

export function getWheatherData(address) {
    return {
        type: action.GET_WEATHER_DATA_REQUEST,
        address:address
    }
};