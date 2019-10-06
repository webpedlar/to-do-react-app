import axios from 'axios';

const domain = "http://api.openweathermap.org"
const baseURL = domain + '/data/2.5'

export const apiRequest = async (method, featureURL, data = {}) => {
    const headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    }
    return new Promise((resolve, reject) => {
        if (method === "get") {
            axios({
                method: 'get',
                url: baseURL + featureURL,
                headers: headers
            }).then(result => {
                resolve(result.data);
            }).catch(error => {
                if (error.message === 'Network Error') {
                    alert('No internet connection')
                }
                reject(error);
            })
        } else {
            axios({
                method: method,
                url: baseURL + featureURL,
                data: data,
                headers: headers
            }).then(result => {
                resolve(result.data);
            }).catch(error => {
                if (error.message === 'Network Error') {
                    alert('No internet connection')

                }
                reject(error);
            })

        }
    })

}

