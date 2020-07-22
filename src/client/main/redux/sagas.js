import { put, takeEvery, all } from 'redux-saga/effects';
import * as Actions from './ActionTypes';
import * as ActionCreators from './ActionCreators';
import { counter, incrementCounter } from '../shared/counter';

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
    yield delay(1000);
    yield put(ActionCreators.authSuccess(action.email));
}

function* addEnclosure(action) {
    yield put(ActionCreators.addEnclosureSuccess({}));
}

function* addGirafe(action) {
    /* should be handled on server logic */
    let today = new Date();
    let month = [
        "янв",
        "фев",
        "мар",
        "апр",
        "май",
        "июн",
        "июл",
        "авг",
        "сен",
        "окт",
        "ноя",
        "дек"
    ];

    let date = today.getDate()+' '+month[(today.getMonth())]+' '+today.getFullYear();
    let actionObj = {
         enclosureId: action.girafe.enclosureId,
         girafeName: action.girafe.name ,
         type: 'Новый жираф',
         status: 0,
         date: date
    };
    incrementCounter();
    let id = counter;
    yield put(ActionCreators.addAction(actionObj, id));
    yield delay(1000);
    yield put(ActionCreators.addGirafeSuccess(action.girafe));
    yield put(ActionCreators.updateAction(id, 1));
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



