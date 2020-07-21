import {createStore, applyMiddleware, combineReducers, compose} from 'redux'; 
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';
import user from './user';
import enclosures from './enclosures';


const sagaMiddleware = createSagaMiddleware();
const configureStore = createStore(
    combineReducers({
        user: user,
        enclosures: enclosures
    }),
    {},
    compose(
        applyMiddleware(sagaMiddleware),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    )
);
sagaMiddleware.run(rootSaga);

export default configureStore;
