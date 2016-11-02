import { createSelector } from 'reselect';
import _ from 'lodash';

const postsSelector = state => state.all;
const selectedPostsSelector = state => state.selected;

const getPosts = (posts, selectedPosts) => {
    return _.filter(posts, post => {
        return selectedPosts.find(
            id => {
                return id === post.id;
            });
    });
};

export default createSelector(
    postsSelector,
    selectedPostsSelector,
    getPosts
);
