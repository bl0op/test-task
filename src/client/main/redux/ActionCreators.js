import * as Actions from './ActionTypes';

/* auth */
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

/* enclosures */
export function addEnclosure(){
    return {
        type: Actions.AddEnclosure
    }
}

export function AddEnclosureSuccess(enclosure) {
    return {
        type: Actions.AddEnclosureSuccess
    }
}

/* girafes */
export function addGirafe(girafe, enlosureId){
    return {
        type: Actions.AddGirafe,
        girafe: girafe
    }
}