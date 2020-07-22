import {createStore, applyMiddleware, combineReducers, compose} from 'redux'; 
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';
import user from './user';
import enclosures from './enclosures';
import girafes from './girafes';
import actions from './actions';


const sagaMiddleware = createSagaMiddleware();
const configureStore = createStore(
    combineReducers({
        user: user,
        enclosures: enclosures,
        girafes: girafes,
        actions: actions
    }),
    {},
    compose(
        applyMiddleware(sagaMiddleware),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    )
);
sagaMiddleware.run(rootSaga);

export default configureStore;
