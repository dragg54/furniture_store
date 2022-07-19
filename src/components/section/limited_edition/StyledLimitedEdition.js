import styled from "styled-components";

export const LimitedEditionContainer = styled.div`
  height: 1100px;
  width: 100%;
  background-color: #e5e5e5;
  position: relative;


  @media (max-width: 1200px) {
    height: 1100px;
  }

  @media (max-width: 900px) {
    height: 1100px;
  }

  @media (max-width: 780px) {
    height: 2900px;
  }

  @media(max-width: 600px){
    height: 1750px
  }
`;

export const LimitedEditionImageContainer = styled.div`
  height: 58%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  object-fit: contain;
  background-color: #ffc304;
  flex-direction: column;
  padding-top: 10px;

  @media (max-width: 780px) {
    height: 23%;
  }

  @media (max-width: 600px) {
    height: 17%;
    justify-content: space-between;
    padding: 50px 0
  }
`;

export const LimitedEditionItemsContainer = styled.div`
  width: 100%;
  height: 42%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 40px;

  @media (max-width: 1200px) {
    margin-top: 35px;
  }

  @media(max-width: 900px){
    height: 37%;
  }

  @media (max-width: 780px) {
    height: 77%;
  }

  @media(max-width: 600px){
    height:83%;
    margin-top: 25px
  }
`;

export const LimitedEditionItemsSection = styled.div`
  width: 85%;
  height: 40%;
  display: flex;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;
  margin-top: 70px;

  @media (max-width: 1200px) {
    width: 120%;
  }

  @media(max-width: 1080px){
    width: 150%
  }

  @media (max-width: 780px) {
    margin-top: 10px;
    flex-direction: column;
    width: 100%;
  }

  @media(max-width: 600px){
    margin-top: -20px
  }
`;
export const Img = styled.img`
  width: 100%;
  height: 100%;

`;

export const ItemImg = styled.img`
  width: 45%;
  height: 80%;
  margin-top: -130px;
 
  @media(max-width: 900px){
   width: 50%;
  }

  @media(max-width: 780px){
   width: 55%
  }

  @media(max-width: 600px){
   width: 63%;
   height: 70%;
   margin-top: -70px;
  }
`

export const LimitedEditionItemSectionsContainer = styled.div`
  width: 100%;
  height: 100%;

  @media (max-width: 1200px) {
    width: 85%;
    overflow-x: scroll;
  }

  @media (max-width: 780px) {
    margin-top: 20px;
    width: 90%;
    height: 100%;
    overflow: hidden;
  }
`;

export const DiscountPriceContainer = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  position: absolute;
  background-color: #FF0000;
  right: 25%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 1px 1px 1px gray;
  top: 19%;

  @media(max-width: 900px){
    width: 100px;
    height: 100px;
    right:22%;
    top: 20%;
    z-index: 10;
  }

  @media(max-width: 780px){
    top:7%;
    right: 20%
  }

  @media(max-width: 600px){
    width: 60px;
    height: 60px;
    top: 5%;
    right: 16%
  }
`

export const DiscountPrice = styled.p`
  font-size: 1.3rem;
  font-weight: bold;
  color:  #e5e5e5;

  @media(max-width: 900px){
    font-size: 1rem;
  }

  @media(max-width: 600px){
    font-size: 0.7rem
  }
`

export const SpecialItemHeading = styled.h3`
  font-size: 2.6rem;
  color:#0F1111;
  text-align: center;
  font-family: ubuntu;

  @media(max-width: 600px){
   font-size: 1.5rem;
  }
`

export const SpecialItemButton = styled.button`
  padding: 15px 30px;
  background-color: #FF0000;
  color: #e5e5e5;
  border: none;
  box-shadow: 1px 1px 1px gray;
  border-radius: 6px;
  border: 1px solid  #FF0000;
  font-size: 0.7rem;

  @media(max-width: 600px){
  padding: 10px 25px;
 

  }
`