import React, { useEffect, useState } from "react";
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
import { Link } from "react-router-dom"

const ItemSection = ({context}) => {
  const[buttonToggle, setButtonToggle] = useState(true)
  const item = context.item
  const dispatch = context.dispatch
   const handleCartItems =(item) =>{
    if(buttonToggle){
      dispatch({type:ADD_TO_CART, payload:{items: item}})
      setButtonToggle(false)
   }
    }
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [])
    if(item){
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
          <h1>${item.price?(item.price * 10).toFixed(2):""}</h1>
          <AddToCartButton onClick={()=>handleCartItems(item)}>
            <Link to={!buttonToggle? "/cart":""} style={{color:"#000"}}><FaShoppingCart/> {buttonToggle?"ADD TO CART":"PROCEED TO CART"}</Link>
          </AddToCartButton>
        </ItemContentContainer>
      </ItemSectionContainer>
    </>
  );
}
}

export default ItemSection;
