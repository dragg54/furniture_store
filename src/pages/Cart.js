import React, { useContext } from 'react'
import CartSection from '../components/sections/cart/CartSection'
import { CartContext } from '../context/GlobalContext'

const Cart = () => {
  const cartItems = useContext(CartContext).state  
  return (
    <CartSection cartItems = {cartItems}/>
  )
}

export default Cart