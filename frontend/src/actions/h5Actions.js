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

export function addElements(...elements) {
    return {
        type: types.ELEMENT_ADD,
        elements,
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

export function changeStyle(style) {
    return {
        type: types.STYLE_CHANGE,
        style,
    };
}

export function changeWordEditable(id) {
    return {
        type: types.WORD_EDITABLE_CHANGE,
        id,
    };
}
