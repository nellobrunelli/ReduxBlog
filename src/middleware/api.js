import axios from 'axios';

const callApi = (action) => {
    switch (action.rest) {
        case 'get':
            return callGet(action);
        case 'post':
            return callPost(action);
        case 'put':
            return callPut(action);
        case 'delete':
            return callDelete(action);
        default:
            return Promise.reject(action);
    }
};

const callGet = (data) => {
    return axios.get(data.url);
};

const callPost = (data) => {
    return axios.post(data.url, data.param);
};

const callPut = (data) => {
    return axios.put(data.url, data.param);
};

const callDelete = (data) => {
    return axios.delete(data.url);
};

// QUESTA NELLE CONSTANT
// Action key that carries API call info interpreted by this Redux middleware.
export const CALL_API = Symbol('Call API');

// A Redux middleware that interprets actions with CALL_API info specified.
// Performs the call and promises when such actions are dispatched.
export default store => next => action => {
    const callAPI = action[CALL_API];
    if (typeof callAPI === 'undefined') {
        return next(action);
    }

    // qui la call Api mi torna sempre una promise da Redux.
    // then faccio next

    return callApi(endpoint, schema).then(response => next(actionWith({response, type: successType})), error => next(actionWith({
        type: failureType,
        error: error.message || 'Something bad happened'
    })))
};
