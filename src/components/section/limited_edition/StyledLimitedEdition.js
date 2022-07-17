import styled from "styled-components";

export const LimitedEditionContainer = styled.div`
  height: 1100px;
  width: 100%;
  background-color: #e5e5e5;

  @media (max-width: 1200px) {
    height: 1100px;
  }

  @media (max-width: 900px) {
    height: 800px;
  }

  @media (max-width: 780px) {
    height: 2200px;
  }

  @media(max-width: 600px){
    height: 1900px
  }
`;

export const LimitedEditionImageContainer = styled.div`
  height: 58%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  object-fit: contain;
  margin-top: 20px;

  @media (max-width: 780px) {
    height: 23%;
  }

  @media (max-width: 600px) {
    height: 15%;
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

  @media (max-width: 780px) {
    height: 77%;
  }

  @media(max-width: 600px){
    height:85%;
    margin-top: 10px
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
