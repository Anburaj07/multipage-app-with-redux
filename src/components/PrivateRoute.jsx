import React from 'react'
import {useSelector} from "react-redux"
import { Navigate } from 'react-router-dom'
const PrivateRoute = (props) => {
    const isAuth=useSelector((store)=>{
        console.log(store)
        return store.authReducer.isAuth
    })
    console.log(isAuth)
    if(!isAuth){
        return <Navigate to="/login" />
    }

  return props.children
}

export default PrivateRoute
