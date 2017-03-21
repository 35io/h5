import * as types from './actionTypes';

export function addWord(word) {
    return {
        type: types.WORD_ADD,
        word
    };
}

export function delWord(key) {
    return {
        type: types.WORD_DELETE,
        key
    };
}
