import ENCLOSURES from '../shared/enclosures';
import * as Actions from './ActionTypes';

export default function enclosures(state = ENCLOSURES, action){
    switch(action.type){
        case Actions.AddEnclosureSuccess:
            const id = state.length + 1;
            if(id < 5) {
                return [...state, {id: id, girafes: [], max: 5, actions: []}];
            }
            else {
                return state;
            }
        default:
            return state;
    }
}