import { put, takeEvery, all } from 'redux-saga/effects';
import * as Actions from './ActionTypes';
import * as ActionCreators from './ActionCreators';

function* watchAuthSaga() {
    yield takeEvery(Actions.AuthUser, authUser);
}

function* watchEnclosuresSaga() {
    yield takeEvery(Actions.AddEnclosure, addEnclosure);
}

const delay = (ms) => new Promise(res => setInterval(res, ms));

function* authUser(action) {
    yield put(ActionCreators.authStart());
    //yield delay(1000);
    yield put(ActionCreators.authSuccess(action.email));
}

/* not async yet */
function* addEnclosure(action) {
    yield put(ActionCreators.AddEnclosureSuccess({}));
}

export default function* rootSaga() {
    yield all([
        watchAuthSaga(),
        watchEnclosuresSaga()
    ]);
}



