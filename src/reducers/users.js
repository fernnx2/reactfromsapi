import {GET_USERS,POST_USERS} from '../actions/Users'

const initialState ={
    list: [],
    post:[]
   
}

export function getUsers(state=initialState,action){
    switch(action.type){
        case GET_USERS :
            return Object.assign({},state,{list:action.payload});
            
        case POST_USERS:
            return Object.assign({},state,{post:[action.payload]});
                  
        default:
            return state;
    }
   
}