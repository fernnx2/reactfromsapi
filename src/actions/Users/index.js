import axios from 'axios'
import {URL} from '../env'


export const GET_USERS = 'GET_USERS'
export const POST_USERS = 'POST_USERS'


export function getUsers(){
    return (dispatch,getState)=>{
        axios.get(URL + "user").then(response=>{
            dispatch({type:GET_USERS,payload:response.data})
        })
    }
}

export function postUser(user){
    
    return (dispatch,getState)=>{
        axios.post(URL+ "user",user).then(response=>{
            dispatch({type:POST_USERS,payload:response.data})
        })
    }
}

