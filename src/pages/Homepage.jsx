import axios from 'axios'
import React, { useEffect, useState } from 'react';
import {useDispatch,useSelector} from "react-redux"
import { addDataToCart, failureAction, getDataSuccessAction, requestAction } from '../Redux/action';

const Homepage = () => {
    const dispatch=useDispatch()
    const data=useSelector((store)=>{
        console.log(store)
        return store.cartReducer.data
    })

    useEffect(()=>{
        fetchData()
    },[])

    const fetchData=()=>{
        dispatch(requestAction())
        axios.get(`http://localhost:8080/packages`)
        .then((res)=>{
            dispatch(getDataSuccessAction(res.data))
        }).catch((err)=>{
            dispatch(failureAction(err.message))
            console.log(err)
        })
    }
    const handleCart=(el)=>{
        dispatch(addDataToCart(el))
    }
  return (
    <div>
      {data.map((el)=>(
        <div key={el.id}>
            <h3>{el.title}</h3>
            <p>{el.rating}</p>
            <p>{el.location}</p>
            <button onClick={()=>handleCart(el)}>Add to cart</button>
        </div>
      ))}
    </div>
  )
}

export default Homepage
