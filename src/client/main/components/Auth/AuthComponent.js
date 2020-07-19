import React from 'react';
import avatar from './avatar.png';

export default function Auth(){
    return (
        <div className="auth">
            <i class="far fa-bell"></i>
            <img src={avatar} className="auth__avatar"/> 
            <span className="auth__username">hello@giraffe.com</span>
        </div>
    );
}