import React, { useEffect, useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import {
  CartContainer,
  CartTable,
  CouponApplyButton,
  CouponContainer,
  CouponInput,
  Divider,
  ImageContainer,
  Img,
  ItemContainer,
  ItemDetailsContainer,
  Li,
  Price,
  QuantityControlButton,
  TotalPriceContainer,
  TotalPriceWrapper,
} from "./StyledCartsection";
import { FiPlus, FiMinus } from "react-icons/fi";

const CartSection = ({ cartItems }) => {
  const [totalPrice, setTotalPrice] = useState(0);
  const[ itemQuantity, setItemQuantity ] = useState(1)


  const itemPrice = cartItems.map((cartItem, index) => {
    return cartItem.price * itemQuantity;
  });

  useEffect(() => {
    if (itemPrice.length !== 0) {
      const totalPrice = itemPrice.reduce(
        (initialPrice, nextPrice) => initialPrice + nextPrice
      );
      setTotalPrice(totalPrice);
    }
  }, [totalPrice, itemPrice]);

  const handleIncrement= () =>{
    setItemQuantity(itemQuantity + 1)
  }

  const handleDecrement = () =>{
    if(itemQuantity > 0 ){
      setItemQuantity(itemQuantity - 1)
    }
  }

  const deleteItem = (item) =>{
    cartItems.filter(cartItem=>{
      return cartItem.id  !== cartItem
    })
  }
  return (
    <CartContainer>
      <CartTable>
        <tbody>
          <tr>
            <th>Item</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total Price</th>
            <td></td>
          </tr>
          <tr>
            <td colSpan={6}>
              <div
                style={{
                  width: "100%",
                  backgroundColor: "#171515",
                  height: "2px",
                  opacity: "0.45",
                }}
              ></div>
            </td>
          </tr>
          {cartItems.map((cartItem) => {
           return(
              <tr key={cartItem._id}>
                <td style={{ textALign: "right" }}>
                  <ItemContainer>
                    <ImageContainer>
                      <Img
                        src={
                          "https://furniturestore54.herokuapp.com/" +
                          cartItem.itemImage
                        }
                      />
                    </ImageContainer>
                    <ItemDetailsContainer>
                      <p style={{ opacity: "0.7" }}>{cartItem.name}</p>
                    </ItemDetailsContainer>
                  </ItemContainer>
                </td>
                <td>
                  <Price>${(cartItem.price * itemQuantity * 10).toFixed(2)}</Price>
                </td>
                <td>
                  <QuantityControlButton>
                    <FiMinus onClick={handleDecrement}/> {itemQuantity} <FiPlus  onClick={handleIncrement}/>
                  </QuantityControlButton>
                </td>
                <td>$1400</td>
                <td>
                  <AiFillDelete onClick={(()=>deleteItem(cartItem))}/>
                </td>
              </tr>
            
          )})}
        </tbody>
      </CartTable>
      <Divider></Divider>
      <TotalPriceWrapper>
        <CouponContainer>
          <CouponInput type="text" placeholder="Coupon code" />
          <CouponApplyButton>
            <span style={{ opacity: "0.7" }}>Apply Coupon</span>{" "}
          </CouponApplyButton>
        </CouponContainer>
        <TotalPriceContainer>
          <div
            style={{
              display: "flex",
              width: "100%",
              justifyContent: "space-between",
            }}
          >
            <Li>SubTotal:</Li>
            <Li style={{ opacity: "1" }}>${(totalPrice * 10).toFixed(2)}</Li>
          </div>
          <div
            style={{
              display: "flex",
              width: "100%",
              justifyContent: "space-between",
            }}
          >
            <Li>Shipping:</Li>
            <Li style={{ opacity: "1" }}>Free</Li>
          </div>
          <div
            style={{ width: "90%", color: "#171515", opacity: "0.45" }}
          ></div>
          <div
            style={{
              display: "flex",
              width: "100%",
              justifyContent: "space-between",
            }}
          >
            <Li>Total Price:</Li>
            <Li style={{ opacity: "1" }}>${(totalPrice * 10).toFixed(2)}</Li>
          </div>
        </TotalPriceContainer>
      </TotalPriceWrapper>
    </CartContainer>
  );
};

export default CartSection;
