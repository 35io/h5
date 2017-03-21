import * as types from '../actions/actionTypes';
import Immutable from 'immutable';

const initialState = {
    words: [],
    images: [],
};

export default function (state = initialState, action) {
    if (action.type === types.WORD_ADD) {
        let newState = Immutable.fromJS(state);
        newState = newState.merge(action);
        return newState.toJS();
    }

    if (action.type === types.WORD_DELETE) {
        let newState = Immutable.fromJS(state);
        let words = newState.get('words').filter(word => {
            return word.key !== action.key;
        });
        newState.set('words', words);
        return newState.toJS();
    }

    return state;
};
