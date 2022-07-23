import styled from "styled-components";

export const CartContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  color: #171515;
`;

export const CartTable = styled.table`
  width: 80%;
`;

export const Price = styled.p``;

export const ImageContainer = styled.div`
  height: 200px;
  width: 350px;
  background-color: green;
`;

export const QuantityControlButton = styled.button`
  width: 70px;
  height: 30px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const TotalPriceWrapper = styled.div`
  width: 76%;
  justify-content: space-between;
  display: flex;
  height: 130px;
  align-items: center;
`;

export const CouponContainer = styled.div`
  width: 34%;
  display: flex;
  justify-content: space-between;
`;

export const TotalPriceContainer = styled.div`
  width: 35%;
  height: 85%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  `

export const CouponApplyButton = styled.button`
  padding: 10px 19px 10px 19px;
  background-color: #ffc304;
  height: 40px;
  font-size: 0.75rem;
  width: 120px;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  `

export const CouponInput = styled.input`
width:230px;
  padding: 10px 19px 10px 19px;
  height: 40px;
  font: 0.7rem;
  border: none;
`;
