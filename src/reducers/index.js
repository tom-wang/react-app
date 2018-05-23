import { combineReducers } from 'redux';
import { TEST_ACTION } from '../actions';

const testData = (state = {}, action) => {
    if(TEST_ACTION == action.type) {
        return {...state, ...action.data}
    } else {
        return state;
    }
}
const rootReducer = combineReducers({
    testData,
})

export default rootReducer;