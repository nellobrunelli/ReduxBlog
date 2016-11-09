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

/*
    Example of update Store

    UPDATE_POST:
        return { ...state, [action.payload.id]: action.payload}
        let's consider the use of lodash: https://lodash.com/docs/4.16.6#set

        Example:
        store object = { 'a': [{ 'b': { 'c': 3 } }] };
        _.set(state, 'a[0].b.c', 4);

    DELETE_POST
        return _.omit(state, action.payload);
 */
