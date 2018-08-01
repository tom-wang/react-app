import { delay } from 'redux-saga'
import { put, takeEvery, takeLatest } from 'redux-saga/effects'
let i= 0;
function* test() {
    i++;
    yield delay(1000);
    console.log(arguments, i);
    yield put({type: 'TEST_INNER_ACTION'})
}

function* testInner() {
    yield delay(1000);
    console.log(arguments, 'inner');
}

export default function* root() {
    yield takeLatest('TEST_ACTION', test)
    yield takeLatest('TEST_INNER_ACTION', testInner)
}