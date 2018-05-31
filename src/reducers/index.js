import { combineReducers } from 'redux';
import { TEST_ACTION } from '../actions';

const testData = (state = {
    num: 0
}, action) => {
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