import React from 'react'
import {useDispatch,useSelector} from "react-redux"
const Cart = () => {
    const cart=useSelector((store)=>{
        console.log(store)
        return store.cartReducer.cart
    })
  return (
    <div>
      <h3>Cart Page</h3>
      {cart.map((el)=>(
        <div key={el.id}>
        <h3>{el.title}</h3>
        <p>{el.rating}</p>
        <p>{el.location}</p>
    </div>
      ))}
    </div>
  )
}

export default Cart
