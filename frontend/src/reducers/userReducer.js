import * as types from '../actions/actionTypes';
const initialState = {
    users:[],
    user: {},
    totalPages: 1
};

var userReducer = function(state = initialState, action) {
    if(action.type === types.USER_LIST_SUCCESS){
        return {...state, users: action.users, totalPages: action.totalPages};
    }
    if(action.type === types.USER_CHANGE){
        return {...state, user: action.user};
    }
    return state;
};

export {userReducer as default}
