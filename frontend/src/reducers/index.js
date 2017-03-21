import { combineReducers } from 'redux';
import h5Reducer from './h5Reducer';

const reducers = combineReducers({
    h5State: h5Reducer,
});

export default reducers;
