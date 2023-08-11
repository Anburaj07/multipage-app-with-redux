import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Homepage from '../pages/Homepage'
import Login from '../pages/Login'
import Cart from '../pages/Cart'
import PrivateRoute from './PrivateRoute'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Homepage/>} />
        <Route path="/login" element={<Login/>} />
        <Route path='/cart' element={<PrivateRoute>
            <Cart/>
        </PrivateRoute>
    } />
    </Routes>
  )
}

export default AllRoutes
