import axios from 'axios'
import {URL} from './env'
export const GET_ROL = 'GET_ROL'
export const CHANGE_ROL = 'CHANGE_ROL'
export function getRol(){
    return (dispatch,getState)=>{
        axios.get(URL + "rol").then(response=>{
            dispatch({type:GET_ROL,payload:response.data});
        })
    }
}

export function changeRol(rol){
    return (dispatch,getState)=>{
        dispatch({type:CHANGE_ROL,payload:rol})
    }
}
