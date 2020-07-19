import React from 'react';
import Auth from './Auth/AuthComponent.js';
import Girafes from './Girafes/GirafesComponent.js';

export default function Main(){
    return (
        <div>
            <Auth/>
            {/* Add Switch router component*/}
            <Girafes/>
        </div>
    )
}