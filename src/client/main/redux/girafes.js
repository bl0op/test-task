import GIRAFES from '../shared/girafes';
import * as Actions from './ActionTypes';

import {counter, incrementCounter} from '../shared/counter';

export default function girafes(state = GIRAFES, action){
    switch(action.type){
        case Actions.AddGirafeSuccess:
            /*assume that we have already got girafes list from server */
           if(state.allIds.length <= 5){
                incrementCounter(); 
                const id = (counter+1).toString();
                return {...state, allIds: [...state.allIds, id], 
                     byIds: {...state.byIds,
                         [id]:  action.girafe
                     }
                };
           }
           else {
               return state;
           }
        case Actions.DeleteGirafeSuccess:
            /*assume that we have already got girafes list from server */
            let newIds = [...state.allIds].filter((id) => id !== action.id);
            let newGirafes = {};
            newIds.forEach((id) => {
                newGirafes[id] =
                    state.byIds[id]
            })
            return {...state, allIds: newIds, 
                 byIds: newGirafes
            };
        default:
            return state;
    }
}