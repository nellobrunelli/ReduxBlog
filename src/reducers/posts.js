import * as type from '../constant/ActionTypes';
const STATE_DEFAULT = {
    all: [],
    selectedPosts: [],
    post: null
};

export default function(state = STATE_DEFAULT, action) {
    switch (action.type) {
        case type.FETCH_POSTS:
            return {...state, all: action.payload.data};
        case type.SELECT_POST:
            // @TODO: make it dynamic
            return {...state, selectedPosts: [1]};
        default:
            return state;
    }
}
