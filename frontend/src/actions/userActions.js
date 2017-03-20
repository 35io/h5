import * as types from './actionTypes';

export function changeUser(user) {
    return {
        type: types.USER_CHANGE,
        user: user
    };
}

export function listUsers(users, totalPages) {
    return {
        type: types.USER_LIST_SUCCESS,
        users: users,
        totalPages: totalPages
    };
}