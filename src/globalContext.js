import React from 'react'

const globalContext = ({children}) => {
  return (
   <ItemContext value={data}>
    {children}
   </ItemContext>
  )
}

export default globalContext