import * as apiconfig from './apiConfig';

const API = {
    addToDo: (todo) => {
        return apiconfig.apiRequest("post", `/addNote`,todo)
    },
    getToDoList: (data) => {
        return apiconfig.apiRequest("get", `/listNote/${data}`)
    },
    deleteToDo: (data) => {
        return apiconfig.apiRequest("delete", `/deleteNote`,data)
    },
    updateToDo: (data) => {
        return apiconfig.apiRequest("post", `/updateNote`,data)
    },
    updateStatus: (data) => {
        return apiconfig.apiRequest("post", `/updateStatus`,data)
    },
    addBucket: (data) => {
        return apiconfig.apiRequest("post", `/addBucket`,data)
    },
    getBuckets: () => {
        return apiconfig.apiRequest("get", `/listBucket`)
    },
    deleteBucket: (data) => {
        return apiconfig.apiRequest("delete", `/deleteBucket`,data)
    }
}

export default API;
