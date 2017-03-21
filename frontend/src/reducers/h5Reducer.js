import * as types from '../actions/actionTypes';
import Immutable from 'immutable';

const initialState = {
    pages: [],
    currentPage: null,
};

export default function (state = initialState, action) {
    if (action.type === types.PAGE_ADD) {
        let newState = Immutable.fromJS(state);
        newState = newState.merge(action);
        return newState.toJS();
    }

    if (action.type === types.PAGE_DELETE) {
        let newState = Immutable.fromJS(state);
        let pages = newState.get('pages').filter(page => {
            return page.key !== action.key;
        });
        newState.set('pages', pages);
        return newState.toJS();
    }

    return state;
};
