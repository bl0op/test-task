import ENCLOSURES from '../shared/enclosures';
import * as Actions from './ActionTypes';

export default function enclosures(state = ENCLOSURES, action){
    switch(action.type){
        case Actions.AddEnclosureSuccess:
            console.log('Hello');
            /* temp */
            const id = (state.allIds.length + 1).toString();
            if(id < 5) {
                return {...state, allIds: [...state.allIds, id], byIds: {...state.byIds, [id]: {max: 5}}};
            }
            else {
                return state;
            }
        default:
            return state;
    }
}