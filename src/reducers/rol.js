import {GET_ROL,CHANGE_ROL} from '../actions/rol'
const initialState ={
    listRol:[],
    selectRol:""
}

export function getRol(state=initialState,action){
    switch(action.type){
        case GET_ROL:
            return Object.assign({},state,{listRol:action.payload}); 
        case CHANGE_ROL:
            return Object.assign({},state,{selectRol:action.payload}); 
        default :
        return state;
    }
}

