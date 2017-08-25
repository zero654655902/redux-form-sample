import {reducer as formReducer} from 'redux-form'
import {combineReducers} from 'redux'
//import {printValuesReducer} from './form'
const reducers=combineReducers({
    //reducer1:printValuesReducer,
    form:formReducer
});
export default reducers