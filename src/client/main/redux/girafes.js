import GIRAFES from '../shared/girafes';
import * as Actions from './ActionTypes';

export default function girafes(state = GIRAFES, action){
    switch(action.type){
        case Actions.AddGirafeSuccess:
           /* assume that max check is validated by server */ 
           if(state.allIds.length <= 5){
                const id = (state.allIds.length + 1).toString();
                console.log(action);
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
            let newGirafes = [newIds].map((id) => state.byIds[id]);
            console.log(newGirafes);
            return state;
        default:
            return state;
    }
}