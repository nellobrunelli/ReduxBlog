import * as type from '../constant/ActionTypes';
const STATE_DEFAULT = {all: [], post: null};

export default function(state = STATE_DEFAULT, action) {
    switch (action.type) {
        case type.FETCH_POSTS:
            return {...state, all: action.payload.data};
        default:
            return state;
    }
}
