import React, { useContext } from 'react'
import CartSection from '../components/sections/cart/CartSection'
import { CartContext } from '../context/GlobalContext'

const Cart = () => {
  const dispatch = useContext(CartContext).dispatch
  const cartItems = useContext(CartContext).state  
  console.log(cartItems)
  return (
    <CartSection cartItems = {{cartItems, dispatch}}/>
  )
}

export default Cart