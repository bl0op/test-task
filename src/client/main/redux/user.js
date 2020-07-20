import * as Actions from './ActionTypes';

export default function user(state = {
    email: '',
    error: '',
    isLoading: true
} , action) {
    switch(action.type){
        case Actions.AuthStart:
            return { ...state, isLoading: true, error: ''}
        case Actions.AuthSuccess:
            return { ...state, isLoading: false, email : action.email, error : ''};
        case Actions.AuthFailed:
            return { ...state, isLoading: false, error : action.errmess};
        default:
            return state;
    }
}