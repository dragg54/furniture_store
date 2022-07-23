import React, { createContext, useReducer } from 'react'
import { reducer } from './CartReducer'


export const CartContext = createContext()
const initialState = []
const GlobalProvider = ({children}) => {
    const[state, dispatch] = useReducer(reducer, initialState)
  return (
    <CartContext.Provider value={{state, dispatch}}>
        {children}
    </CartContext.Provider>
  )
}

export default GlobalProvider