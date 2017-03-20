import { combineReducers } from 'redux'
import productReducer from './productReducer'
import backlogReducer from './backlogReducer'
import sprintReducer from './sprintReducer'
import sprintBacklogReducer from './sprintBacklogReducer'
import userReducer from './userReducer'
import userInfoReducer from './userInfoReducer'
import enterpriseReducer from './enterpriseReducer'
import kanbanReducer from './kanbanReducer'

var reducers = combineReducers({
    productState: productReducer,
    backlogState: backlogReducer,
    sprintBacklogState: sprintBacklogReducer,
    sprintState: sprintReducer,
    userState: userReducer,
    userInfoState: userInfoReducer,
    enterpriseState: enterpriseReducer,
    kanbanState: kanbanReducer,
});

export default reducers;