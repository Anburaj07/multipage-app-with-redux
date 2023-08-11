import { ADD_TO_CART, FAILURE, GET_SUCCESS, POST_SUCCESS, REQUEST } from "./actionTypes"

const initialState={
    data:[],
    isLoading:false,
    isError:false,
    errorMessage:"",
    cart:[]
}
export const cartReducer=(state=initialState,{type,payload})=>{
    switch(type){
        case REQUEST:{
            return {...state,isLoadig:true,isError:false,errorMessage:''}
        }
        case GET_SUCCESS:{
            return {...state,isLoadig:false,data:payload}
        }
        case FAILURE:{
            return {...state,isLoadig:false,isError:true,errorMessage:payload}
        }

        case POST_SUCCESS:{
            return {...state,isLoadig:false,data:[...state.data,payload]}
        }
        case ADD_TO_CART:{
            return {...state,isLoadig:false,cart:[...state.cart,payload]}
        }
        default:
            return state
    }
}