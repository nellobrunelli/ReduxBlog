import * as type from '../constant/ActionTypes';
const STATE_DEFAULT = {
    all: [],
    selected: [] // @TODO: make it dynamic
};

export default function(state = STATE_DEFAULT, action) {
    switch (action.type) {
        case type.FETCH_POSTS:
            return {
                ...state,
                all: action.payload.data,
                selected: [1, 3]
            };
        case type.SELECT_POST:
            // @TODO: make it dynamic
            return {
                ...state,
                selected: []
            };
        default:
            return state;
    }
}
