import axios from 'axios';
export const FETCH_POSTS = 'http://localhost:3000/posts';

export function fetchPosts() {
    const request = axios.get(FETCH_POSTS);
    return (dispatch) => {
        request.then((data) => {
            dispatch({type: 'FETCH_POSTS', payload: data});
        });
    };
}


// export function selectPost() {
//     const request = axios.post(FETCH_POSTS);
//     return {
//         type: 'SELECT',
//         payload: request
//     };
// }
