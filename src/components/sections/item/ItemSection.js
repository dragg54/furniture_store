import React from "react";
import {
  AddToCartButton,
  DiscountContainer,
  Img,
  ItemContentContainer,
  ItemImageContainer,
  ItemSectionContainer,
} from "./StyledItemSection";
import { BsStarFill, BsStarHalf } from "react-icons/bs";
import { FaShoppingCart} from "react-icons/fa";
import { BsTruck, BsClock } from "react-icons/bs";
import { ADD_TO_CART } from "../../../context/CartReducer";

const ItemSection = ({context}) => {
  const item = context.item
  const dispatch = context.dispatch
   const handleCartItems =(item) =>{
    dispatch({type:ADD_TO_CART, payload:{items: item}})
   }
  return (
    <>
      <ItemSectionContainer>
        <ItemImageContainer>
          <Img src={ "https://furniturestore54.herokuapp.com/" + item.itemImage} />
        </ItemImageContainer>
        <ItemContentContainer>
          <h1>{item.name}</h1>
          <div>
          <p style={{fontSize:"0.8rem"}}>
              <span style={{color:"#ffc304", marginRight:"6px"}}>
              <BsStarFill />
              <BsStarFill />
              <BsStarFill />
              <BsStarFill />
              <BsStarHalf /> 
               </span>
               96 Reviews
            </p>
          </div>
          <DiscountContainer>
            <div style={{width: "100%", height:"100%", border:"1px solid yellow", color:"#e5e5e5", display:"flex", flexDirection:"column", justifyContent:"center", padding:"10px"}}>
              <h5 style={{}}>ON ALL FURNINURES AND MATTRESSES</h5>
              <p style={{fontSize:"0.8rem"}}>Discount is automatically applied in cart. Limited time only</p>
            </div>
          </DiscountContainer>
          <p style={{fontSize:"0.8rem", opacity:"0.8"}}>
            <BsTruck style={{color:"green"}}/> Free delivery
          </p>
          <p style={{fontSize:"0.8rem", opacity:"0.8"}}>
            <BsClock style={{color:"green"}}/> 60 Day Low Price Guarantee
          </p>
          <h1>${(item.price * 10).toFixed(2)}</h1>
          <AddToCartButton onClick={()=>handleCartItems(item)}>
            <FaShoppingCart /> ADD TO CART
          </AddToCartButton>
        </ItemContentContainer>
      </ItemSectionContainer>
    </>
  );
};

export default ItemSection;
