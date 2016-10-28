import axios from 'axios';
import * as type from '../constant/ActionTypes';

export const FETCH_POSTS = 'http://localhost:3000/posts';

export function fetchPosts() {
    const request = axios.get(FETCH_POSTS);
    return (dispatch) => {
        request.then((data) => {
            dispatch({
                type: 'FETCH_POSTS',
                payload: data
            });
        });
    };
}

export function selectPost(post) {
    return {
        type: type.SELECT_POST,
        payload: post
    };
}
