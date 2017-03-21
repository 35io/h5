import * as types from './actionTypes';

export function addPage(page) {
    return {
        type: types.PAGE_ADD,
        page
    };
}

export function delPage(key) {
    return {
        type: types.PAGE_DELETE,
        key
    };
}
