import axios from 'axios';
export const FETCH_POSTS = 'http://localhost:3000/posts';

export function fetchPosts() {
    const request = axios.get(FETCH_POSTS);
    return {
        type: 'FETCH_POSTS',
        payload: request
    };
}
