import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { authFailureAction, authRequestAction, authSuccessAction } from '../Redux/action'

const Login = () => {
    const [email,setEmail]=useState('eve.holt@reqres.in')
    const [password,setPassword]=useState('cityslicka')
    const navigate=useNavigate();
    const dispatch=useDispatch();
    const {isAuth,isError,token,loading,errMessage}=useSelector(store=>{
        console.log(store)
        return{
            isAuth:store.authReducer.isAuth,
            token:store.authReducer.token,
            loading:store.authReducer.loading,
            isError:store.authReducer.isError,
            errMessage:store.authReducer.errMessage
        }
      },shallowEqual)

    const handleSubmit=(e)=>{
        e.preventDefault();
        let user={
            email,
            password
        }
        loginUser(user)
    }
    const loginUser=(userObj)=>{
        dispatch(authRequestAction())
        axios.post('https://reqres.in/api/login',userObj)
        .then((res)=>{
            console.log(res.data)
            const {token}=res.data;
            // localStorage.setItem('token', token);
            // localStorage.setItem('authState', JSON.stringify(true));   
            dispatch(authSuccessAction(token))                
        }).catch((err)=>{
            dispatch(authFailureAction(err.errorMessage))
        })
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Enter Email'value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <input type="text" placeholder='Enter user password' value={password}onChange={(e)=>setPassword(e.target.value)}/>
        <button type='submit'>Login</button>
      </form>
      {isError && <h3>{errMessage}</h3>}
    </div>
  )
}

export default Login
