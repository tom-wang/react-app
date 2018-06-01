import { combineReducers } from 'redux';
import { handleAction } from 'redux-actions';
import { TEST_ACTION } from '../actions';

/*
const testData = (state = {
    num: 0
}, action) => {
    if(TEST_ACTION == action.type) {
        return {...state, ...action.payload}
    } else {
        return state;
    }
}
*/

// handleAction(type, reducer, defaultState)
const testData = handleAction(
    TEST_ACTION,
    (state, action) => ({
        ...state, ...action.payload
    }),
    { num: 0 }
)

const rootReducer = combineReducers({
    testData,
})

export default rootReducer;