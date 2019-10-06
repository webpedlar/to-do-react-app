import * as apiconfig from './apiConfig';

const APP_ID='834fd1584cb9e676a1ff0183fbd4784f';
const API = {
    getWheatherData: (address) => {
        return apiconfig.apiRequest("get", `/forecast?appid=${APP_ID}&q=${address}`)
    }
}

export default API;
