import React from 'react';
import { connect } from 'react-redux';

import avatar from './avatar.png';

const mapStateToProps = (state) => {
    return {
        email: state.user.email
    }
}

function Auth(props){
    return (
        <div className="main__auth">
            <i className="far fa-bell main__auth-notify"></i>
            <img src={avatar} className="main__auth-avatar"/> 
            <span className="main__auth-username">{ props.email }</span>
        </div>
    );
}

export default connect(mapStateToProps)(Auth);