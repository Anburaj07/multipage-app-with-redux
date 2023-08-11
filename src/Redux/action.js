import { ADD_TO_CART, AUTH_FAILURE, AUTH_REQUEST, AUTH_SUCCESS, FAILURE, GET_SUCCESS, POST_SUCCESS, REQUEST } from "./actionTypes"

export const authRequestAction=()=>{
    return {type:AUTH_REQUEST}
}
export const authFailureAction=(payload)=>{
    return {type:AUTH_FAILURE,payload}
}
export const authSuccessAction=(payload)=>{
    return {type:AUTH_SUCCESS,payload}
}

export const requestAction=()=>{
    return {type:REQUEST}
}
export const getDataSuccessAction=(payload)=>{
    return {type:GET_SUCCESS,payload}
}
export const failureAction=(payload)=>{
    return {type:FAILURE,payload}
}


export const postDataSuccessAction=(payload)=>{
    return {type:POST_SUCCESS,payload}
}

export const addDataToCart=(payload)=>{
    return {type:ADD_TO_CART,payload}
}