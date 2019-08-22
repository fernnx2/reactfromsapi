import {combineReducers} from 'redux'
import {getUsers} from './users'
import {getRol} from './rol'
import {reducer as formReducer} from 'redux-form'
const rootReducer = combineReducers({
    form:formReducer,
    users: getUsers,
    rol: getRol,
   
});

export default rootReducer;