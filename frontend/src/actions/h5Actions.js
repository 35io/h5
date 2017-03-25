import * as types from './actionTypes';

export function addPage(page) {
    return {
        type: types.PAGE_ADD,
        page,
    };
}

export function delPage(key) {
    return {
        type: types.PAGE_DELETE,
        key,
    };
}

export function addWord(word) {
    return {
        type: types.WORD_ADD,
        word,
    };
}

export function delWord(key) {
    return {
        type: types.WORD_DELETE,
        key,
    };
}

export function changeFocus(focus) {
    return {
        type: types.FOCUS_CHANGED,
        focus,
    };
}

export function rotate(degree) {
    return {
        type: types.STYLE_ROTATE,
        degree,
    };
}
