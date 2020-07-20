import { put, takeEvery, all } from 'redux-saga/effects';
import * as Actions from './ActionTypes';
import { authStart, authSuccess } from './ActionCreators';

function* watchAuthSaga() {
    yield takeEvery(Actions.AuthUser, authUser);
}

const delay = (ms) => new Promise(res => setInterval(res, ms));

function* authUser(action) {
    yield put(authStart());
    //yield delay(1000);
    yield put(authSuccess(action.email));
}

export default function* rootSaga() {
    yield all([
        watchAuthSaga()
    ]);
}



