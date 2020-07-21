import { put, takeEvery, all } from 'redux-saga/effects';
import * as Actions from './ActionTypes';
import * as ActionCreators from './ActionCreators';

const delay = (ms) => new Promise(res => setInterval(res, ms));

function* watchAuthSaga() {
    yield takeEvery(Actions.AuthUser, authUser);
}

function* watchEnclosuresSaga() {
    yield takeEvery(Actions.AddEnclosure, addEnclosure);
}

function* watchGirafesSaga() {
    yield takeEvery(Actions.AddGirafe, addGirafe);
    yield takeEvery(Actions.DeleteGirafe, deleteGirafe);
}


/* not async yet */
function* authUser(action) {
    yield put(ActionCreators.authStart());
    //yield delay(1000);
    yield put(ActionCreators.authSuccess(action.email));
}

function* addEnclosure(action) {
    yield put(ActionCreators.addEnclosureSuccess({}));
}

function* addGirafe(action) {
    yield delay(1000);
    console.log(action);
    yield put(ActionCreators.addGirafeSuccess(action.girafe));
}

function* deleteGirafe(action) {
    yield delay(1000);
    console.log(action);
    yield put(ActionCreators.deleteGirafeSuccess(action.id));
}

export default function* rootSaga() {
    yield all([
        watchAuthSaga(),
        watchEnclosuresSaga(),
        watchGirafesSaga()
    ]);
}



