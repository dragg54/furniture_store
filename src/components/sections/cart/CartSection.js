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
import { DELETE_FROM_CART } from "../../../context/CartReducer";
import EmptyCart from "./emptyCart/EmptyCart";

const CartSection = ({ cartItems }) => {
  const [cartContent, setCartContent] = useState(cartItems.cartItems);
  const [totalPrice, setTotalPrice] = useState(0);
  const [itemQuantity, setItemQuantity] = useState(
    cartContent.map((cartItem, index) => {
      return { id: cartItem._id, quantity: 1 };
    })
  );

  console.log(cartItems.cartItems);
  useEffect(() => {
    function findTotalPrice() {
      let itemPrice = [];
      for (let cartItem of cartContent) {
        for (let quantity of itemQuantity) {
          if (cartItem._id === quantity.id) {
            itemPrice.push(cartItem.price * quantity.quantity);
          }
        }
      }
      return itemPrice;
    }
    const itemPrice = findTotalPrice();
    if (itemPrice.length !== 0) {
      const totalPrice = itemPrice.reduce(
        (initialPrice, nextPrice) => initialPrice + nextPrice
      );
      setTotalPrice(totalPrice);
    }
  }, [totalPrice, cartContent, itemQuantity]);

  const handleIncrement = (id) => {
    for (let item of itemQuantity) {
      if (item.id === id) {
        item.quantity = item.quantity + 1;
        setItemQuantity([...itemQuantity]);
      }
    }
  };

  const handleDecrement = (id) => {
    for (let item of itemQuantity) {
      if (item.id === id && item.quantity > 0) {
        item.quantity = item.quantity - 1;
        return setItemQuantity([...itemQuantity]);
      }

      else if(item.id === id && item.quantity <=0){
        cartItems.dispatch({ type: DELETE_FROM_CART, payload: { items: item } })
      }
    }
  };

  //delete cartItem
  const deleteItem = (items) => {
    cartItems.dispatch({ type: DELETE_FROM_CART, payload: { items: items } });
  };

  useEffect(() => {
    setCartContent(cartItems.cartItems);
  }, [cartItems.cartItems]);

  if (cartContent.length > 0 && totalPrice > 0) {
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
            {cartContent.map((cartItem) => {
              return itemQuantity.map((item) => {
                return (
                  <>
                    {cartItem._id === item.id ? (
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
                          <Price>{(cartItem.price * 10).toFixed(2)}</Price>
                        </td>
                        <td>
                          <QuantityControlButton>
                            <FiMinus
                              onClick={() => handleDecrement(cartItem._id)}
                            />

                            {item.quantity}
                            <FiPlus
                              onClick={() => handleIncrement(cartItem._id)}
                            />
                          </QuantityControlButton>
                        </td>
                        <td>
                          {(cartItem.price * item.quantity * 10).toFixed(2)}
                        </td>
                        <td>
                          <AiFillDelete onClick={() => deleteItem(cartItem)} />
                        </td>
                      </tr>
                    ) : (
                      ""
                    )}
                  </>
                );
              });
            })}
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
  } else {
    return (
      <CartContainer>
       <EmptyCart />
      </CartContainer>
    );
  }
};

export default CartSection;
