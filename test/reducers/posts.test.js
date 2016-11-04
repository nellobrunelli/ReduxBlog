/* global describe it */

import * as types from '../../src/constant/ActionTypes';
import expect from 'expect';
import posts from '../../src/reducers/posts';
import state from './state/posts';

describe('Posts Reducers', () => {
    it('fetching all posts', () => {
        expect(
            posts(null, {
                type: types.FETCH_POSTS,
                payload: {
                    data: [
                        {
                            id: 1,
                            title: 'whos that writer',
                            desc: 'Ormai l\'inverno del nostro scontento s\'è fatto estate sfolgorante ai raggi di questo sole di York.'
                        }
                    ]
                }
            })
        ).toEqual({
            all: [
                {
                    id: 1,
                    title: 'whos that writer',
                    desc: 'Ormai l\'inverno del nostro scontento s\'è fatto estate sfolgorante ai raggi di questo sole di York.'
                }
            ]
        });
    });

    it('il secondo test', () => {
        expect(
            posts(state, {
                type: types.SET_POST_SELECTION,
                payload: {id: 1}
            })
        ).toEqual({
            all: [
                {
                    id: 1,
                    title: 'whos that writer',
                    desc: 'Ormai l\'inverno del nostro scontento s\'è fatto estate sfolgorante ai raggi di questo sole di York.'
                }
            ],
            selected: [1]
        });
    });
});
