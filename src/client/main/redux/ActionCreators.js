import * as Actions from './ActionTypes';

export function authUser(email, password){
    return {
        type: Actions.AuthUser,
        email: email,
        password: password
    }
}

export function authStart(){
    return {
        type: Actions.AuthStart
    }
}

export function authSuccess(email){
    return {
        type: Actions.AuthSuccess,
        email: email
    }
}

export function authFailed(err){
    return {
        type: Actions.AuthFailed,
        errmess: err
    }
}