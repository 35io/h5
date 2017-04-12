import Immutable from 'immutable';
import * as types from '../actions/actionTypes';

const initialState = {
    pages: [],
    currentPage: 0,
    focus: {},
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
        currentPage.elements.push(action.word);
        return imState.toJS();
    }

    if (action.type === types.WORD_DELETE) {
        return state;
    }

    if (action.type === types.FOCUS_CHANGED) {
        return imState.merge({ focus: action.focus }).toJS();
    }

    if (action.type === types.STYLE_CHANGE) {
        const currentPage = imState.get('pages').get(imState.get('currentPage'));
        currentPage.elements.forEach(element => {
            if (element.id === imState.get('focus').get('id')) {
                const style = Immutable.fromJS(element.style).merge(action.style);
                element.style = style.toJS();
            }
        });
        return imState.toJS();
    }

    if (action.type === types.WORD_EDITABLE_CHANGE) {
        const currentPage = imState.get('pages').get(imState.get('currentPage'));
        currentPage.elements.forEach(element => {
            if (element.id === imState.get('focus').get('id')) {
                element.contenteditable = !element.contenteditable;
            }
        });
        return imState.toJS();
    }

    return state;
}
