/**
 * Created by shaotingzhou on 2017/2/28.
 */
import  { combineReducers } from 'redux';
import Tab from './tabbarReducer';
import OneAction from './oneReducer'
export  default  rootReducer = combineReducers({
    Tab,
    OneAction
})