import * as action_type from './../actions/action_types';
const initialState = {
 weatherData:[],
 isFetching:false
}
const WeatherReducer = (state = initialState, action) => {
    switch (action.type) {
        case action_type.GET_WEATHER_DATA_REQUEST:
                return Object.assign({}, state, {
                    isFetching: true
                });
        case action_type.GET_WEATHER_DATA_SUCCESS:
            return Object.assign({}, state, {
                weatherData: [...state.weatherData,action.data],
                isFetching:false
            });
        default:
            return state;
    }
}

export default WeatherReducer;