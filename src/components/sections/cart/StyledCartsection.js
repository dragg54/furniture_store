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

  @media (max-width: 1200px) {
    width: 90%;
  }

  @media (max-width: 780px) {
    width: 95%;
  }

  @media(max-width: 480px){
    width:100%
  }
`;

export const Price = styled.p``;

export const ImageContainer = styled.div`
  height: 100%;
  width: 60%;
  background-color: green;
  display: flex;
  justify-content: center;
  align-items: center;
  object-fit: contain;

  @media(max-width: 480px){
   width: 100%;
   height: 50%
  }
`;

export const ItemContainer = styled.div`
  height: 200px;
  width: 400px;
  display: flex;

  @media (max-width: 780px) {
    width: 300px;

  }

  @media(max-width: 600px){
    width: 200px;
    height: 150px;
  }

  @media(max-width: 480px){
    width: 50px;
    flex-direction: column;
    height: 140px;
    align-items: flex-start;
  }
`;

export const ItemDetailsContainer = styled.div`
  height: 100%;
  width: 40%;
  padding: 20px;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  @media(max-width: 480px){
   width: 100%;
   height: 35%;
   justify-content: flex-start;
   padding: 10px 0;
   font-size: 0.6rem
  }
`;

export const QuantityControlButton = styled.button`
  width: 70px;
  height: 30px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 4px;
  border: solid 1px gray;
`;

export const TotalPriceWrapper = styled.div`
  width: 76%;
  justify-content: space-between;
  display: flex;
  height: 130px;
  align-items: center;

  @media (max-width: 1200px) {
    width: 85%;
  }

  @media(max-width: 480px){
   height: 100px;
   width: 95%
  }
`;

export const CouponContainer = styled.div`
  width: 34%;
  display: flex;
  justify-content: space-between;

  
  @media (max-width: 780px) {
    width: 45%;
  }

  @media(max-width: 480px){
    width:50%
  }
`;

export const TotalPriceContainer = styled.div`
  width: 35%;
  height: 85%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  @media(max-width: 480px){
   width: 40%
  }
`;

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

  @media (max-width: 780px) {
    height: 30px;
    font-size: 0.6rem;
    width: 150px;
    padding: 5px
  }

  @media(max-width: 480px){
    width:120px;
    height: 25px;
    font-size: 0.2rem
  }
`;

export const CouponInput = styled.input`
  width: 230px;
  padding: 10px 19px 10px 19px;
  height: 40px;
  font-size: 0.7rem;
  border: none;
  margin-right: 8px;

  @media (max-width: 780px) {
    height: 30px;
    width: 170px;
    padding: 5px
  }

  @media(max-width: 480px){
   width: 110px;
   height: 25px;
  }
`;

export const Img = styled.img`
  height: 100%;
  width: 100%;
`;

export const Divider = styled.div`
  width: 80%;
  height: 2px;
  background-color: #171515;
  margin-bottom: 10px;
  opacity: 0.45;

  @media (max-width: 1200px) {
    width: 90%;
  }
`;

export const Li = styled.li`
  @media (max-width: 780px) {
    font-size: 0.8rem;
  }
`;

