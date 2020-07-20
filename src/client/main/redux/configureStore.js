import {createStore, applyMiddleware, combineReducers} from 'redux'; 
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';
import user from './user';
import ENCLOSURES from './enclosures';


const sagaMiddleware = createSagaMiddleware();
const configureStore = createStore(
    combineReducers({
        user: user,
    }), applyMiddleware(sagaMiddleware)
);
sagaMiddleware.run(rootSaga);

export default configureStore;
