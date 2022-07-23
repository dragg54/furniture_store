import React from "react";
import { AiFillDelete } from "react-icons/ai";
import {
  CartContainer,
  CartTable,
  CouponApplyButton,
  CouponContainer,
  CouponInput,
  ImageContainer,
  Price,
  QuantityControlButton,
  TotalPriceContainer,
  TotalPriceWrapper,
} from "./StyledCartsection";
import { FiPlus, FiMinus } from "react-icons/fi";

const CartSection = ({ cartItems }) => {
  console.log(cartItems);
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
          {cartItems.map(cartItem=>{
            return(
              <tr key={cartItem.id}>
            <td style={{ textAlign: "right" }}>
              <ImageContainer />
            </td>
            <td>
              <Price>${(cartItem.price * 10).toFixed(2)}</Price>
            </td>
            <td>
              <QuantityControlButton>
                <FiMinus /> 1 <FiPlus />
              </QuantityControlButton>
            </td>
            <td>$1400</td>
            <td>
              <AiFillDelete />
            </td>
          </tr>
            )

          })}
        </tbody>
      </CartTable>
      <div
        style={{
          width: "80%",
          height: "2px",
          backgroundColor: "#171515",
          marginBottom: "10px",
          opacity: "0.45",
        }}
      ></div>
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
            <li>SubTotal:</li>
            <li style={{ opacity: "1" }}>$12333</li>
          </div>
          <div
            style={{
              display: "flex",
              width: "100%",
              justifyContent: "space-between",
            }}
          >
            <li>Shipping:</li>
            <li style={{ opacity: "1" }}>Free</li>
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
            <li>Total Price:</li>
            <li style={{ opacity: "1" }}>$12344</li>
          </div>
        </TotalPriceContainer>
      </TotalPriceWrapper>
    </CartContainer>
  );
};

export default CartSection;
