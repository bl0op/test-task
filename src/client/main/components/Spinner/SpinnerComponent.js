import React from 'react';
import spinnerIcon from './spinner-icon.png';

export default function Spinner(props){
    return (
        <div className='spinner'>
            <img className='spinner__icon' src={spinnerIcon} alt='spinner'/>
            {props.children}
        </div>
    );
}