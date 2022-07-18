import styled from "styled-components";

export const NowOnSaleContainer = styled.div`
  height: 600px;
  width: 100%;
  background-color: #e5e5e5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  
  @media (max-width: 780px) {
    height: 2400px;
  }

  @media (max-width: 600px) {
    justify-content: space-between;
    height: 1800px;
  }
`;

export const NowOnSaleSection = styled.div`
  width: 85%;
  height: 85%;

  @media (max-width: 1200px) {
    width: 94%;
    height: 85%;
    overflow-x: scroll;
  }

  @media(max-width: 1080px){
    overflow-x: scroll;
  }

  @media (max-width: 780px) {
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    height: 95%;
    overflow: hidden;
    margin-top: 20px;
  }
`;

export const HeadingContainer = styled.div`
  width: 85%;
  display: flex;
  justify-content: space-between;

  @media (max-width: 1200px) {
    width: 80%;
  }

  @media (max-width: 780px) {
    width: 84%;
    margin-top: 35px;
  }
`;

export const Heading = styled.h3`
  font-weight: 200px;
`;

export const UniqueButton = styled.div`
  width: 30px;
  height: 30px;
  border:${props=>props.secondary?"1px dotted #e5e5e5":"1px dotted #0f1111"} ;
  border-radius: 50%;
  position: relative;
`;

export const ButtonStroke = styled.div`
  width: 30px;
  height: 1px;
  background-color: ${props=>props.secondary?" #e5e5e5": "#0f1111"};
  position: absolute;
  left: 100%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

export const NowOnSaleItemsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1200px) {
    width: 120%;
  }

  @media (max-width: 780px) {
    width: 100%;
    flex-direction: column;
  }
`;

export const ItemCard = styled.div`
  height: 300px;
  width: 300px;
  margin-top: 30px;

  @media (max-width: 1200px) {
    width: 250px;
  }

  @media (max-width: 780px) {
    width: 90%;
    height: 520px;
  }

  @media (max-width: 600px) {
    width: 85%;
    height: 370px;
  }
`;

export const ImageContainer = styled.div`
  height: 76%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  object-fit: contain;
`;

export const DescriptionContainer = styled.div`
  height: 24%;
  width: 100%;
  padding-top: 10px;
`;
export const Img = styled.img`
  width: 100%;
  height: 100%;
`;
