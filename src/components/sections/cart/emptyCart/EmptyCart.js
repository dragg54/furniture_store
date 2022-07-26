import React from 'react'
import { EmptyCartContainer, EmptyCartMessage, Img, SadImageContainer } from './StyledEmptyCart'

const EmptyCart = () => {
  return (
    <EmptyCartContainer>
        <EmptyCartMessage>
            Cart Is Empty
        </EmptyCartMessage>
        <SadImageContainer>
            <Img src="../../../../../images/cart_empty_img.png"/>
        </SadImageContainer>
    </EmptyCartContainer>
  )
}

export default EmptyCart