import _ from 'lodash';

import * as type from '../constant/ActionTypes';
const STATE_DEFAULT = {
    all: {},
    selected: []
};

export default function(state = STATE_DEFAULT, action) {
    switch (action.type) {
        case type.FETCH_POSTS:
            return {
                ...state,
                all: _.mapKeys(action.payload.data, 'id')
            };
        case type.SET_POST_SELECTION:
            let toggle = state.selected.find(el => el === action.payload.id);
            return {
                ...state,
                selected: toggle ? state.selected.filter(el => el !== action.payload.id) : state.selected.concat(action.payload.id)
            };
        default:
            return state;
    }
}
