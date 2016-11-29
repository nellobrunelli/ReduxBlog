import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import Posts from './posts';

const rootReducer = combineReducers({
    posts: Posts,
    routing: routing
});

export default rootReducer;
