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

export function addEnclosureSuccess(enclosure) {
    return {
        type: Actions.AddEnclosureSuccess
    }
}

/* girafes */
export function addGirafe(girafe){
    return {
        type: Actions.AddGirafe,
        girafe: girafe
    }
}

export function addGirafeSuccess(girafe){
    return {
        type: Actions.AddGirafeSuccess,
        girafe: girafe
    }
}

export function deleteGirafe(id){
    return {
        type: Actions.DeleteGirafe,
        id: id
    }
}

/* In fact, there should be recieved girefes list from post request as a parameter*/
export function deleteGirafeSuccess(id){
    return {
        type: Actions.DeleteGirafeSuccess,
        id: id
    }
}

/* actions */
export function addAction(action, id){
    return {
        type: Actions.AddAction,
        action: action,
        id: id
    }
}
export function updateAction(id, status){
    return {
        type: Actions.UpdateAction,
        id: id,
        status: status
    }
}