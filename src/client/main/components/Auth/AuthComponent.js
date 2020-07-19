import React from 'react';
import avatar from './avatar.png';

export default function Auth(){
    return (
        <div className="main__auth">
            <i className="far fa-bell main__auth-notify"></i>
            <img src={avatar} className="main__auth-avatar"/> 
            <span className="main__auth-username">hello@giraffe.com</span>
        </div>
    );
}