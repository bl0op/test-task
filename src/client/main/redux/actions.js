import * as Actions from './ActionTypes';
import ACTIONS from '../shared/actions';

export default function actions(state = ACTIONS, action) {
    switch(action.type){
        case Actions.AddAction:
            let id = action.id;
            return ({...state, allIds: [...state.allIds, id], 
                 byIds: {...state.byIds,
                     [id]:  action.action
                 }
            });
        case Actions.UpdateAction:
            let updatedId = action.id;
            let status = action.status;
            let newActions = ({...state.byIds, [updatedId] : {...state.byIds[updatedId], status: status}});
            console.log('sss');
            console.log(newActions);
            return {...state, byIds: newActions};
        default:
            return state;
    }
}