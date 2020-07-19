import React, { Suspense, useState } from 'react';
import Main from './MainComponent.js';
import SideMenu from './SideMenu/SideMenuComponent.js';
import { hot } from 'react-hot-loader/root';

function App() {
    return (
        <>
            <SideMenu/>
            <Main/>
        </>
    )
}

export default hot(App)