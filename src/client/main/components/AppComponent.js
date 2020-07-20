import React, { Suspense, useEffect } from 'react';
import { hot } from 'react-hot-loader/root';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import * as Actions from '../redux/ActionTypes';
import { email, password } from '../shared/user';

import Spinner from './Spinner/SpinnerComponent';
import StoreWrapper from './StoreWrapperComponent';


function App() {

    //emulates auth process
    useEffect(() => {
        store.dispatch({type: Actions.AuthUser, email: email, password: password });
    }, []);

    return (
        <Suspense fallback={
            <Spinner>
                Загрузка приложения...
            </Spinner>
        }>
            <Provider store={store}>
                <StoreWrapper/>
            </Provider>
        </Suspense>
    )
}

export default hot(App)