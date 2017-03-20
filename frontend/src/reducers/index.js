import { combineReducers } from 'redux';
import userReducer from './userReducer';

const reducers = combineReducers({
    userState: userReducer,
});

export default reducers;
