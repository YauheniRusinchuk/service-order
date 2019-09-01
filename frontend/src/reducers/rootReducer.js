import {combineReducers} from 'redux';
import orders from './order'
import detail from './detail'
import auth from "./auth";
import profile from './profile'

export default combineReducers({
    orders,
    detail,
    auth,
    profile,
})
