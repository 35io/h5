import Immutable from 'immutable';
import * as types from '../actions/actionTypes';

const initialState = {
    pages: [],
    currentPage: 0,
};

export default function (state = initialState, action) {
    const imState = Immutable.fromJS(state);
    if (action.type === types.PAGE_ADD) {
        return imState.merge({ pages: [action.page], currentPage: imState.get('pages').size }).toJS();
    }

    if (action.type === types.PAGE_DELETE) {
        return state;
    }

    if (action.type === types.WORD_ADD) {
        const currentPage = imState.get('pages').get(imState.get('currentPage'));
        currentPage.words.push(action.word);
        return imState.toJS();
    }

    if (action.type === types.WORD_DELETE) {
        return state;
    }

    return state;
}
