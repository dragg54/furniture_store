import styled from "styled-components";

export const HeroWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #171515;
`;
export const HeroContainer = styled.div`
  width: 70%;
  height: 600px;
  background-image: url("../../../images/hero.png");
  background-repeat: no-repeat;
  background-size: 600px;
  background-position-x: left;
  background-position-y: top;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  @media (max-width: 1200px) {
    width: 85%;
  }

  @media (max-width: 900px) {
    width: 100%;
  }

  @media (max-width: 600px) {
    height: 500px;
    justify-content: flex-start;
    background-position-x: 130px;
    background-position-y: top;
  }
`;
export const HeroContentContainer = styled.div`
  width: 34%;
  height: 68%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  color: #fff;
  margin-top: -70px;

  @media (max-width: 1200px) {
    width: 36%;
  }

  @media (max-width: 900px) {
    width: 45%;
  }

  @media (max-width: 600px) {
    width: 80%;
    padding: 0 20px;
    margin-top: -20px;
  }
`;

export const HeroPrimaryCaption = styled.h2`
  font-family: ubuntu;
  font-size: 2.6rem;

  @media (max-width: 1200px) {
    font-size: 2rem;
  }

  @media (max-width: 600px) {
    line-height: 34px;
  }
`;

export const HeroSecondaryCaption = styled.p`
  font-size: 0.8rem;
  opacity: 0.7;
  margin-top: 10px;

  @media(max-width: 900px){
        width: 70%;
    }

  @media (max-width: 600px) {
    margin-top: 0px;
    font-size: 0.6rem;
    width: 70%;
  }
`;

export const PrimaryButton = styled.div`
  font-size: 0.7rem;
  padding: 15px 25px;
  background-color: #ffc304;
  border: none;
  border-radius: 6px;
  margin-top: 20px;
  color: #000;
  font-weight: 600;

  @media (max-width: 600px) {
    padding: 10px 20px;
    margin-top: 10px;
    font-size: 0.6rem;
  }
`;
