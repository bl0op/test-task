import React from 'react';
import Auth from './Auth/AuthComponent.js';
import Girafes from './Girafes/GirafesComponent.js';
import './Main.css';

export default function Main(){
    return (
        <main className='main'>
            <Auth/>
            {/* Add Switch router component*/}
            <Girafes/>
        </main>
    )
}